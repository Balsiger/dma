import { Component, computed, input, output } from '@angular/core';
import { Action } from '../../../data/entities/values/action';
import { Attack } from '../../../data/entities/values/attack';
import { Effect, RollState } from '../../../data/values/effect';

@Component({
  selector: 'effect-actions',
  imports: [],
  templateUrl: './effect-actions.component.html',
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
