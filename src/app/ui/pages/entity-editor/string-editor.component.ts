import { Component, effect, input } from '@angular/core';
import { map, startWith } from 'rxjs';
import { EntitiesService } from '../../../services/entity/entities.service';
import { EditorInputComponent, IMPORTS } from './editor-input.component';

@Component({
  selector: 'string-editor',
  standalone: true,
  imports: IMPORTS,
  templateUrl: './editor-input.component.html',
  styleUrl: './editor-input.component.scss',
})
export class StringEditorComponent extends EditorInputComponent<string, string> {
  options = input<string[]>([]);

  constructor(entitiesService: EntitiesService) {
    super(entitiesService);

    effect(
      async () => {
        const options = await this.entitiesService.computeAutocompleteOptions(
          this.field().fieldMetadata?.autocomplete,
          this.entityType(),
          this.field().name,
        );

        this.allOptions.set(options.length ? options : this.options());
      },
      { allowSignalWrites: true },
    );
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((v) => this.filterOptions(v || '')),
    );
  }

  override fromValue(value: string | undefined): string {
    return value || '';
  }
  override toValue(input: string | null): string {
    return input || '';
  }

  private filterOptions(input: string): string[] {
    const value = input.toLowerCase();
    return this.allOptions().filter((o) => o.toLowerCase().includes(value));
  }
}
