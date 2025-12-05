import { Component, effect, input } from '@angular/core';
import { map, startWith } from 'rxjs';
import { EntitiesService } from '../../../services/entity/entities.service';
import { EditorInputComponent, IMPORTS } from './editor-input.component';

const MAX_ITEMS = 100;
const MIN_INPUT = 2;

@Component({
  selector: 'string-editor',
  imports: IMPORTS,
  templateUrl: './editor-input.component.html',
  styleUrl: './editor-input.component.scss',
})
export class StringEditorComponent extends EditorInputComponent<string, string> {
  options = input<string[]>([]);

  constructor(entitiesService: EntitiesService) {
    super(entitiesService);

    effect(async () => {
      const options = await this.entitiesService.computeAutocompleteOptions(
        this.field().fieldMetadata?.autocomplete,
        this.field().fieldMetadata?.lookup,
        this.autocompleteType() || this.entityType(),
        this.field().name,
      );

      this.allOptions.set(options.length ? options : this.options());
    });
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((v) => this.filterOptions(v || '')),
    );
  }

  override fromValue(value: string | undefined): string {
    return value?.trim() || '';
  }

  override toValue(input: string | null): string {
    return input?.trim() || '';
  }

  private filterOptions(input: string): string[] {
    const value = input.toLowerCase();
    if (this.allOptions().length > MAX_ITEMS && input.length > MIN_INPUT) {
      return this.allOptions().filter((o) => o.toLowerCase().includes(value));
    } else {
      return [];
    }
  }
}
