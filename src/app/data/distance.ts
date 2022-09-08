import { DistanceProto } from '../proto/generated/value_pb';
import { EMPTY as RATIONAL_EMPTY, Rational } from './rational';

export class Distance {
  private readonly formatted: string;

  constructor(readonly miles: Rational, readonly feet: Rational, readonly inches: Rational) {
    this.formatted = this.asString();
  }

  toString(): string {
    return this.formatted;
  }

  asString(): string {
    return [this.miles.format('mile', 'miles'), this.feet.format('foot', 'feet'), this.inches.format('inch', 'inches')]
      .filter((v) => !!v)
      .join(' ');
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
