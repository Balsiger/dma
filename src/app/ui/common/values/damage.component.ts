import { Component, Input } from '@angular/core';
import { Damage } from '../../../data/values/damage';

@Component({
  selector: 'damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.scss'],
})
export class DamageComponent {
  @Input() damage?: Damage;
  @Input() average = true;
}
