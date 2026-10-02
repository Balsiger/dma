import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Damage } from '../../data/entities/immutable/values/damage';
import { DiceComponent } from './dice.component';

@Component({
  selector: 'damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [DiceComponent],
})
export class DamageComponent {
  damage = input<Damage>();
  delimiter = input('');
  average = input(true);
}
