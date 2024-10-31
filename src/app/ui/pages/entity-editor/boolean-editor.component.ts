import { Component, effect, model } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditorComponent } from './editor.component';

@Component({
  selector: 'boolean-editor',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule, MatCheckboxModule],
  templateUrl: './boolean-editor.component.html',
  styleUrl: './boolean-editor.component.scss',
})
export class BooleanEditorComponent extends EditorComponent<boolean> {
  checked = model(false);

  constructor() {
    super();

    effect(
      () => {
        this.checked.set(this.value() || false);
      },
      { allowSignalWrites: true },
    );
  }

  override getValue(): boolean {
    return this.checked();
  }
}
