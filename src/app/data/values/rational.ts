import { RationalProto } from '../../proto/generated/value_pb';

export class Rational {
  private readonly text: string;
  readonly value: number;

  constructor(
    readonly leader: number,
    readonly nominator: number,
    readonly denominator: number,
    readonly negative: boolean
  ) {
    this.text = this.asString();
    if (nominator === 0 || denominator === 0) {
      this.value = leader * (negative ? -1 : 1);
    } else {
      this.value = (leader + nominator ? nominator : 1 / denominator) * (negative ? -1 : 1);
    }
  }

  add(other: Rational): Rational {
    if (this.isEmpty()) {
      return other;
    }

    if (other.isEmpty()) {
      return this;
    }

    const nominatorA = (this.negative ? -1 : 1) * (this.leader * this.denominator + this.nominator);
    const nominatorB = (other.negative ? -1 : 1) * (other.leader * other.denominator + this.nominator);

    let nominator = nominatorA * other.denominator + nominatorB * this.denominator;
    const negative = nominator < 0;
    nominator = Math.abs(nominator);

    const denominator = this.denominator * other.denominator;
    const divisor = Rational.gcd(nominator, denominator);

    const leader = Math.floor(nominator / denominator);
    nominator %= denominator;

    return new Rational(leader, nominator / divisor, denominator / divisor, negative);
  }

  multiply(factor: number): Rational {
    if (factor === 1) {
      return this;
    }

    return new Rational(this.leader * factor, this.nominator * factor, this.denominator, this.negative).simplify();
  }

  simplify(): Rational {
    if (!this.nominator || !this.denominator) {
      return this;
    }

    const divisor = Rational.gcd(this.nominator, this.denominator);

    return new Rational(
      this.leader + Math.floor(this.nominator / this.denominator),
      (this.nominator % this.denominator) / divisor,
      this.denominator / divisor,
      this.negative
    );
  }

  toString(): string {
    return this.text;
  }

  private static gcd(a: number, b: number): number {
    return !b ? a : this.gcd(b, a % b);
  }

  asString(): string {
    let result = '';

    if (this.leader === 0 && this.nominator === 0 && this.denominator == 0) {
      return '0';
    }

    if ((this.leader !== 0 && this.nominator === 0) || this.denominator === 0) {
      return (this.negative ? '-' : '') + this.leader;
    }

    if (this.denominator === 0) {
      return 'NaN';
    }

    if (this.negative) {
      result += '-';
    }

    if (this.leader) {
      result += this.leader;
    }

    if (this.nominator > 0 && this.nominator !== this.denominator) {
      switch (this.nominator) {
        case 1:
          switch (this.denominator) {
            case 2:
              return result + '½';
            case 3:
              return result + '⅓';
            case 4:
              return result + '¼';
            case 5:
              return result + '⅕';
            case 6:
              return result + '⅙';
            case 7:
              return result + '⅐';
            case 8:
              return result + '⅛';
            case 9:
              return result + '⅑';
            case 10:
              return result + '⅒';
            default:
              return result + (result ? ' ' : '') + this.nominator + '/' + this.denominator;
          }

        case 2:
          switch (this.denominator) {
            case 3:
              return result + '⅔';
            case 5:
              return result + '⅖';
            default:
              return result + (result ? ' ' : '') + this.nominator + '/' + this.denominator;
          }

        case 3:
          switch (this.denominator) {
            case 4:
              return result + '¾';
            case 5:
              return result + '⅗';
            case 8:
              return result + '⅜';
            default:
              return result + (result ? ' ' : '') + this.nominator + '/' + this.denominator;
          }

        case 4:
          switch (this.denominator) {
            case 5:
              return result + '⅘';
            default:
              return result + (result ? ' ' : '') + this.nominator + '/' + this.denominator;
          }

        case 5:
          switch (this.denominator) {
            case 6:
              return result + '⅚';
            case 8:
              return result + '⅝';
            default:
              return result + (result ? ' ' : '') + this.nominator + '/' + this.denominator;
          }

        case 7:
          switch (this.denominator) {
            case 8:
              return '⅞';
            default:
              return result + (result ? ' ' : '') + this.nominator + '/' + this.denominator;
          }

        default:
          return result + (result ? ' ' : '') + this.nominator + '/' + this.denominator;
      }
    }

    return result + (result ? ' ' : '') + this.nominator + '/' + this.denominator;
  }

  format(singular: string, plural: string): string {
    if (this.isEmpty()) {
      return '';
    }

    if (this.isOne()) {
      return this.text + ' ' + singular;
    }

    return this.text + ' ' + plural;
  }

  isOne(): boolean {
    return this.leader <= 1 && this.nominator <= this.denominator;
  }

  isEmpty(): boolean {
    return this.leader === 0 && this.nominator === 0;
  }

  toFloat(): number {
    if (this.nominator != 0 && this.denominator != 0) {
      return this.leader + (this.nominator / this.denominator);
    }

    return this.leader;
  }

  static fromProto(proto: RationalProto | undefined): Rational {
    if (!proto) {
      return EMPTY;
    }

    return new Rational(proto.getLeader(), proto.getNominator(), proto.getDenominator(), proto.getNegative());
  }

  static compare(a: Rational, b: Rational): number {
    return a.toFloat() - b.toFloat();
  }


}

export const EMPTY = new Rational(0, 0, 0, false);
