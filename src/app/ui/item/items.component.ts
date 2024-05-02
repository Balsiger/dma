import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Item } from '../../data/entities/item';
import { ItemSubtype } from '../../data/entities/values/enums/item-subtype';
import { ItemType } from '../../data/entities/values/enums/item-type';
import { Rarity } from '../../data/entities/values/enums/rarity';
import { Size } from '../../data/entities/values/size';
import { Campaign } from '../../data/facts/campaign';
import { ItemService } from '../../services/entity/item.service';
import { Filter } from '../common/filtering-line/filtering-line.component';
import { EntitiesGridComponent } from '../entities/entities-grid.component';
import { PageTitleComponent } from '../pages/page-title.component';
import { PageComponent } from '../pages/page.component';

@Component({
  selector: 'items',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  embed = input(false);
  campaign = input<Campaign>();

  items: Item[] = [];
  filters: Filter[] = [];

  constructor(private readonly itemService: ItemService) {
    this.load();
  }

  async load() {
    this.items = await this.itemService.getAll();

    this.filters = [
      {
        label: 'Name',
      },
      {
        label: 'Type',
        options: ItemType.types.map((t) => ({ label: t.name, value: t })),
        multiple: true,
      },
      {
        label: 'Subtype',
        options: ItemSubtype.types.map((s) => ({ label: s.name, value: s })),
        multiple: true,
      },
      {
        label: 'Size',
        options: Size.sizes.map((s) => ({ label: s.name, value: s })),
        multiple: true,
      },
      {
        label: 'Rarity',
        options: Rarity.probabilities.map((r) => ({ label: r.name, value: r })),
        multiple: true,
      },
    ];
  }
}
