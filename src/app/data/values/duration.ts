import { DurationProto } from '../../proto/generated/value_pb';

export class Duration {
  private readonly formatted: string;

  constructor(
    readonly rounds: number,
    readonly minutes: number,
    readonly hours: number,
    readonly days: number,
    readonly years: number,
    readonly standardActions: number,
    readonly bonusActions: number,
    readonly reactions: number
  ) {
    this.formatted = this.asString();
  }

  toString(): string {
    return this.formatted;
  }

  asString(): string {
    const parts: string[] = [];

    parts.push(Duration.formatUnit(this.rounds, 'round'));
    parts.push(Duration.formatUnit(this.minutes, 'minute'));
    parts.push(Duration.formatUnit(this.hours, 'hour'));
    parts.push(Duration.formatUnit(this.days, 'day'));
    parts.push(Duration.formatUnit(this.years, 'year'));
    parts.push(Duration.formatUnit(this.standardActions, 'standard action'));
    parts.push(Duration.formatUnit(this.bonusActions, 'bonus action'));
    parts.push(Duration.formatUnit(this.reactions, 'reaction'));

    return parts.filter((f) => !!f).join(' ');
  }

  private static formatUnit(value: number, unit: string): string {
    if (!value) {
      return '';
    }

    if (value === 1) {
      return '1 ' + unit;
    }

    return value + ' ' + unit + 's';
  }

  static fromProto(proto: DurationProto | undefined): Duration {
    if (!proto) {
      return EMPTY;
    }

    return new Duration(
      proto.getRounds(),
      proto.getMinutes(),
      proto.getHours(),
      proto.getDays(),
      proto.getYears(),
      proto.getStandardActions(),
      proto.getBonusActions(),
      proto.getReactions()
    );
  }
}

export const EMPTY = new Duration(0, 0, 0, 0, 0, 0, 0, 0);
