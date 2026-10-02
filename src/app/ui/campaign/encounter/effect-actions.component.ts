import { Component, computed, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Action } from '../../../data/entities/immutable/values/action';
import { Attack } from '../../../data/entities/immutable/values/attack';
import { Effect, RollState } from '../../../data/values/effect';

@Component({
  selector: 'effect-actions',
  imports: [],
  templateUrl: './effect-actions.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './effect-actions.component.scss',
})
export class EffectActionsComponent {
  source = input.required<string>();
  actions = input<{ name: string; action: Attack | Action | undefined }[]>([]);

  effects = output<Effect[]>();

  isEmpty = computed(() => {
    return !this.actions().find((a) => !!a.action);
  });

  RollState = RollState;

  onEffect(state: RollState) {
    this.effects.emit(this.actions().map((a) => new Effect(a.name, this.source(), state, a.action)));
  }
}
