import { Dice } from '../entities/values/dice';
import { RollState } from './effect';

export interface Single {
  rolled: number;
  ignored: boolean;
  critical: boolean;
  failure: boolean;
}

export class Roll {
  readonly rolls = this.roll();
  readonly result = this.rolls.find((r) => !r.ignored)?.rolled ?? 0;
  readonly critical = !!this.rolls.find((r) => !r.ignored && r.critical);
  readonly failure = !!this.rolls.find((r) => !r.ignored && r.failure);
  readonly formatted = toString();

  constructor(
    readonly state: RollState,
    readonly dice: Dice,
  ) {}

  private roll(): Single[] {
    const rolled = this.dice.roll();
    const rolled2 = this.dice.roll();

    switch (this.state) {
      case RollState.normal:
        return [
          {
            rolled: rolled,
            ignored: false,
            critical: rolled - this.dice.modifier.total >= 20,
            failure: rolled - this.dice.modifier.total <= 1,
          },
        ];

      case RollState.advantage:
        return [
          {
            rolled: rolled,
            ignored: rolled < rolled2,
            critical: rolled - this.dice.modifier.total >= 20,
            failure: rolled - this.dice.modifier.total <= 1,
          },
          {
            rolled: rolled2,
            ignored: rolled2 <= rolled,
            critical: rolled2 - this.dice.modifier.total >= 20,
            failure: rolled - this.dice.modifier.total <= 1,
          },
        ];

      case RollState.disadvantage:
        return [
          {
            rolled: rolled,
            ignored: rolled > rolled2,
            critical: rolled - this.dice.modifier.total >= 20,
            failure: rolled - this.dice.modifier.total <= 1,
          },
          {
            rolled: rolled2,
            ignored: rolled2 >= rolled,
            critical: rolled2 - this.dice.modifier.total >= 20,
            failure: rolled - this.dice.modifier.total <= 1,
          },
        ];
    }
  }
}
