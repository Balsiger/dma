import { Component, effect } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditorComponent } from './editor-component';

@Component({
  selector: 'number-editor',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule],
  templateUrl: './number-editor.component.html',
  styleUrl: './number-editor.component.scss',
})
export class NumberEditorComponent extends EditorComponent<number> {
  control: FormControl<number | null> = new FormControl(null);

  constructor() {
    super();

    effect(() => {
      this.control.setValue(this.value() || null);
    });
  }

  override getValue(): number {
    return this.control.value || 0;
  }
}
