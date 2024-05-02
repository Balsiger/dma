import { Component, computed, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DateTime } from '../../../data/entities/values/date-time';
import { Dates, Day, EMPTY_DAY } from '../../../data/entities/values/dates';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class CalendarComponent {
  date = model(DateTime.EMPTY);

  yearName = computed(() => Dates.getYearName(this.date().years));
  day = computed(() => this.computeDay());
  dayOfMonth = computed(
    () => this.date().days - this.day().start - (this.day().leap && this.date().isLeapYear() ? 1 : 0),
  );
  specials = computed(() => this.computeSpecialDays());

  constructor() {}

  private computeDay(): Day {
    let day = Dates.getDayName(this.date().days, this.date().isLeapYear());
    if (!day.similar) {
      day = Dates.getDayName(this.date().days - 2, this.date().isLeapYear());
    }

    if (day === EMPTY_DAY) {
      day = Dates.getDayName(0, this.date().isLeapYear());
    }

    return day;
  }

  private computeSpecialDays(): Day[] {
    const specials = [];
    const next = new DateTime(
      this.date().years,
      this.day().end + (this.date().isLeapYear() ? this.day().leap : 0) + 1,
      0,
      0,
    );
    const nextDay = Dates.getDayName(next.days, next.years % 4 === 0);
    if (nextDay !== EMPTY_DAY && !nextDay.similar) {
      specials.push(nextDay);

      const nextNext = next.advanceDate(0, 1);
      const nextNextDay = Dates.getDayName(nextNext.days, nextNext.years % 4 === 0);
      if (!nextNextDay.similar) {
        specials.push(nextNextDay);
      }
    }

    return specials;
  }

  change(years: number, days: number) {
    this.date.set(this.date().advanceDate(years, days));
  }
}
