import { CampaignNPC, Data } from '../../data/entities/npc';
import { Campaign } from '../../data/facts/campaign';
import { FirebaseService } from '../firebase.service';
import { CampaignService } from './campaign.service';
import { FactService } from './fact.service';

const PATH = 'npcs';

export class CampaignNpcService extends FactService<Data, CampaignNPC, CampaignNpcService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign) {
    super(firebaseService, CampaignService.buildPath(campaign) + '/' + PATH, CampaignNPC.fromData.bind(null, campaign));
  }
}
