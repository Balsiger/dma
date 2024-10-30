import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormattedTextComponent } from '../../common/formatted-text/formatted-text.component';
import { EditorInputComponent } from './editor-input.component';

@Component({
  selector: 'string-editor',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    FormattedTextComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './editor-input.component.html',
  styleUrl: './editor-input.component.scss',
})
export class StringEditorComponent extends EditorInputComponent<string, string> {
  override fromValue(value: string | undefined): string {
    return value || '';
  }
  override toValue(input: string | null): string {
    return input || '';
  }
}
