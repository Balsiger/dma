import { DistanceProto } from '../../proto/generated/value_pb';
import { EMPTY as RATIONAL_EMPTY, Rational } from './rational';

export class Distance {
  readonly formatted: string;
  readonly empty: boolean;

  constructor(readonly miles: Rational, readonly feet: Rational, readonly inches: Rational) {
    this.formatted = this.asString();
    this.empty = this.isEmpty();
  }

  toString(): string {
    return this.formatted;
  }

  private asString(): string {
    return [this.miles.format('mile', 'miles'), this.feet.format('foot', 'feet'), this.inches.format('inch', 'inches')]
      .filter((v) => !!v)
      .join(' ');
  }

  private isEmpty(): boolean {
    return this.miles.isEmpty() && this.feet.isEmpty() && this.inches.isEmpty();
  }

  static fromProto(proto: DistanceProto | undefined): Distance {
    if (!proto) {
      return EMPTY;
    }

    return new Distance(
      Rational.fromProto(proto.getMiles()),
      Rational.fromProto(proto.getFeet()),
      Rational.fromProto(proto.getInches())
    );
  }
}

export const EMPTY = new Distance(RATIONAL_EMPTY, RATIONAL_EMPTY, RATIONAL_EMPTY);
