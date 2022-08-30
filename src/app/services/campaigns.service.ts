import { Injectable } from '@angular/core';
import { Campaign, Data } from '../data/Campaign';
import { Character, Data as CharacterData } from '../data/character';
import { FirebaseService } from './firebase.service';

const PATH = "campaigns";

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  private campaigns: Campaign[] = [];

  constructor(private readonly firebaseService: FirebaseService) {
    this.load();
  }

  async load(): Promise<Campaign[]> {
    const data = await this.firebaseService.loadDocuments(PATH);
    this.campaigns = data.map(d => Campaign.fromData(d.id, d.data as Data));
    return this.campaigns;
  }

  async loadCharacters(campaign: Campaign): Promise<Character[]> {
    const data = await this.firebaseService.loadDocuments(PATH + '/' + campaign.name + '/characters');
    return data.map(d => Character.fromData(d.id, d.data as CharacterData));
  }

  async add(campaign: Campaign) {
    this.firebaseService.saveData(this.generateId(campaign.name), campaign.toData());
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

  private generateId(name: string): string {
    return PATH + '/' + name;
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
}
