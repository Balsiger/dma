import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Campaign } from '../../../../data/Campaign';
import { Item } from '../../../../data/item';
import { ItemSubtype } from '../../../../data/values/item-subtype';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  ItemSubtype = ItemSubtype;

  @Input() item!: Item;
  @Input() campaign?: Campaign;
  @Input() overview = true;

  constructor(private readonly dialog: MatDialog) {}

  onName() {
    this.dialog.open(ItemDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        item: this.item,
        campaign: this.campaign,
      },
    });
  }
}
