import { Action } from '../entities/values/action';
import { Attack } from '../entities/values/attack';

export enum RollState {
  normal,
  advantage,
  disadvantage,
}

export class Effect {
  readonly hit = this.action instanceof Attack ? this.action?.rollHit(this.rollState) : undefined;
  readonly damage = this.action instanceof Attack ? this.action?.rollDamage(this.hit?.critical ?? false) : undefined;

  constructor(
    readonly name: string,
    readonly origin: string,
    readonly rollState: RollState,
    readonly action?: Attack | Action,
  ) {}
}
