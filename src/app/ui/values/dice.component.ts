import { Component, input } from '@angular/core';
import { Dice } from '../../data/entities/values/dice';
import { ValueComponent } from './value.component';

@Component({
    selector: 'dice',
    templateUrl: './dice.component.html',
    styleUrls: ['./dice.component.scss'],
    imports: [ValueComponent]
})
export class DiceComponent {
  dice = input<Dice>();
}
