import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campaign } from '../../../../data/Campaign';
import { Monster } from '../../../../data/monster';

const WINDOW_NAME = 'DMA_IMAGE';

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

  onImage() {
    const win = window.open('/assets/monsters/' + this.monster.image, WINDOW_NAME);
    if (win) {
      setTimeout(() => {
        win.document.body.style.background = 'white';
      }, 10);
    }
  }
}
