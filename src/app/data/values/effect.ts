import { Attack } from '../entities/values/attack';

export enum RollState {
  normal,
  advantage,
  disadvantage,
}

export class Effect {
  readonly hit = this.attack?.rollHit(this.rollState);
  readonly damage = this.attack?.rollDamage(this.hit?.critical ?? false);

  constructor(
    readonly origin: string,
    readonly rollState: RollState,
    readonly attack?: Attack,
  ) {}
}
