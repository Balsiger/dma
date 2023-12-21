import { Component, Input } from '@angular/core';
import { Damage } from '../../../data/values/damage';
import { DiceComponent } from './dice.component';
import { NgIf } from '@angular/common';

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
