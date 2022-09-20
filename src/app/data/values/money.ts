import { MoneyProto } from '../../proto/generated/value_pb';

export class Money {
  readonly text: string;
  readonly empty: boolean;
  readonly inGold: number;

  constructor(readonly copper: number, readonly silver: number, readonly gold: number, readonly platinum: number) {
    this.text = this.asString();
    this.empty = this.isEmpty();
    this.inGold = this.asGold();
  }

  private asString(): string {
    const parts = [];

    if (this.platinum) {
      parts.push(`${this.platinum} pp`);
    }

    if (this.gold) {
      parts.push(`${this.gold} gp`);
    }

    if (this.silver) {
      parts.push(`${this.silver} sp`);
    }

    if (this.copper) {
      parts.push(`${this.copper} cp`);
    }

    return parts.join(' ');
  }

  private isEmpty(): boolean {
    return this.copper === 0 && this.silver === 0 && this.gold === 0 && this.platinum === 0;
  }

  private asGold(): number {
    return this.platinum * 10 + this.gold + this.silver / 10 + this.copper / 100;
  }

  static fromProto(proto: MoneyProto | undefined) {
    if (!proto) {
      return EMPTY;
    }

    return new Money(proto.getCopper(), proto.getSilver(), proto.getGold(), proto.getPlatinum());
  }
}

export const EMPTY = new Money(0, 0, 0, 0);
