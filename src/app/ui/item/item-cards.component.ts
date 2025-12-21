import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Utils } from '../../../common/utils';
import { Item } from '../../data/entities/item';
import { EntitiesService } from '../../services/entity/entities.service';
import { ItemCardComponent } from './item-card.component';

const CARDS_PER_PAGE = 15;
const MAX_ITEMS = 100;
const MIN_INPUT = 2;

@Component({
  selector: 'item-cards',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ItemCardComponent, MatAutocompleteModule],
  templateUrl: './item-cards.component.html',
  styleUrl: './item-cards.component.scss',
})
export class ItemCardsComponent {
  protected names: { item: string; location: string }[] = [{ item: '', location: '' }];
  protected pages: { item: Item; location: string }[][] = [];
  protected filteredOptions: string[] = [];
  protected allOptions: string[] = [];

  constructor(private readonly entities: EntitiesService) {
    this.init();
  }

  private async init() {
    await this.entities.ensureLoaded();
    this.allOptions = await EntitiesService.dedupe(this.entities.items.getAll().map((e) => e.name));
  }

  onChangeItem(i: number, value: string) {
    this.names[i].item = value;

    if (this.names[i].item || this.names[i].location) {
      if (i == this.names.length - 1) {
        this.names.push({ item: '', location: '' });
      }
    } else {
      if (i != this.names.length - 1) {
        this.names.splice(i, 1);
      }
    }

    this.update();
  }

  onChangeLocation(i: number, value: string) {
    this.names[i].location = value;

    this.update();
  }

  onInput(i: number, value: string) {
    this.filteredOptions = this.filterOptions(value);
  }

  private update() {
    const names = this.names
      .filter((i) => !!i.item)
      .flatMap((i) => i.item.split(/\s*;\s*/).map((n) => ({ item: n, location: i.location })));

    const locatedItems: { item: Item; location: string }[] = names.map((n) => ({
      item: this.lookup(n.item),
      location: n.location,
    }));
    this.pages = Utils.paginate(locatedItems, CARDS_PER_PAGE);
  }

  private lookup(name: string): Item {
    if (name.indexOf('[') > 0) {
      return Item.fromString(this.entities.items, name);
    } else {
      return this.entities.items.get(name);
    }
  }

  private filterOptions(input: string): string[] {
    const value = input.toLowerCase();
    if (this.allOptions.length > MAX_ITEMS && input.length > MIN_INPUT) {
      return this.allOptions.filter((o) => o.toLowerCase().includes(value));
    } else {
      return [];
    }
  }

  @HostListener('window:beforeunload')
  onLeave(): boolean {
    return false;
  }
}
