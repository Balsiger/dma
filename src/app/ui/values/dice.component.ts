import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Dice } from '../../data/entities/immutable/values/dice';
import { ValueComponent } from './value.component';

@Component({
  selector: 'dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ValueComponent],
})
export class DiceComponent {
  dice = input<Dice>();
}
