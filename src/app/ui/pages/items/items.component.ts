import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Item } from '../../../data/things/item';
import { ItemSubtype } from '../../../data/values/enums/item-subtype';
import { ItemType } from '../../../data/values/enums/item-type';
import { Rarity } from '../../../data/values/enums/rarity';
import { Size } from '../../../data/values/size';
import { ItemService } from '../../../services/item.service';
import { EntitiesGridComponent } from '../../common/entities-grid/entities-grid.component';
import { Filter } from '../../common/filtering-line/filtering-line.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { PageComponent } from '../../common/page/page.component';

@Component({
  selector: 'items',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  items: Item[] = [];
  filters: Filter[] = [];

  constructor(private readonly itemService: ItemService) {
    this.load();
  }

  async load() {
    this.items = await this.itemService.getAll();

    this.filters = [{
      label: 'Name',
    }, {
      label: 'Type',
      options: ItemType.types.map(t => ({label: t.name, value: t})),
      multiple: true,
    }, {
      label: 'Subtype',
      options: ItemSubtype.types.map(s => ({label: s.name, value: s})),
      multiple: true,
    }, {
      label: 'Size',
      options: Size.sizes.map(s => ({label: s.name, value: s })),
      multiple: true,
    }, {
      label:  'Rarity',
      options: Rarity.probabilities.map(r => ({label: r.name, value: r })),
      multiple: true,
    }];
  }
}
