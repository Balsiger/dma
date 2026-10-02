import { Component, forwardRef, input, ChangeDetectionStrategy } from '@angular/core';
import { ImmutableMonster } from '../../data/entities/immutable/monster';
import { MonsterComponent } from './monster.component';

@Component({
  selector: 'monster-card',
  imports: [forwardRef(() => MonsterComponent)],
  templateUrl: './monster-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './monster-card.component.scss',
})
export class MonsterCardComponent {
  monster = input.required<ImmutableMonster>();
}
