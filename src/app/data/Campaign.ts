import { CampaignsService } from "../services/campaigns.service";
import { Character } from "./character";

export interface Data {
}

export class Campaign {
  characters: Character[] = [];

  constructor(readonly name: string) {
  }

  static fromData(name: string, data: Data): Campaign {
    return new Campaign(name);
  }

  toData(): Data {
    return {};
  }

  async loadCharacters(campaignService: CampaignsService) {
    this.characters = await campaignService.loadCharacters(this);
    console.log('~~characterts', this.characters);;
  }
}
