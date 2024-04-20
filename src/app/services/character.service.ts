import { Injectable } from '@angular/core';
import { Campaign } from '../data/facts/campaign';
import { Character, Data } from '../data/facts/character';
import { CampaignService } from './fact/campaign.service';
import { FactService } from './fact/fact.service';
import { FirebaseService } from './firebase.service';

@Injectable({ providedIn: 'root' })
export class CharacterService extends FactService<Data, Character, CharacterService> {
  constructor(private readonly firebaseService: FirebaseService) {
    super(firebaseService, 'guru', (s, d, i) => null as any as Character);
  }

  async loadCharacters(campaign: Campaign): Promise<Character[]> {
    const data = await this.firebaseService.loadDocuments(CampaignService.buildPath(campaign) + '/characters');
    return data.map((d) => Character.fromData(d.id, d.data as Data));
  }
}
