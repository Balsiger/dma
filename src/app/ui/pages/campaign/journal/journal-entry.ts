import { Campaign } from '../../../../data/things/campaign';
import { DateTime } from '../../../../data/values/date-time';

export interface Data {
  campaignDate: string;
  realDates: string[];
  notes: string[];
}

export class JournalEntry {
  readonly date: DateTime;

  constructor(
    readonly campaign: Campaign,
    readonly campaignDate: string,
    readonly realDates: string[],
    readonly notes: string[]
  ) {
    this.date = DateTime.fromStrings(campaignDate, '');
  }

  static fromData(campaign: Campaign, campaignDate: string, data: Data) {
    return new JournalEntry(campaign, campaignDate, data.realDates, data.notes);
  }

  toData(): Data {
    return {
      campaignDate: this.campaignDate,
      realDates: this.realDates,
      notes: this.notes,
    };
  }

  addNote(value: string) {
    this.notes.push(value);

    const dates = new Set<string>(this.realDates);
    const now = JournalEntry.nowDate();
    if (!dates.has(now)) {
      this.realDates.push(now);
      this.realDates.sort();
    }
  }

  private static nowDate(): string {
    const date = new Date();
    return `${date.getFullYear()}-${('' + date.getMonth()).padStart(2, '0')}-${('' + date.getDate()).padStart(2, '0')}`;
  }
}
