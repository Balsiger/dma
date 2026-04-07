import { Component, computed, input, output } from '@angular/core';
import { Action } from '../../../data/entities/values/action';
import { Attack, Multiattack } from '../../../data/entities/values/attack';
import { Effect } from '../../../data/values/effect';
import { TextPipe } from '../../pipes/text.pipe';
import { EffectActionsComponent } from './effect-actions.component';

@Component({
  selector: 'multi-attack',
  imports: [TextPipe, EffectActionsComponent],
  templateUrl: './multi-attack.component.html',
  styleUrl: './multi-attack.component.scss',
})
export class MultiAttackComponent {
  attacker = input.required<string>();
  multiattack = input.required<Multiattack>();
  attacks = input.required<Attack[]>();
  actions = input.required<Action[]>();

  effects = output<Effect[]>();

  actionsByName = computed(() => {
    const actions = [...this.attacks(), ...this.actions()];
    return new Map<string, Attack | Action>(actions.map((a) => [a.name, a]));
  });
  multiActions = computed(() => {
    return this.multiattack().attacksOr.map((o) => ({
      actions: o.attacks.map((a) => ({ name: a.name, number: a.number, action: this.actionsByName().get(a.name) })),
      allActions: o.attacks.flatMap((o) =>
        Array(o.number).fill({ name: o.name, action: this.actionsByName().get(o.name) }),
      ),
    }));
  });
}
