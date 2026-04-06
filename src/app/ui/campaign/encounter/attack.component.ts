import { Component, forwardRef, input, output } from '@angular/core';
import { Attack } from '../../../data/entities/values/attack';
import { AttackType } from '../../../data/entities/values/enums/attack_type';
import { Version } from '../../../data/entities/values/enums/version';
import { RollState } from '../../../data/values/effect';
import { FormattedTextComponent } from '../../common/formatted-text/formatted-text.component';
import { DamageComponent } from '../../values/damage.component';
import { ValueComponent } from '../../values/value.component';

@Component({
  selector: 'attack',
  imports: [DamageComponent, forwardRef(() => FormattedTextComponent), ValueComponent],
  templateUrl: './attack.component.html',
  styleUrl: './attack.component.scss',
})
export class AttackComponent {
  attack = input.required<Attack>();
  version = input.required<Version>();
  showRolls = input(false);

  RollState = RollState;

  attacked = output<{ attack: Attack; state: RollState }>();

  AttackType = AttackType;
  Version = Version;
}
