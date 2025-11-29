import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateTime } from '../../../data/entities/values/date-time';
import { DialogComponent } from '../dialog/dialog.component';
import { CalendarComponent } from './calendar.component';

export interface EditData {
  date: DateTime;
}

@Component({
  selector: 'calendar-dialog',
  imports: [DialogComponent, CalendarComponent],
  templateUrl: './calendar-dialog.component.html',
  styleUrl: './calendar-dialog.component.scss',
})
export class CalendarDialogComponent {
  date: DateTime;

  constructor(
    private readonly ref: MatDialogRef<CalendarDialogComponent, DateTime>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData,
  ) {
    this.date = data.date;
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    this.ref.close(this.date);
  }
}
