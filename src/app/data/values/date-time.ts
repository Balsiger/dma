import { Dates } from './dates';

const TIME_PATTERN = /(\d+):(\d+)/;
const DATE_PATTERN = /(\d+)-(\d+)/;
const SUNRISE = 6;
const NOON = 12;
const SUNSET = 19;
const MIDNIGHT = 0;
const DAYS_PER_YEAR = 365;

export class DateTime {
  private readonly timeText: string;
  private readonly dateText: string;
  readonly dateFormatted: string;
  readonly dayFormatted: string;
  readonly monthFormatted: string;
  readonly yearFormatted: string;
  readonly moonPhase: number;

  constructor(
    readonly years: number,
    readonly days: number,
    readonly hours: number,
    readonly minutes: number,
  ) {
    this.timeText = this.asTimeString();
    this.dateText = this.asDateString();
    this.dateFormatted = Dates.formatDate(days, years % 4 === 0);
    this.dayFormatted = Dates.formatDay(days, years % 4 === 0);
    this.monthFormatted = Dates.formatMonth(days, years % 4 === 0);
    this.yearFormatted = Dates.getYearName(years);
    this.moonPhase = (((years * 365 + Math.floor(years / 4) + days) % 28) * 360) / 28;
  }

  toString(): string {
    return this.timeText;
  }

  toTimeString(): string {
    return this.timeText;
  }

  toDateString(): string {
    return this.dateText;
  }

  isBefore(other: DateTime): boolean {
    if (other.years > this.years) {
      return true;
    }

    if (other.years < this.years) {
      return false;
    }

    if (other.days > this.days) {
      return true;
    }

    if (other.days < this.days) {
      return false;
    }

    if (other.hours > this.hours) {
      return true;
    }

    if (other.hours < this.hours) {
      return false;
    }

    if (other.minutes > this.minutes) {
      return true;
    }

    if (other.minutes < this.minutes) {
      return false;
    }

    return false;
  }

  advanceTime(hours: number, minutes: number): DateTime {
    return new DateTime(this.years, this.days, this.hours + hours, this.minutes + minutes).simplify();
  }

  advanceDate(years: number, days: number): DateTime {
    return new DateTime(this.years + years, this.days + days, this.hours, this.minutes).simplify();
  }

  advanceSunrise(): DateTime {
    return new DateTime(this.years, this.days + (this.hours <= SUNRISE ? 0 : 1), SUNRISE, 0);
  }

  advanceNoon(): DateTime {
    return new DateTime(this.years, this.days + (this.hours <= NOON ? 0 : 1), NOON, 0);
  }

  advanceSunset(): DateTime {
    return new DateTime(this.years, this.days + (this.hours <= SUNSET ? 0 : 1), SUNSET, 0);
  }

  advanceMidnight(): DateTime {
    return new DateTime(this.years, this.days, MIDNIGHT, 0);
  }

  getPercentsOfDay(): number {
    if (this.hours >= SUNRISE && this.hours < SUNSET) {
      // Day.
      const minutes = (this.hours - SUNRISE) * 60 + this.minutes;
      return Math.floor((minutes * 100) / ((SUNSET - SUNRISE) * 60));
    } else {
      // Night.
      const minutes =
        this.hours > SUNSET && this.hours < 24
          ? (this.hours - SUNSET) * 60 + this.minutes
          : (24 - SUNSET) * 60 + this.hours * 60 + this.minutes;
      return Math.floor((minutes * 100) / ((24 - SUNSET) * 60 + SUNRISE * 60)) - 100;
    }
  }

  isLeapYear(): boolean {
    return this.years % 4 === 0;
  }

  static fromStrings(date: string, time: string): DateTime {
    time = time || '';
    date = date || '';

    let hours = 0;
    let minutes = 0;
    const timeMatch = time.match(TIME_PATTERN);
    if (timeMatch) {
      hours = Number(timeMatch[1]);
      minutes = Number(timeMatch[2]);
    }

    let years = 0;
    let days = 0;
    const dateMatch = date.match(DATE_PATTERN);
    if (dateMatch) {
      years = Number(dateMatch[1]);
      days = Number(dateMatch[2]);
    }

    return new DateTime(years, days, hours, minutes).simplify();
  }

  private simplify(): DateTime {
    let minutes = this.minutes;
    let hours = this.hours;
    let days = this.days;
    let years = this.years;

    if (minutes >= 60) {
      hours += Math.floor(minutes / 60);
      minutes %= 60;
    } else if (minutes < 0) {
      hours -= Math.floor(-minutes / 60) + 1;
      minutes = 60 - (-minutes % 60);
    }

    if (hours >= 24) {
      days += Math.floor(hours / 24);
      hours %= 24;
    } else if (hours < 0) {
      days -= Math.floor(-hours / 24) + 1;
      hours = 24 - (-hours % 24);
    }

    if (days >= DAYS_PER_YEAR + (years % 4 === 0 ? 1 : 0)) {
      years += Math.floor(days / DAYS_PER_YEAR);
      days %= DAYS_PER_YEAR;
    } else if (days < 0) {
      years -= Math.floor(days / DAYS_PER_YEAR);
      days = DAYS_PER_YEAR - (-days % DAYS_PER_YEAR);
    }

    return new DateTime(years, days, hours, minutes);
  }

  private asTimeString(): string {
    return `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}`;
  }

  private asDateString(): string {
    return `${this.years}-${String(this.days).padStart(3, '0')}`;
  }
}

export const EMPTY = new DateTime(0, 0, 0, 0);
