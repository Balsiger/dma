import { CampaignsService } from "../services/campaigns.service";
import { Adventure } from "./adventure";
import { Character } from "./character";

export interface Data {
  image: string;
}

export class Campaign {
  characters: Character[] = [];
  adventures: Adventure[] = [];

  constructor(readonly name: string, readonly image: string) {
  }

  static fromData(name: string, data: Data): Campaign {
    return new Campaign(name, data.image);
  }

  toData(): Data {
    return {
      image: this.image,
    };
  }

  async load(campaignsService: CampaignsService) {
    this.characters = await campaignsService.loadCharacters(this);
    this.adventures = await campaignsService.loadAdventures(this);
  }
}
