import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Utils } from '../../../common/utils';
import { Item } from '../../data/entities/item';
import { EntitiesService } from '../../services/entity/entities.service';
import { ItemCardComponent } from './item-card.component';

const CARDS_PER_PAGE = 15;

@Component({
  selector: 'item-cards',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ItemCardComponent],
  templateUrl: './item-cards.component.html',
  styleUrl: './item-cards.component.scss',
})
export class ItemCardsComponent {
  protected names: { item: string; location: string }[] = [{ item: '', location: '' }];
  protected pages: { item: Item; location: string }[][] = [];

  constructor(private readonly entities: EntitiesService) {}

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
}
