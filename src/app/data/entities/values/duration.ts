import { DurationProto } from '../../../proto/generated/value_pb';

export class Duration {
  private readonly formatted: string;
  private readonly formattedShort: string;

  constructor(
    readonly rounds: number,
    readonly minutes: number,
    readonly hours: number,
    readonly days: number,
    readonly years: number,
    readonly standardActions: number,
    readonly bonusActions: number,
    readonly reactions: number,
  ) {
    this.formatted = this.asString();
    this.formattedShort = this.asShortString();
  }

  toString(): string {
    return this.formatted;
  }

  toShortString(): string {
    return this.formattedShort;
  }

  isEmpty(): boolean {
    return (
      !this.rounds &&
      !this.minutes &&
      !this.hours &&
      !this.days &&
      !this.years &&
      !this.standardActions &&
      !this.bonusActions &&
      !this.reactions
    );
  }

  asString(): string {
    const parts: string[] = [];

    parts.push(Duration.formatUnit(this.rounds, 'round'));
    parts.push(Duration.formatUnit(this.minutes, 'minute'));
    parts.push(Duration.formatUnit(this.hours, 'hour'));
    parts.push(Duration.formatUnit(this.days, 'day'));
    parts.push(Duration.formatUnit(this.years, 'year'));
    parts.push(Duration.formatUnit(this.standardActions, 'action'));
    parts.push(Duration.formatUnit(this.bonusActions, 'bonus action'));
    parts.push(Duration.formatUnit(this.reactions, 'reaction'));

    return parts.filter((f) => !!f).join(' ');
  }

  asShortString(): string {
    const parts: string[] = [];

    parts.push(Duration.formatUnit(this.rounds, 'round'));
    parts.push(Duration.formatUnit(this.minutes, 'm', true));
    parts.push(Duration.formatUnit(this.hours, 'h', true));
    parts.push(Duration.formatUnit(this.days, 'd', true));
    parts.push(Duration.formatUnit(this.years, 'y', true));
    parts.push(Duration.formatUnit(this.standardActions, 'action'));
    parts.push(Duration.formatUnit(this.bonusActions, 'bonus action'));
    parts.push(Duration.formatUnit(this.reactions, 'reaction'));

    return parts.filter((f) => !!f).join(' ');
  }

  private static formatUnit(value: number, unit: string, short = false): string {
    if (!value) {
      return '';
    }

    if (value === 1) {
      return '1 ' + unit;
    }

    return value + ' ' + unit + (short ? '' : 's');
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
      proto.getReactions(),
    );
  }
}

export const EMPTY = new Duration(0, 0, 0, 0, 0, 0, 0, 0);
