import { DateTime } from '../../../../data/entities/values/date-time';
import { Campaign } from '../../../../data/facts/campaign';

export interface Data {
  campaignDate: string;
  notes: string;
}

export class AdventureEvent {
  readonly date: DateTime;

  constructor(
    readonly campaign: Campaign,
    readonly campaignDate: string,
    readonly notes: string,
  ) {
    this.date = DateTime.fromStrings(campaignDate, '');
  }

  static fromData(campaign: Campaign, campaignDate: string, data: Data) {
    return new AdventureEvent(campaign, campaignDate, data.notes);
  }

  toData(): Data {
    return {
      campaignDate: this.campaignDate,
      notes: this.notes,
    };
  }
}
