import { Component, effect, forwardRef, QueryList, ViewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AreaContainerComponent } from '../../common/area-container/area-container.component';
import { EditorComponent } from './editor.component';
import { EditorsComponent } from './editors.component';
import { MessageEditorComponent } from './message-editor.component';

@Component({
  selector: 'array-editor',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    AreaContainerComponent,
    MessageEditorComponent,
    forwardRef(() => EditorsComponent),
  ],
  templateUrl: './array-editor.component.html',
  styleUrl: './array-editor.component.scss',
})
export abstract class ArrayEditorComponent<T> extends EditorComponent<T[]> {
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
  }

  protected abstract createEmpty(): T;

  onRemove(index: number) {
    this.allValues = this.getValue() || [];
    this.allValues.splice(index, 1);
  }
}
