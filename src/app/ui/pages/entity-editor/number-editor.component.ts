import { Component } from '@angular/core';
import { EditorInputComponent, IMPORTS } from './editor-input.component';

@Component({
    selector: 'number-editor',
    templateUrl: './editor-input.component.html',
    styleUrl: './editor-input.component.scss',
    imports: IMPORTS
})
export class NumberEditorComponent extends EditorInputComponent<number, number> {
  override fromValue(value: number | undefined): number | null {
    return value || null;
  }

  override toValue(input: number | null): number {
    return input || 0;
  }
}
