import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { MiniatureSelection } from 'src/app/data/values/miniature-selection';
import { Monster } from '../../data/entities/monster';
import { AttackType } from '../../data/entities/values/enums/attack_type';
import { Campaign } from '../../data/facts/campaign';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { TaperComponent } from '../common/taper/taper.component';
import { TextPipe } from '../common/text.pipe';
import { DamageComponent } from '../common/values/damage.component';
import { ValueComponent } from '../common/values/value.component';
import { ReferenceComponent } from '../pages/common/reference/reference.component';

@Component({
  standalone: true,
  selector: 'monster-traits',
  templateUrl: './monster-traits.component.html',
  styleUrls: ['./monster-traits.component.scss'],
  imports: [
    TaperComponent,
    TextPipe,
    FormattedTextComponent,
    ValueComponent,
    NgSwitch,
    DamageComponent,
    forwardRef(() => ReferenceComponent),
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgFor,
    NgSwitchDefault,
  ],
})
export class MonsterTraitsComponent {
  AttackType = AttackType;

  campaign = input<Campaign>();
  monster = input<Monster>();
  overview = input<boolean>(true);
  miniatures = input<MiniatureSelection[]>([]);
}
