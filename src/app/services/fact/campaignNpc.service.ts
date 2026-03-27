import { Campaign } from '../../data/facts/campaign';
import { Data, NPCFact } from '../../data/facts/npc-fact';
import { FirebaseService } from '../firebase.service';
import { CampaignService } from './campaign.service';
import { FactService } from './fact.service';

const PATH = 'npcs';

export class CampaignNpcService extends FactService<Data, NPCFact, CampaignNpcService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign) {
    super(firebaseService, CampaignService.buildPath(campaign) + '/' + PATH, NPCFact.fromData.bind(null, campaign));
  }
}
