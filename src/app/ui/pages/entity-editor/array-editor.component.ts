import { Component, effect, forwardRef, QueryList, ViewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Message } from 'google-protobuf';
import { Utils } from '../../../../common/utils';
import { EditorComponent } from './editor.component';
import { EditorsComponent } from './editors.component';

@Component({
  selector: 'array-editor',
  imports: [MatButtonModule, MatIconModule, forwardRef(() => EditorsComponent)],
  templateUrl: './array-editor.component.html',
  styleUrl: './array-editor.component.scss',
})
export class ArrayEditorComponent<T> extends EditorComponent<T[]> {
  @ViewChildren('editor') inputValues!: QueryList<EditorComponent<T>>;

  allValues: T[] = [];

  constructor() {
    super();

    effect(() => {
      this.allValues = this.value() || [];
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
}
