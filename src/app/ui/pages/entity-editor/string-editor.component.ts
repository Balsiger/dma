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
        if (this.field().fieldMetadata?.autocomplete) {
          // We should only have the autocomplete field set for components with type string!
          this.allOptions.set(await this.computeAutocompleteOptions(this.entityType()));
        } else {
          this.allOptions.set(this.options());
        }
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

  private async computeAutocompleteOptions(type: string): Promise<string[]> {
    await this.entitiesService.ensureLoaded();

    switch (type) {
      case 'Monster':
        return this.entitiesService.monsters.getAll().map((m) => m.name);
      case 'Npc':
        return this.entitiesService.npcs.getAll().map((m) => m.name);
      case 'Condition':
        return this.entitiesService.conditions.getAll().map((m) => m.name);
      case 'Item':
        return this.entitiesService.items.getAll().map((m) => m.name);
      case 'Spell':
        return this.entitiesService.spells.getAll().map((m) => m.name);
      case 'Product':
        return this.entitiesService.products.getAll().map((m) => m.name);
      case 'Map':
        return this.entitiesService.maps.getAll().map((m) => m.name);
      case 'Token':
        return this.entitiesService.tokens.getAll().map((m) => m.name);
      case 'Miniature':
        return this.entitiesService.miniatures.getAll().map((m) => m.name);
      default:
        return [];
    }
  }
}
