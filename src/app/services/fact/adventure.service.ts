import { Injectable } from '@angular/core';
import { Adventure, Data } from '../../data/facts/adventure';
import { Campaign } from '../../data/facts/campaign';
import { FirebaseService } from '../firebase.service';
import { CampaignService } from './campaign.service';
import { EncounterService } from './encounter.service';

const PATH = 'adventures';

@Injectable({ providedIn: 'root' })
export class AdventureService {
  constructor(
    private readonly firebase: FirebaseService,
    private readonly encounterService: EncounterService,
  ) {}

  async load(campaign: Campaign): Promise<Adventure[]> {
    const data = await this.firebase.loadDocuments(CampaignService.buildPath(campaign) + '/' + PATH);
    return data.map((d) => Adventure.fromData(this, this.encounterService, campaign, d.id, d.data as Data));
  }

  async save(adventure: Adventure) {
    this.firebase.saveData(AdventureService.buildPath(adventure), adventure.toData());
  }

  static buildPath(adventure: Adventure): string {
    return CampaignService.buildPath(adventure.campaign) + '/' + PATH + '/' + adventure.name;
  }
}
