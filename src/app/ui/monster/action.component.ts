import { Component, forwardRef, input } from '@angular/core';
import { Action } from '../../data/entities/immutable/values/action';
import { AbilityType } from '../../data/entities/immutable/values/enums/ability-type';
import { Recharge } from '../../data/entities/immutable/values/enums/recharge';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';

@Component({
  selector: 'action',
  imports: [forwardRef(() => FormattedTextComponent)],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss',
})
export class ActionComponent {
  AbilityType = AbilityType;
  Recharge = Recharge;

  action = input<Action>();
}
