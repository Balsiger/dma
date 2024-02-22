import { CampaignsService } from '../../services/campaigns.service';
import { Campaign } from './campaign';
import { Encounter } from './encounter';

export interface Data {
  encounter: string;
  image: string;
  levels: string;
}

export class Adventure {
  encounters: Encounter[] = [];
  currentEncounter?: Encounter;
  previousEncounter?: Encounter;
  nextEncounter?: Encounter;

  constructor(
    private readonly campaignService: CampaignsService,
    readonly campaign: Campaign,
    public readonly name: string,
    public encounterId: string,
    readonly image: string,
    readonly levels: string,
  ) {
    this.load();
  }

  async load() {
    if (this.campaign.service) {
      this.encounters = await this.campaign.service.loadEncounters(this);
      this.update();
    }
  }

  update() {
    this.currentEncounter = this.getEncounter(this.encounterId);
    if (this.currentEncounter) {
      this.previousEncounter = this.encounters[this.encounters.indexOf(this.currentEncounter) - 1];
      this.nextEncounter = this.encounters[this.encounters.indexOf(this.currentEncounter) + 1];
    } else {
      this.previousEncounter = undefined;
      this.nextEncounter = this.encounters[0];
    }
  }

  async addEncounter(encounter: Encounter) {
    await this.campaignService.addEncounter(encounter);
    this.load();
  }

  async changeEncounter(old: Encounter, changed: Encounter) {
    await this.campaignService.changeEncounter(old, changed);
    this.load();
  }

  async deleteEncounter(encounter: Encounter) {
    await this.campaignService.deleteEncounter(encounter);
    this.load();
  }

  static fromData(campaignService: CampaignsService, campaign: Campaign, name: string, data: Data): Adventure {
    return new Adventure(campaignService, campaign, name, data.encounter, data.image, data.levels);
  }

  toData(): Data {
    return {
      encounter: this.encounterId,
      levels: this.levels,
      image: this.image,
    };
  }

  getEncounter(id: string): Encounter | undefined {
    return this.encounters.find((e) => e.id === id);
  }

  setEncounter(service: CampaignsService, encounterId: string) {
    this.encounterId = encounterId;
    this.update();
    this.save(service);
  }

  private save(service: CampaignsService) {
    service.setAdventure(this);
  }

  hasEncounterId(id: string): boolean {
    for (const encounter of this.encounters) {
      if (encounter.id === id) {
        return true;
      }
    }

    return false;
  }

  hasEncounterName(name: string): boolean {
    for (const encounter of this.encounters) {
      if (encounter.name === name) {
        return true;
      }
    }

    return false;
  }
}
