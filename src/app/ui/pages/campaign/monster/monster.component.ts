import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttackType } from '../../../../data/attack';
import { Monster } from '../../../../data/monster';
import { MonsterDialogComponent } from '../monster-dialog/monster-dialog.component';

@Component({
  selector: 'monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
})
export class MonsterComponent {
  AttackType = AttackType;

  @Input() monster!: Monster;
  @Input() overview = true;

  constructor(private readonly dialog: MatDialog) {}

  onName() {
    this.dialog.open(MonsterDialogComponent, { maxWidth: '90vw', maxHeight: '90vh', data: this.monster });
  }
}
