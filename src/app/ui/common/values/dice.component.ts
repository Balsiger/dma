import { Component, Input } from '@angular/core';
import { Dice } from '../../../data/values/dice';

@Component({
  selector: 'dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})
export class DiceComponent {
  @Input() dice?: Dice;
}
