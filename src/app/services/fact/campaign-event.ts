import { signal } from '@angular/core';
import { DateTime } from '../../data/entities/values/date-time';
import { Campaign } from '../../data/facts/campaign';
import { Fact } from '../../data/facts/fact';
import { EventService } from './event.service';

export interface Data {
  campaignDate?: string;
  notes?: string;
}

export class CampaignEvent extends Fact<Data, EventService> {
  readonly date = signal<DateTime>(DateTime.EMPTY);
  readonly notes = signal('');

  constructor(
    service: EventService,
    readonly campaign: Campaign,
    data: Data,
  ) {
    super(service);

    // Cannot update signals in the same cycle as they are created :-(.
    setTimeout(() => {
      this.update(data);
    });
  }

  static fromData(campaign: Campaign, service: EventService, _id: string, data: Data) {
    return new CampaignEvent(service, campaign, data);
  }

  toData(): Data {
    return {
      campaignDate: this.date().toDateString(),
      notes: this.notes(),
    };
  }

  override buildDocumentId(): string {
    return this.date().toDateString();
  }

  override update(data: Data) {
    // Since the initial, empty update may happen after the update from firestore, ignore empty updates.
    if (data.campaignDate || data.notes) {
      this.date.set(DateTime.fromStrings(data.campaignDate || '', ''));
      this.notes.set(data.notes || '');
    }
  }
}
