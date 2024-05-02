import { NgSwitch } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { MiniatureSelection } from 'src/app/data/values/miniature-selection';
import { Monster } from '../../data/entities/monster';
import { AttackType } from '../../data/entities/values/enums/attack_type';
import { Campaign } from '../../data/facts/campaign';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { ReferenceComponent } from '../common/reference/reference.component';
import { TaperComponent } from '../common/taper/taper.component';
import { TextPipe } from '../pipes/text.pipe';
import { DamageComponent } from '../values/damage.component';
import { ValueComponent } from '../values/value.component';

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
  ],
})
export class MonsterTraitsComponent {
  AttackType = AttackType;

  campaign = input<Campaign>();
  monster = input<Monster>();
  overview = input<boolean>(true);
  miniatures = input<MiniatureSelection[]>([]);
}
