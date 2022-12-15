import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Monster } from '../../../../data/entities/monster';
import { Campaign } from '../../../../data/things/campaign';
import { AttackType } from '../../../../data/values/enums/attack_type';
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
  @Input() collapsed = true;

  @Output() expand = new EventEmitter<void>();
  @Output() collapse = new EventEmitter<void>();

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
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
