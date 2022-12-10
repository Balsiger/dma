import { Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Campaign } from '../../../../data/Campaign';
import { Monster } from '../../../../data/monster';

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
