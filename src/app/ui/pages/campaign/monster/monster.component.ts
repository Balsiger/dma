import { Component, Input } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { AttackType } from '../../../../data/attack';
import { Campaign } from '../../../../data/Campaign';
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
  @Input() campaign?: Campaign;
  @Input() overview = true;

  constructor(private readonly dialog: MatDialog) {}

  onName() {
    this.dialog.open(MonsterDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        monster: this.monster,
        campaign: this.campaign,
      },
    });
  }
}
