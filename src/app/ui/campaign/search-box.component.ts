import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Multimap } from '../../../common/multimap';
import { Item } from '../../data/entities/item';
import { Campaign } from '../../data/facts/campaign';
import { EncounterFact } from '../../data/facts/encounter-fact';
import { ExpandingBoxComponent } from '../common/expanding-box/expanding-box.component';
import { ItemCardComponent } from '../item/item-card.component';

@Component({
  selector: 'search-box',
  imports: [ExpandingBoxComponent, MatIcon, MatFormFieldModule, MatInputModule, FormsModule, ItemCardComponent],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent {
  campaign = input.required<Campaign>();

  itemsByName = new Multimap<string, { item: Item; encounter: EncounterFact }>();
  itemsFiltered: { item: Item; encounter: EncounterFact }[] = [];

  constructor() {}

  onSearchItem(input: string) {
    this.ensureItemsProcessed();

    const regex = new RegExp(input, 'i');
    this.itemsFiltered = this.itemsByName
      .entries()
      .filter((e) => e.key.match(regex))
      .map((e) => e.value);
  }

  private ensureItemsProcessed() {
    if (this.itemsByName.size > 0) {
      return;
    }

    for (const encounter of this.campaign().adventure()?.encounters() ?? []) {
      for (const item of encounter.entity.items ?? []) {
        this.addItem(item.name, item.entity, encounter.fact);
        for (const base of item.bases) {
          this.addItem(base, item.entity, encounter.fact);
        }
      }
    }
  }

  private addItem(name: string, item: Item, encounter: EncounterFact) {
    this.itemsByName.set(name, { item, encounter });
  }
}
