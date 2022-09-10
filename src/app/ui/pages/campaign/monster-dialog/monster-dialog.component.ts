import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Monster } from '../../../../data/monster';

@Component({
  selector: 'monster-dialog',
  templateUrl: './monster-dialog.component.html',
  styleUrls: ['./monster-dialog.component.scss'],
})
export class MonsterDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) readonly monster: Monster) {}
}
