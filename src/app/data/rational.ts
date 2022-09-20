import { RationalProto } from '../proto/generated/value_pb';

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

  toString(): string {
    return this.text;
  }

  asString(): string {
    let result = '';

    if (this.leader === 0 && this.nominator === 0 && this.denominator == 0) {
      return result;
    }

    if ((this.leader !== 0 && this.nominator === 0) || this.denominator === 0) {
      return '' + this.leader;
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
              return '½';
            case 3:
              return '⅓';
            case 4:
              return '¼';
            case 5:
              return '⅕';
            case 6:
              return '⅙';
            case 7:
              return '⅐';
            case 8:
              return '⅛';
            case 9:
              return '⅑';
            case 10:
              return '⅒';
            default:
              return (this.leader ? ' ' : '') + this.nominator + '/' + this.denominator;
          }

        case 2:
          switch (this.denominator) {
            case 3:
              return '⅔';
            case 5:
              return '⅖';
            default:
              return (this.leader ? ' ' : '') + this.nominator + '/' + this.denominator;
          }

        case 3:
          switch (this.denominator) {
            case 4:
              return '¾';
            case 5:
              return '⅗';
            case 8:
              return '⅜';
            default:
              return (this.leader ? ' ' : '') + this.nominator + '/' + this.denominator;
          }

        case 4:
          switch (this.denominator) {
            case 5:
              return '⅘';
            default:
              return (this.leader ? ' ' : '') + this.nominator + '/' + this.denominator;
          }

        case 5:
          switch (this.denominator) {
            case 6:
              return '⅚';
            case 8:
              return '⅝';
            default:
              return (this.leader ? ' ' : '') + this.nominator + '/' + this.denominator;
          }

        case 7:
          switch (this.denominator) {
            case 8:
              return '⅞';
            default:
              return (this.leader ? ' ' : '') + this.nominator + '/' + this.denominator;
          }

        default:
          return (this.leader ? ' ' : '') + this.nominator + '/' + this.denominator;
      }
    }

    return result;
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

  static fromProto(proto: RationalProto | undefined): Rational {
    if (!proto) {
      return EMPTY;
    }

    return new Rational(proto.getLeader(), proto.getNominator(), proto.getDenominator(), proto.getNegative());
  }
}

export const EMPTY = new Rational(0, 0, 0, false);
