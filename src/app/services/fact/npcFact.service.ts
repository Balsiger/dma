import { Campaign } from '../../data/entities/fluid/campaign';
import { Data, NPCFact } from '../../data/entities/fluid/npc-fact';
import { FirebaseService } from '../firebase.service';
import { CampaignService } from './campaign.service';
import { FluidService } from './fluid.service';

const PATH = 'npcs';

export class NpcFactService extends FluidService<Data, NPCFact, NpcFactService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign) {
    super(firebaseService, CampaignService.buildPath(campaign) + '/' + PATH, NPCFact.fromData.bind(null, campaign));
  }
}
