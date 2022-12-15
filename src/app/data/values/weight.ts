import { WeightProto } from '../../proto/generated/value_pb';
import { EMPTY as RATIONAL_EMPTY, Rational } from './rational';

export class Weight {
  readonly text: string;
  readonly empty: boolean;
  readonly inPounds: number;

  constructor(readonly pounds: Rational, readonly ounces: Rational, readonly carats: Rational) {
    this.text = this.asString();
    this.empty = this.isEmpty();
    this.inPounds = this.asPounds();
  }

  toString(): string {
    return this.text;
  }

  resolve(bases: Weight[]): Weight {
    if (!this.isEmpty()) {
      return this;
    }

    let pounds = RATIONAL_EMPTY;
    let ounces = RATIONAL_EMPTY;
    let carats = RATIONAL_EMPTY;

    for (const base of bases) {
      pounds = pounds.add(base.pounds);
      ounces = ounces.add(base.ounces);
      carats = carats.add(base.carats);
    }

    return new Weight(pounds, ounces, carats);
  }

  multiply(factor: number): Weight {
    if (factor === 1) {
      return this;
    }

    return new Weight(this.pounds.multiply(factor), this.ounces.multiply(factor), this.carats.multiply(factor));
  }

  private asString(): string {
    const parts = [];
    if (!this.pounds.isEmpty()) {
      if (this.pounds.isOne()) {
        parts.push(`${this.pounds} lb`);
      } else {
        parts.push(`${this.pounds} lbs`);
      }
    }

    if (!this.ounces.isEmpty()) {
      if (this.ounces.isOne()) {
        parts.push(`${this.ounces} oc`);
      } else {
        parts.push(`${this.ounces} ocs`);
      }
    }

    if (!this.carats.isEmpty()) {
      if (this.carats.isOne()) {
        parts.push(`${this.carats} ct`);
      } else {
        parts.push(`${this.carats} cts`);
      }
    }

    return parts.join(' ');
  }

  private isEmpty(): boolean {
    return this.pounds.isEmpty() && this.ounces.isEmpty() && this.carats.isEmpty();
  }

  private asPounds(): number {
    return this.pounds.value + this.ounces.value / 16 + this.carats.value / 2268;
  }

  static fromProto(proto: WeightProto | undefined): Weight {
    if (!proto) {
      return EMPTY;
    }

    return new Weight(
      Rational.fromProto(proto.getPounds()),
      Rational.fromProto(proto.getOunces()),
      Rational.fromProto(proto.getCarats())
    );
  }
}

export const EMPTY = new Weight(RATIONAL_EMPTY, RATIONAL_EMPTY, RATIONAL_EMPTY);
