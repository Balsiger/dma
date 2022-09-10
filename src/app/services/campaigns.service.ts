import { Injectable } from '@angular/core';
import { Adventure, Data as AdventureData } from '../data/adventure';
import { Campaign, Data as CampaignData } from '../data/Campaign';
import { Character, Data as CharacterData } from '../data/character';
import { Data as EncounterData, Encounter } from '../data/encounter';
import { FirebaseService } from './firebase.service';
import { MonsterService } from './monster.service';
import { SpellService } from './spell.service';

const PATH = 'campaigns';

@Injectable({
  providedIn: 'root',
})
export class CampaignsService {
  private campaigns: Campaign[] = [];

  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly spellService: SpellService,
    private readonly monsterService: MonsterService
  ) {
    this.load();
  }

  async load(): Promise<Campaign[]> {
    const data = await this.firebaseService.loadDocuments(PATH);
    this.campaigns = data.map((d) => Campaign.fromData(this, d.id, d.data as CampaignData));
    return this.campaigns;
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
    return data.map((d) =>
      Encounter.fromData(this.spellService, this.monsterService, adventure, d.id, d.data as EncounterData)
    );
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

  async loadCampaign(name: string | null): Promise<Campaign | undefined> {
    await this.load();
    for (const campaign of this.campaigns) {
      if (campaign.name === name) {
        return campaign;
      }
    }

    return undefined;
  }

  async change(oldCampaign: Campaign | undefined, newCampaign: Campaign) {
    if (oldCampaign && oldCampaign.name !== newCampaign.name) {
      await this.delete(oldCampaign);
    }

    await this.add(newCampaign);
  }

  async changeEncounter(oldEncounter: Encounter | undefined, newEncounter: Encounter) {
    if (oldEncounter && oldEncounter.name !== newEncounter.name) {
      await this.deleteEncounter(oldEncounter);
    }

    await this.addEncounter(newEncounter);
  }
}
