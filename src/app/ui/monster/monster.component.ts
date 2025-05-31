import { LowerCasePipe } from '@angular/common';
import { Component, forwardRef, input, model } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiniatureSelection } from 'src/app/data/values/miniature-selection';
import { Monster } from '../../data/entities/monster';
import { AttackType } from '../../data/entities/values/enums/attack_type';
import { Campaign } from '../../data/facts/campaign';
import { EntityComponent } from '../entities/entity.component';
import { ListPipe } from '../pipes/list.pipe';
import { MonsterDialogComponent } from './monster-dialog.component';
import { MonsterTraitsComponent } from './monster-traits.component';
import { MonsterValuesComponent } from './monster-values.component';

@Component({
    selector: 'monster',
    templateUrl: './monster.component.html',
    styleUrls: ['./monster.component.scss'],
    imports: [ListPipe, forwardRef(() => EntityComponent), LowerCasePipe, MonsterValuesComponent, MonsterTraitsComponent]
})
export class MonsterComponent {
  AttackType = AttackType;

  monster = input<Monster>();
  campaign = input<Campaign>();
  overview = input(true);
  collapsed = model(true);
  count = input(1);
  miniatures = input<MiniatureSelection[]>([]);

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    this.dialog.open(MonsterDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        monster: this.monster(),
        campaign: this.campaign(),
      },
    });
  }
}
