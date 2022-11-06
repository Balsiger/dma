export interface Data {
  campaignDate: string;
  realDate: string;
  notes: string[];
}

export class JournalEntry {
  constructor(readonly campaignDate: string, readonly realDate: string, readonly notes: string[]) {}

  static fromData(campaignDate: string, data: Data) {
    return new JournalEntry(campaignDate, data.realDate, data.notes);
  }

  toData(): Data {
    return {
      campaignDate: this.campaignDate,
      realDate: this.realDate,
      notes: this.notes,
    };
  }
}
