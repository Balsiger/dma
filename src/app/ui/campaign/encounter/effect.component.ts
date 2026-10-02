import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Version } from '../../../data/entities/immutable/values/enums/version';
import { Effect } from '../../../data/values/effect';
import { RollComponent } from '../../common/roll/roll.component';

@Component({
  selector: 'effect',
  imports: [RollComponent],
  templateUrl: './effect.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './effect.component.scss',
})
export class EffectComponent {
  effects = input.required<Effect[]>();
  version = input.required<Version>();
}
