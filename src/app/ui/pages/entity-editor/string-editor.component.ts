import { Component, effect } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditorComponent } from './editor-component';

@Component({
  selector: 'string-editor',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule],
  templateUrl: './string-editor.component.html',
  styleUrl: './string-editor.component.scss',
})
export class StringEditorComponent extends EditorComponent<string> {
  control: FormControl<string | null> = new FormControl('');

  constructor() {
    super();

    effect(() => {
      this.control.setValue(this.value() || '');
    });
  }

  override getValue(): string {
    return this.control.value || '';
  }
}
