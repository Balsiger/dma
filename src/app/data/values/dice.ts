import { DiceProto } from '../../proto/generated/value_pb';
import { EMPTY_MODIFIER_VALUE, Modifier, ModifierValue } from './value';

export class Dice {
  readonly average: number;
  readonly formatted: string;

  constructor(readonly number: number, readonly dice: number, readonly modifier: ModifierValue) {
    this.average = Math.floor((number * (1 + dice)) / 2 + modifier.total);
    this.formatted = this.asString();
  }

  toString(): string {
    return this.formatted;
  }

  private asString(): string {
    if (this.modifier.total == 0) {
      return `${this.number}d${this.dice}`;
    } else {
      return `${this.number}d${this.dice} ${this.modifier.formattedTotal}`;
    }
  }

  addModifier(modifier: number, source: string): Dice {
    return new Dice(this.number, this.dice, this.modifier.add([new Modifier<number>(modifier, source)]));
  }

  addModifiers(modifiers: Modifier<number>[]): Dice {
    return new Dice(this.number, this.dice, this.modifier.add(modifiers));
  }

  addModifierValue(modifier: ModifierValue): Dice {
    return new Dice(this.number, this.dice, this.modifier.merge(modifier));
  }

  multiply(multiplier: number): Dice {
    return new Dice(this.number * multiplier, this.dice, this.modifier);
  }

  static fromProto(proto: DiceProto | undefined, source: string = ''): Dice {
    if (!proto) {
      return EMPTY;
    }
    return new Dice(
      proto.getNumber(),
      proto.getDice(),
      new ModifierValue(0, source, proto.getModifier() !== 0 ? [new Modifier<number>(proto.getModifier(), 'base')] : [])
    );
  }
}

export const EMPTY = new Dice(0, 0, EMPTY_MODIFIER_VALUE);
