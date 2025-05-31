import { Component, forwardRef, ViewChild } from '@angular/core';
import { PAMAMETRIZED } from '../../../proto/metadata';
import { ArrayEditorComponent } from './array-editor.component';
import { BooleanEditorComponent } from './boolean-editor.component';
import { EditorComponent } from './editor.component';
import { EnumEditorComponent } from './enum-editor.component';
import { LinkEditorComponent } from './link-editor.component';
import { MessageEditorComponent } from './message-editor.component';
import { NumberEditorComponent } from './number-editor.component';
import { RangeEditorComponent } from './range-editor.component';
import { StringEditorComponent } from './string-editor.component';

@Component({
    selector: 'editors',
    imports: [
        EnumEditorComponent,
        RangeEditorComponent,
        forwardRef(() => MessageEditorComponent),
        BooleanEditorComponent,
        NumberEditorComponent,
        StringEditorComponent,
        ArrayEditorComponent,
        LinkEditorComponent,
    ],
    templateUrl: './editors.component.html'
})
export class EditorsComponent<T> extends EditorComponent<T> {
  @ViewChild('editor') editor!: EditorComponent<T>;

  override getValue(): T | undefined {
    return this.editor.getValue();
  }

  override focus() {
    this.editor.focus();
  }

  anyValue(): any {
    return this.value();
  }

  determineAutocompleteType(fieldName: string, fieldType: string): string {
    if (fieldType === 'ParametrizedProto') {
      return PAMAMETRIZED.get(fieldName) || '';
    }

    return '';
  }
}
