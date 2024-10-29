import { Component, effect } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormattedTextComponent } from '../../common/formatted-text/formatted-text.component';
import { EditorComponent } from './editor-component';

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    FormattedTextComponent,
    MatIconModule,
    MatButtonModule,
    FormattedTextComponent,
  ],
  templateUrl: './editor-input.component.html',
  styleUrl: './editor-input.component.scss',
})
export abstract class EditorInputComponent<V, I> extends EditorComponent<V> {
  control: FormControl<I | null> = new FormControl();
  showFormatted = false;

  constructor() {
    super();

    effect(() => {
      this.control.setValue(this.fromValue(this.value()));
    });
  }

  abstract fromValue(value: V | undefined): I;
  abstract toValue(input: I | null): V;

  override getValue(): V {
    return this.toValue(this.control.value);
  }

  toggleFormatted() {
    this.showFormatted = !this.showFormatted;
  }
}
