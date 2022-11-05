import { Injectable } from '@angular/core';
import { Adventure, Data as AdventureData } from '../data/adventure';
import { Campaign, Data as CampaignData } from '../data/Campaign';
import { Character, Data as CharacterData } from '../data/character';
import { Data as EncounterData, Encounter } from '../data/encounter';
import { Strings } from '../data/strings';
import { Document, FirebaseService } from './firebase.service';
import { ItemService } from './item.service';
import { MonsterService } from './monster.service';
import { SpellService } from './spell.service';

const PATH = 'campaigns';

@Injectable({
  providedIn: 'root',
})
export class CampaignsService {
  readonly campaignsByName: Map<string, Campaign> = new Map();
  readonly campaigns: Campaign[] = [];

  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly spellService: SpellService,
    private readonly monsterService: MonsterService,
    private readonly itemService: ItemService
  ) {
    this.firebaseService.listenDocuments(PATH, this.update.bind(this));
  }

  private update(documents: Document[]) {
    this.campaigns.length = 0; // Clear existings campaigns.

    for (const document of documents) {
      let campaign = this.campaignsByName.get(document.id);
      if (campaign) {
        campaign.update(document.data as CampaignData);
      } else {
        campaign = Campaign.fromData(this, document.id, document.data as CampaignData);
        this.campaignsByName.set(document.id, campaign);
      }

      this.campaigns.push(campaign);
    }
  }

  async loadCharacters(campaign: Campaign): Promise<Character[]> {
    const data = await this.firebaseService.loadDocuments(PATH + '/' + campaign.name + '/characters');
    return data.map((d) => Character.fromData(d.id, d.data as CharacterData));
  }

  async loadAdventures(campaign: Campaign): Promise<Adventure[]> {
    const data = await this.firebaseService.loadDocuments(PATH + '/' + campaign.name + '/adventures');
    return data.map((d) => Adventure.fromData(campaign, d.id, d.data as AdventureData));
  }

  async loadEncounters(adventure: Adventure): Promise<Encounter[]> {
    const data = await this.firebaseService.loadDocuments(
      PATH + '/' + adventure.campaign.name + '/adventures/' + adventure.name + '/encounters'
    );
    const encounters = data.map((d) => {
      return Encounter.fromData(
        this.spellService,
        this.monsterService,
        this.itemService,
        adventure,
        d.id,
        d.data as EncounterData
      );
    });

    return encounters.sort((a, b) => Strings.compareId(a.id, b.id));
  }

  async add(campaign: Campaign) {
    this.firebaseService.saveData(this.generateId(campaign.name), campaign.toData());
  }

  async addEncounter(encounter: Encounter) {
    this.firebaseService.saveData(this.generateEncounterId(encounter), encounter.toData());
  }

  has(name: string): boolean {
    for (const campaign of this.campaigns) {
      if (campaign.name === name) {
        return true;
      }
    }

    return false;
  }

  delete(campaign: Campaign) {
    this.firebaseService.delete(this.generateId(campaign.name));
  }

  deleteEncounter(encounter: Encounter) {
    this.firebaseService.delete(this.generateEncounterId(encounter));
  }

  private generateId(name: string): string {
    return PATH + '/' + name;
  }

  private generateAdventureId(adventure: Adventure): string {
    return this.generateId(adventure.campaign.name) + '/adventures/' + adventure.name;
  }

  private generateEncounterId(encounter: Encounter): string {
    return this.generateAdventureId(encounter.adventure) + '/encounters/' + encounter.name;
  }

  getCampaign(name: string): Campaign {
    const campaign = this.campaignsByName.get(name);
    if (campaign) {
      return campaign;
    }

    return this.createCampaign(name);
  }

  private createCampaign(name: string): Campaign {
    const campaign = Campaign.create(this, name);
    this.campaignsByName.set(name, campaign);
    return campaign;
  }

  async change(oldCampaign: Campaign | undefined, newCampaign: Campaign) {
    if (oldCampaign && oldCampaign.name !== newCampaign.name) {
      this.delete(oldCampaign);
    }

    await this.add(newCampaign);
  }

  async changeEncounter(oldEncounter: Encounter | undefined, newEncounter: Encounter) {
    if (oldEncounter && oldEncounter.name !== newEncounter.name) {
      this.deleteEncounter(oldEncounter);
    }

    await this.addEncounter(newEncounter);
  }
}
