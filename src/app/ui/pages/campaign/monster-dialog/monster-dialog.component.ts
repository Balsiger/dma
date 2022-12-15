import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Monster } from '../../../../data/entities/monster';
import { Campaign } from '../../../../data/things/campaign';

export interface Data {
  monster: Monster;
  campaign?: Campaign;
}

@Component({
  selector: 'monster-dialog',
  templateUrl: './monster-dialog.component.html',
  styleUrls: ['./monster-dialog.component.scss'],
})
export class MonsterDialogComponent {
  readonly monster: Monster;
  readonly campaign?: Campaign;

  constructor(@Inject(MAT_DIALOG_DATA) data: Data) {
    this.monster = data.monster;
    this.campaign = data.campaign;
  }
}
