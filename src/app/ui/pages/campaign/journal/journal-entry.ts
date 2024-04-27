import { signal } from '@angular/core';
import { DateTime } from '../../../../data/entities/values/date-time';
import { Campaign } from '../../../../data/facts/campaign';
import { Fact } from '../../../../data/facts/fact';
import { JournalService } from '../../../../services/fact/journal.service';

export interface Data {
  campaignDate?: string;
  realDates?: string[];
  notes?: string[];
}

export class JournalEntry extends Fact<Data, JournalService> {
  readonly date = signal<DateTime>(DateTime.EMPTY);
  readonly realDates = signal<string[]>([]);
  readonly notes = signal<string[]>([]);

  constructor(
    service: JournalService,
    readonly campaign: Campaign,
    data: Data,
  ) {
    super(service);

    // Cannot update signals in the same cycle as they are created :-(.
    setTimeout(() => {
      this.update(data);
    });
  }

  static fromData(campaign: Campaign, service: JournalService, _id: string, data: Data) {
    return new JournalEntry(service, campaign, data);
  }

  override update(data: Data) {
    // Since the initial, empty update may happen after the update from firestore, ignore empty updates.
    if (data.campaignDate || data.realDates || data.notes) {
      this.date.set(DateTime.fromStrings(data.campaignDate || '', ''));
      this.realDates.set(data.realDates || []);
      this.notes.set(data.notes || []);
    }
  }

  override buildDocumentId(): string {
    return this.date().toDateString();
  }

  toData(): Data {
    return {
      campaignDate: this.date().dateFormatted,
      realDates: this.realDates(),
      notes: this.notes(),
    };
  }

  addNote(value: string) {
    this.notes.set([...this.notes(), value]);

    const dates = new Set<string>(this.realDates());
    const now = JournalEntry.nowDate();
    if (!dates.has(now)) {
      const dates = [...this.realDates(), now];
      dates.sort();
      this.realDates.set(dates);
    }
  }

  private static nowDate(): string {
    const date = new Date();
    return `${date.getFullYear()}-${('' + date.getMonth()).padStart(2, '0')}-${('' + date.getDate()).padStart(2, '0')}`;
  }
}
