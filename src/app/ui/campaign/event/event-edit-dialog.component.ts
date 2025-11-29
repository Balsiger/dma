import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateTime } from '../../../data/entities/values/date-time';
import { Campaign } from '../../../data/facts/campaign';
import { CampaignEvent } from '../../../services/fact/campaign-event';
import { CalendarComponent } from '../../common/calendar/calendar.component';
import { DialogComponent } from '../../common/dialog/dialog.component';

export interface EditData {
  campaign: Campaign;
  event?: CampaignEvent;
}

@Component({
  selector: 'event-edit-dialog',
  templateUrl: './event-edit-dialog.component.html',
  styleUrls: ['./event-edit-dialog.component.scss'],
  imports: [CalendarComponent, DialogComponent],
})
export class AdventureEventEditDialogComponent implements AfterViewInit {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  date: DateTime;

  constructor(
    private readonly ref: MatDialogRef<AdventureEventEditDialogComponent, CampaignEvent>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData,
  ) {
    if (data.event) {
      this.date = data.event.date();
    } else {
      this.date = data.campaign.dateTime();
    }
  }

  ngAfterViewInit() {
    if (this.data.event) {
      this.input.nativeElement.value = this.data.event.notes();
    }
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 250);
  }

  onCancel() {
    this.ref.close();
  }

  onSave(value: string) {
    this.ref.close(this.data.campaign.createEvent({ campaignDate: this.date.toDateString(), notes: value }));
  }
}
