import { CampaignsService } from "../services/campaigns.service";
import { Adventure } from "./adventure";
import { Character } from "./character";

export interface Data {
  image: string;
}

export class Campaign {
  characters: Character[] = [];
  adventures: Adventure[] = [];

  constructor(private readonly campaignsService: CampaignsService, readonly name: string,
    readonly image: string) {
  }

  static fromData(campaignsService: CampaignsService, name: string, data: Data): Campaign {
    return new Campaign(campaignsService, name, data.image);
  }

  toData(): Data {
    return {
      image: this.image,
    };
  }

  async load() {
    this.characters = await this.campaignsService.loadCharacters(this);
    this.adventures = await this.campaignsService.loadAdventures(this);
  }

  async getAdventure(name: string | null): Promise<Adventure | undefined> {
    await this.load();
    for (const adventure of this.adventures) {
      if (adventure.name === name) {
        return adventure;
      }
    }

    return undefined;
  }
}
