import { Component, input } from '@angular/core';
import { RollState } from '../../../data/values/effect';
import { Roll } from '../../../data/values/roll';

@Component({
  selector: 'roll',
  imports: [],
  templateUrl: './roll.component.html',
  styleUrl: './roll.component.scss',
})
export class RollComponent {
  roll = input.required<Roll>();

  RollState = RollState;
}
