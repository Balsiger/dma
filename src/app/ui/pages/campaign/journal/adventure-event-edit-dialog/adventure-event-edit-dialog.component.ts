import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Campaign } from '../../../../../data/Campaign';
import { DateTime } from '../../../../../data/date-time';
import { AdventureEvent } from '../adventure-event';

export interface EditData {
  campaign: Campaign;
  event?: AdventureEvent;
}

@Component({
  selector: 'app-adventure-event-edit-dialog',
  templateUrl: './adventure-event-edit-dialog.component.html',
  styleUrls: ['./adventure-event-edit-dialog.component.scss'],
})
export class AdventureEventEditDialogComponent implements AfterViewInit {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  date: DateTime;

  constructor(
    private readonly ref: MatDialogRef<AdventureEventEditDialogComponent, AdventureEvent>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData
  ) {
    if (data.event) {
      this.date = data.event.date;
    } else {
      this.date = data.campaign.dateTime;
    }
  }

  ngAfterViewInit() {
    if (this.data.event) {
      this.input.nativeElement.value = this.data.event.notes;
    }
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 250);
  }

  onChange(value: string) {
    this.ref.close(new AdventureEvent(this.data.campaign, this.date.toDateString(), value));
  }
}
