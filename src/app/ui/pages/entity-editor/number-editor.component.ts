import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormattedTextComponent } from '../../common/formatted-text/formatted-text.component';
import { EditorInputComponent } from './editor-input.component';

@Component({
  selector: 'number-editor',
  standalone: true,
  templateUrl: './editor-input.component.html',
  styleUrl: './editor-input.component.scss',
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
})
export class NumberEditorComponent extends EditorInputComponent<number, number> {
  override fromValue(value: number | undefined): number | null {
    return value || null;
  }

  override toValue(input: number | null): number {
    return input || 0;
  }
}
