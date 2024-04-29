import { LowerCasePipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiniatureSelection } from 'src/app/data/values/miniature-selection';
import { Monster } from '../../../../data/entities/monster';
import { AttackType } from '../../../../data/entities/values/enums/attack_type';
import { Campaign } from '../../../../data/facts/campaign';
import { ListPipe } from '../../../common/list.pipe';
import { MonsterTraitsComponent } from '../../../monster/monster-traits.component';
import { MonsterValuesComponent } from '../../../monster/monster-values.component';
import { EntityComponent } from '../entity/entity.component';
import { MonsterDialogComponent } from '../monster-dialog/monster-dialog.component';

@Component({
  standalone: true,
  selector: 'monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
  imports: [
    ListPipe,
    forwardRef(() => EntityComponent),
    LowerCasePipe,
    MonsterValuesComponent,
    MonsterTraitsComponent,
    NgIf,
  ],
})
export class MonsterComponent {
  AttackType = AttackType;

  @Input() monster!: Monster;
  @Input() campaign?: Campaign;
  @Input() overview = true;
  @Input() collapsed = true;
  @Input() count = 1;
  @Input() miniatures: MiniatureSelection[] = [];

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
