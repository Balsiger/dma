import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Monster } from '../../../../data/monster';

const WINDOW_NAME = 'DMA_IMAGE';

@Component({
  selector: 'monster-dialog',
  templateUrl: './monster-dialog.component.html',
  styleUrls: ['./monster-dialog.component.scss'],
})
export class MonsterDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) readonly monster: Monster) {}

  onImage() {
    const win = window.open('/assets/monsters/' + this.monster.image, WINDOW_NAME);
    if (win) {
      setTimeout(() => {
        win.document.body.style.background = 'white';
      }, 10);
    }
  }
}
