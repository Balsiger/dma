import { MoneyProto } from '../../../proto/generated/value_pb';

export class Money {
  readonly text: string;
  readonly empty: boolean;
  readonly inGold: number;

  constructor(
    readonly copper: number,
    readonly silver: number,
    readonly electrum: number,
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
      parts.push(`${this.platinum} PP`);
    }

    if (this.gold) {
      parts.push(`${this.gold} GP`);
    }

    if (this.electrum) {
      parts.push(`${this.electrum} EP`);
    }

    if (this.silver) {
      parts.push(`${this.silver} SP`);
    }

    if (this.copper) {
      parts.push(`${this.copper} CP`);
    }

    return parts.join(' ');
  }

  static fromString(text: string): Money {
    const values = [...text.matchAll(/\s*(\d+)\s*(cp|CP|sp|SP|ep|EP|gp|GP||pp|PP)/g)];

    let copper = 0;
    let silver = 0;
    let electrum = 0;
    let gold = 0;
    let platinum = 0;
    for (const value of values) {
      if (value[2] === 'cp' || value[2] === 'CP') {
        copper += Number(value[1]);
      }
      if (value[2] === 'sp' || value[2] === 'SP') {
        silver += Number(value[1]);
      }
      if (value[2] === 'ep' || value[2] === 'EP') {
        electrum += Number(value[1]);
      }
      if (value[2] === 'gp' || value[2] === 'GP') {
        gold += Number(value[1]);
      }
      if (value[2] === 'pp' || value[2] === 'PP') {
        platinum += Number(value[1]);
      }
    }

    return new Money(copper, silver, electrum, gold, platinum);
  }

  resolve(bases: Money[]): Money {
    if (!this.isEmpty()) {
      return this;
    }

    let copper = 0;
    let silver = 0;
    let electrum = 0;
    let gold = 0;
    let platinum = 0;

    for (const base of bases) {
      copper += base.copper;
      silver += base.silver;
      electrum += base.electrum;
      gold += base.gold;
      platinum += base.platinum;
    }

    return new Money(copper, silver, electrum, gold, platinum);
  }

  multiply(factor: number): Money {
    return new Money(
      this.copper * factor,
      this.silver * factor,
      this.electrum * factor,
      this.gold * factor,
      this.platinum * factor,
    ).simplify();
  }

  simplify(): Money {
    let copper = this.copper % 10;
    let silver = (this.silver % 10) + Math.floor(this.copper / 10);
    let electrum = (this.electrum % 2) + Math.floor(this.silver / 10);
    let gold = this.gold + Math.floor(this.electrum / 2);

    return new Money(copper, silver, electrum, gold, this.platinum);
  }

  isEmpty(): boolean {
    return this.copper === 0 && this.silver === 0 && this.electrum === 0 && this.gold === 0 && this.platinum === 0;
  }

  private asGold(): number {
    return this.platinum * 10 + this.gold + this.electrum / 2 + this.silver / 10 + this.copper / 100;
  }

  static fromProto(proto: MoneyProto | undefined) {
    if (!proto) {
      return EMPTY;
    }

    return new Money(proto.getCopper(), proto.getSilver(), proto.getElectrum(), proto.getGold(), proto.getPlatinum());
  }
}

export const EMPTY = new Money(0, 0, 0, 0, 0);
