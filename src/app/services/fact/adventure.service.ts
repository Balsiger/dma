import { Adventure, Data } from '../../data/facts/adventure';
import { Campaign } from '../../data/facts/campaign';
import { EntitiesService } from '../entity/entities.service';
import { FirebaseService } from '../firebase.service';
import { CampaignService } from './campaign.service';
import { EncounterService } from './encounter.service';
import { FactService } from './fact.service';

const PATH = 'adventures';

export class AdventureService extends FactService<Data, Adventure, AdventureService> {
  constructor(
    firebase: FirebaseService,
    private readonly entitiesService: EntitiesService,
    campaign: Campaign,
  ) {
    super(
      firebase,
      CampaignService.buildPath(campaign) + '/' + PATH,
      Adventure.fromData.bind(null, campaign, entitiesService),
    );
  }

  static buildPath(adventure: Adventure): string {
    return CampaignService.buildPath(adventure.campaign) + '/' + PATH + '/' + adventure.name;
  }

  createEncounterService(adventure: Adventure) {
    return new EncounterService(this.firebase, this.entitiesService, adventure);
  }
}
