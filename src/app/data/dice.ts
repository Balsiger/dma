import { DiceProto } from '../proto/generated/value_pb';

export class Dice {
  readonly average: number;

  constructor(readonly number: number, readonly dice: number, readonly modifier: number) {
    this.average = Math.floor((number * (1 + dice)) / 2 + modifier);
  }

  toString(): string {
    if (this.modifier >= 0) {
      return `${this.number}d${this.dice} + ${this.modifier}`;
    } else {
      return `${this.number}d${this.dice} - ${-this.modifier}`;
    }
  }

  static fromProto(proto: DiceProto | undefined): Dice {
    if (!proto) {
      return EMPTY;
    }
    return new Dice(proto.getNumber(), proto.getDice(), proto.getModifier());
  }
}

export const EMPTY = new Dice(0, 0, 0);
