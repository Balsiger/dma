import { Component, input } from '@angular/core';
import { Damage } from '../../data/entities/values/damage';
import { DiceComponent } from './dice.component';

@Component({
    selector: 'damage',
    templateUrl: './damage.component.html',
    styleUrls: ['./damage.component.scss'],
    imports: [DiceComponent]
})
export class DamageComponent {
  damage = input<Damage>();
  delimiter = input('');
  average = input(true);
}
