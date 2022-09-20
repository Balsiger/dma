import { Component, Input } from '@angular/core';
import { Item } from '../../../../data/item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item!: Item;

  constructor() {}

  onName() {}
}
