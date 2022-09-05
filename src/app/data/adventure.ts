import { Campaign } from "./Campaign";
import { Encounter } from "./encounter";

export interface Data {
  image: string;
  levels: string;
}

export class Adventure {
  encounters: Encounter[] = [];

  constructor(readonly campaign: Campaign, readonly name: string, readonly image: string,
    readonly levels: string) {
  }

  async load() {
    this.encounters = await this.campaign.service.loadEncounters(this);
  }

  static fromData(campaign: Campaign, name: string, data: Data): Adventure {
    return new Adventure(campaign, name, data.image, data.levels);
  }

  toData(): Data {
    return {
      levels: this.levels,
      image: this.image,
    }
  }
}
