import { Component, input } from '@angular/core';
import { Action } from '../../data/entities/values/action';
import { AbilityType } from '../../data/entities/values/enums/ability-type';
import { Recharge } from '../../data/entities/values/enums/recharge';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';

@Component({
  selector: 'action',
  standalone: true,
  imports: [FormattedTextComponent],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss',
})
export class ActionComponent {
  AbilityType = AbilityType;
  Recharge = Recharge;

  action = input<Action>();
}
