import { Component, forwardRef, input, output } from '@angular/core';
import { Attack } from '../../../data/entities/values/attack';
import { AttackType } from '../../../data/entities/values/enums/attack_type';
import { Version } from '../../../data/entities/values/enums/version';
import { Effect, RollState } from '../../../data/values/effect';
import { FormattedTextComponent } from '../../common/formatted-text/formatted-text.component';
import { DamageComponent } from '../../values/damage.component';
import { ValueComponent } from '../../values/value.component';
import { EffectActionsComponent } from './effect-actions.component';

@Component({
  selector: 'attack',
  imports: [DamageComponent, forwardRef(() => FormattedTextComponent), ValueComponent, EffectActionsComponent],
  templateUrl: './attack.component.html',
  styleUrl: './attack.component.scss',
})
export class AttackComponent {
  source = input.required<string>();
  attack = input.required<Attack>();
  version = input.required<Version>();
  showRolls = input(false);

  RollState = RollState;

  effects = output<Effect[]>();

  AttackType = AttackType;
  Version = Version;
}
