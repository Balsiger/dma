import { Component, forwardRef, input } from '@angular/core';
import { Monster } from '../../data/entities/monster';
import { MonsterComponent } from './monster.component';

@Component({
  selector: 'monster-card',
  imports: [forwardRef(() => MonsterComponent)],
  templateUrl: './monster-card.component.html',
  styleUrl: './monster-card.component.scss',
})
export class MonsterCardComponent {
  monster = input.required<Monster>();
}
