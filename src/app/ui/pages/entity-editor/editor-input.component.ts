import { AsyncPipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { EntitiesService } from '../../../services/entity/entities.service';
import { FormattedTextComponent } from '../../common/formatted-text/formatted-text.component';
import { EditorComponent } from './editor.component';

export const IMPORTS = [
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  FormsModule,
  FormattedTextComponent,
  MatIconModule,
  MatButtonModule,
  FormattedTextComponent,
  MatAutocompleteModule,
  AsyncPipe,
];

@Component({
  standalone: true,
  imports: IMPORTS,
  templateUrl: './editor-input.component.html',
  styleUrl: './editor-input.component.scss',
})
export abstract class EditorInputComponent<V, I> extends EditorComponent<V> {
  control: FormControl<I | null> = new FormControl();
  showFormatted = false;
  filteredOptions?: Observable<string[]>;
  allOptions = signal<string[]>([]);

  constructor(protected readonly entitiesService: EntitiesService) {
    super();

    effect(() => {
      this.control.setValue(this.fromValue(this.value()));
    });
  }

  abstract fromValue(value: V | undefined): I | null;
  abstract toValue(input: I | null): V;

  override getValue(): V {
    return this.toValue(this.control.value);
  }

  toggleFormatted() {
    this.showFormatted = !this.showFormatted;
  }
}
