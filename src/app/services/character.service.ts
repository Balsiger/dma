import { Injectable } from '@angular/core';
import { Campaign } from '../data/facts/campaign';
import { Character, Data } from '../data/facts/character';
import { CampaignService } from './fact/campaign.service';
import { FirebaseService } from './firebase.service';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async loadCharacters(campaign: Campaign): Promise<Character[]> {
    const data = await this.firebaseService.loadDocuments(CampaignService.buildPath(campaign) + '/characters');
    return data.map((d) => Character.fromData(d.id, d.data as Data));
  }
}
