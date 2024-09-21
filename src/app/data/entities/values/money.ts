import { MoneyProto } from '../../../proto/generated/value_pb';

export class Money {
  readonly text: string;
  readonly empty: boolean;
  readonly inGold: number;

  constructor(
    readonly copper: number,
    readonly silver: number,
    readonly gold: number,
    readonly platinum: number,
  ) {
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

  static fromString(text: string): Money {
    const values = [...text.matchAll(/\s*(\d+)\s*(cp|sp|gp|pp)/g)];

    let copper = 0;
    let silver = 0;
    let gold = 0;
    let platinum = 0;
    for (const value of values) {
      if (value[2] === 'cp') {
        copper += Number(value[1]);
      }
      if (value[2] === 'sp') {
        silver += Number(value[1]);
      }
      if (value[2] === 'gp') {
        gold += Number(value[1]);
      }
      if (value[2] === 'pp') {
        platinum += Number(value[1]);
      }
    }

    return new Money(copper, silver, gold, platinum);
  }

  resolve(bases: Money[]): Money {
    if (!this.isEmpty()) {
      return this;
    }

    let copper = 0;
    let silver = 0;
    let gold = 0;
    let platinum = 0;

    for (const base of bases) {
      copper += base.copper;
      silver += base.silver;
      gold += base.gold;
      platinum += base.platinum;
    }

    return new Money(copper, silver, gold, platinum);
  }

  multiply(factor: number): Money {
    return new Money(this.copper * factor, this.silver * factor, this.gold * factor, this.platinum * factor).simplify();
  }

  simplify(): Money {
    let copper = this.copper % 10;
    let silver = (this.silver % 10) + Math.floor(this.copper / 10);
    let gold = this.gold + Math.floor(this.silver / 10);

    return new Money(copper, silver, gold, this.platinum);
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
