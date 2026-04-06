import { Component, forwardRef, input, output } from '@angular/core';
import { Attack } from 'src/app/data/entities/values/attack';
import { MiniatureSelection } from 'src/app/data/values/miniature-selection';
import { Monster } from '../../data/entities/monster';
import { AbilityType } from '../../data/entities/values/enums/ability-type';
import { AttackType } from '../../data/entities/values/enums/attack_type';
import { Version } from '../../data/entities/values/enums/version';
import { Campaign } from '../../data/facts/campaign';
import { Effect, RollState } from '../../data/values/effect';
import { AttackComponent } from '../campaign/encounter/attack.component';
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
  ],
})
export class MonsterTraitsComponent {
  AttackType = AttackType;
  Version = Version;
  AbilityType = AbilityType;

  campaign = input<Campaign>();
  monster = input<Monster>();
  overview = input<boolean>(true);
  miniatures = input<MiniatureSelection[]>([]);

  effect = output<Effect>();

  onAttack(attack: Attack, rollState: RollState) {
    this.effect.emit(new Effect(this.monster()?.name ?? '', rollState, attack));
  }
}
