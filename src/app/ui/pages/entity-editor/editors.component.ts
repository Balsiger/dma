import { Component, forwardRef } from '@angular/core';
import { BooleanEditorComponent } from './boolean-editor.component';
import { EditorComponent } from './editor.component';
import { EnumArrayEditorComponent } from './enum-array-editor.component';
import { EnumEditorComponent } from './enum-editor.component';
import { MessageArrayEditorComponent } from './message-array-editor.component';
import { MessageEditorComponent } from './message-editor.component';
import { NumberArrayEditorComponent } from './number-array-editor.component';
import { NumberEditorComponent } from './number-editor.component';
import { RangeArrayEditorComponent } from './range-array-editor.component';
import { RangeEditorComponent } from './range-editor.component';
import { ReferenceEditorComponent } from './reference-editor.component';
import { StringArrayEditorComponent } from './string-array-editor.component';
import { StringEditorComponent } from './string-editor.component';

@Component({
  selector: 'editors',
  standalone: true,
  imports: [
    EnumEditorComponent,
    StringArrayEditorComponent,
    NumberArrayEditorComponent,
    ReferenceEditorComponent,
    RangeEditorComponent,
    forwardRef(() => MessageEditorComponent),
    BooleanEditorComponent,
    NumberEditorComponent,
    StringEditorComponent,
    RangeArrayEditorComponent,
    MessageArrayEditorComponent,
    EnumArrayEditorComponent,
  ],
  templateUrl: './editors.component.html',
})
export class EditorsComponent<T> extends EditorComponent<T> {}
