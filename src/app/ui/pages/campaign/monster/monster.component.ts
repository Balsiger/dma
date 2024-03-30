import { LowerCasePipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Monster } from '../../../../data/entities/monster';
import { AttackType } from '../../../../data/entities/values/enums/attack_type';
import { Campaign } from '../../../../data/facts/campaign';
import { MonsterTraitsComponent } from '../../../campaign/monster-traits/monster-traits.component';
import { MonsterValuesComponent } from '../../../campaign/monster-values/monster-values.component';
import { ListPipe } from '../../../common/list.pipe';
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
