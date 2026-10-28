import { ChangeDetectionStrategy, Component, effect, forwardRef, QueryList, ViewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Message } from 'google-protobuf';
import { firstValueFrom } from 'rxjs';
import { Utils } from '../../../../common/utils';
import { ProductProto } from '../../../proto/generated/template_pb';
import { Parsable } from '../../../proto/metadata';
import { TextDialogComponent } from '../../common/text-dialog/text-dialog.component';
import { EditorComponent } from './editor.component';
import { EditorsComponent } from './editors.component';

@Component({
  selector: 'array-editor',
  imports: [MatButtonModule, MatIconModule, forwardRef(() => EditorsComponent)],
  templateUrl: './array-editor.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './array-editor.component.scss',
})
export class ArrayEditorComponent<T> extends EditorComponent<T[]> {
  @ViewChildren('editor') inputValues!: QueryList<EditorComponent<T>>;

  allValues: T[] = [];

  constructor(private readonly dialog: MatDialog) {
    super();

    effect(() => {
      this.allValues = this.value() || [];

      console.log('array editor', this.field().name, this.field().fieldMetadata);
    });
  }

  override getValue(): T[] | undefined {
    return this.inputValues.map((v) => v.getValue()).filter<T>((v): v is T => v !== undefined);
  }

  onAdd() {
    this.allValues.push(this.createEmpty());

    // Can only access the new field once it has been created.
    setTimeout(() => {
      this.inputValues.last.focus();
    });
  }

  async onParse() {
    const dialog = this.dialog.open(TextDialogComponent, {
      hasBackdrop: true,
      data: {
        title: this.field().name,
      },
    });

    const text = await firstValueFrom(dialog.afterClosed());
    const parsable = this.field().fieldMetadata?.parsable;
    if (text && parsable) {
      const values = this.parse(text, parsable);
      this.allValues.push(...values);
    }
  }

  protected createEmpty(): T {
    if (this.value() instanceof Message) {
      return this.field().create() as T;
    }

    if (typeof this.value() === 'number') {
      return 0 as T;
    }

    return '' as T;
  }

  onRemove(index: number) {
    this.allValues = this.getValue() || [];
    this.allValues.splice(index, 1);

    // We need to rerender the array elements before emitting the change, or it will just read the old values.
    Utils.delayed(() => {
      this.changed.emit();
    });
  }

  override focus() {
    this.inputValues.first.focus();
  }

  private parse(text: string, parsable: Parsable): T[] {
    switch (parsable) {
      case Parsable.persons:
        return this.parsePersons(text);
    }

    return [];
  }

  private parsePersons(text: string): T[] {
    const persons: ProductProto.Person[] = [];

    for (const line of text.split(/\s*\n\s*/)) {
      const parts = line.split(/\s*:\s*/);
      const name = parts[0];
      const job = parts[1]?.toLowerCase();

      const person = new ProductProto.Person();
      person.setName(name);
      person.setJob(job);
      persons.push(person);
    }

    return persons as T[];
  }
}
