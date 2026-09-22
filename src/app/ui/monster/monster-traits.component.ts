import { Component, forwardRef, input, output } from '@angular/core';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Monster } from '../../data/entities/immutable/monster';
import { AbilityType } from '../../data/entities/immutable/values/enums/ability-type';
import { AttackType } from '../../data/entities/immutable/values/enums/attack_type';
import { Version } from '../../data/entities/immutable/values/enums/version';
import { Effect } from '../../data/values/effect';
import { MiniatureSelection } from '../../data/values/miniature-selection';
import { AttackComponent } from '../campaign/encounter/attack.component';
import { MultiAttackComponent } from '../campaign/encounter/multi-attack.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { ReferenceComponent } from '../common/reference/reference.component';
import { ActionComponent } from './action.component';

@Component({
  selector: 'monster-traits',
  templateUrl: './monster-traits.component.html',
  styleUrls: ['./monster-traits.component.scss'],
  imports: [
    forwardRef(() => FormattedTextComponent),
    forwardRef(() => ReferenceComponent),
    ActionComponent,
    AttackComponent,
    MultiAttackComponent,
  ],
})
export class MonsterTraitsComponent {
  AttackType = AttackType;
  Version = Version;
  AbilityType = AbilityType;

  campaign = input<Campaign>();
  creatureName = input.required<string>();
  monster = input<Monster>();
  overview = input<boolean>(true);
  miniatures = input<MiniatureSelection[]>([]);

  effects = output<Effect[]>();
}
