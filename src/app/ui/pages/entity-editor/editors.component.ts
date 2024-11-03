import { Component, forwardRef, ViewChild } from '@angular/core';
import { ArrayEditorComponent } from './array-editor.component';
import { BooleanEditorComponent } from './boolean-editor.component';
import { EditorComponent } from './editor.component';
import { EnumEditorComponent } from './enum-editor.component';
import { MessageEditorComponent } from './message-editor.component';
import { NumberEditorComponent } from './number-editor.component';
import { RangeEditorComponent } from './range-editor.component';
import { StringEditorComponent } from './string-editor.component';

@Component({
  selector: 'editors',
  standalone: true,
  imports: [
    EnumEditorComponent,
    RangeEditorComponent,
    forwardRef(() => MessageEditorComponent),
    BooleanEditorComponent,
    NumberEditorComponent,
    StringEditorComponent,
    ArrayEditorComponent,
  ],
  templateUrl: './editors.component.html',
})
export class EditorsComponent<T> extends EditorComponent<T> {
  @ViewChild('editor') editor!: EditorComponent<T>;

  override getValue(): T | undefined {
    return this.editor.getValue();
  }

  anyValue(): any {
    return this.value();
  }
}
