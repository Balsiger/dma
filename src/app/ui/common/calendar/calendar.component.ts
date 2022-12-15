import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DateTime, EMPTY as EMPTY_DATE } from '../../../data/values/date-time';
import { Dates, Day, EMPTY_DAY } from '../../../data/values/dates';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnChanges {
  @Input() date = EMPTY_DATE;
  @Output() selected = new EventEmitter<DateTime>();

  yearName = '';
  day = Dates.getDayName(0, false);
  dayOfMonth = 0;
  specials: Day[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['date']) {
      this.update();
    }
  }

  private update() {
    this.yearName = Dates.getYearName(this.date.years);
    this.day = Dates.getDayName(this.date.days, this.date.isLeapYear());
    if (!this.day.similar) {
      this.day = Dates.getDayName(this.date.days - 2, this.date.isLeapYear());
    }

    if (this.day === EMPTY_DAY) {
      this.day = Dates.getDayName(0, this.date.isLeapYear());
    }

    this.dayOfMonth = this.date.days - this.day.start - (this.day.leap && this.date.isLeapYear() ? 1 : 0);

    // Compute special days.
    this.specials.length = 0;
    const next = new DateTime(this.date.years, this.day.end + (this.date.isLeapYear() ? this.day.leap : 0) + 1, 0, 0);
    const nextDay = Dates.getDayName(next.days, next.years % 4 === 0);
    if (nextDay !== EMPTY_DAY && !nextDay.similar) {
      this.specials.push(nextDay);

      const nextNext = next.advanceDate(0, 1);
      const nextNextDay = Dates.getDayName(nextNext.days, nextNext.years % 4 === 0);
      if (!nextNextDay.similar) {
        this.specials.push(nextNextDay);
      }
    }
  }

  change(years: number, days: number) {
    this.date = this.date.advanceDate(years, days);
    this.update();

    this.selected.emit(this.date);
  }
}
