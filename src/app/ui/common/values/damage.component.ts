import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Damage } from '../../../data/entities/values/damage';
import { DiceComponent } from './dice.component';

@Component({
  selector: 'damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.scss'],
  standalone: true,
  imports: [NgIf, DiceComponent],
})
export class DamageComponent {
  @Input() damage?: Damage;
  @Input() average = true;
}
