import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Dice } from '../../../data/values/dice';
import { ValueComponent } from './value.component';

@Component({
  selector: 'dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  standalone: true,
  imports: [NgIf, ValueComponent],
})
export class DiceComponent {
  @Input() dice?: Dice;
}
