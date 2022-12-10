import { Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Campaign } from '../../../../data/Campaign';
import { Item } from '../../../../data/item';

export interface Data {
  item: Item;
  campaign?: Campaign;
}

@Component({
  selector: 'item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.scss'],
})
export class ItemDialogComponent {
  readonly item: Item;
  readonly campaign?: Campaign;

  constructor(@Inject(MAT_DIALOG_DATA) data: Data) {
    this.item = data.item;
    this.campaign = data.campaign;
  }
}
