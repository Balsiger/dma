import { Campaign } from '../../data/entities/fluid/campaign';
import { Data, FluidNPC } from '../../data/entities/fluid/npc';
import { FirebaseService } from '../firebase.service';
import { CampaignService } from './campaign.service';
import { FluidService } from './fluid.service';

const PATH = 'npcs';

export class NpcFluidService extends FluidService<Data, FluidNPC, NpcFluidService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign) {
    super(firebaseService, CampaignService.buildPath(campaign) + '/' + PATH, FluidNPC.fromData.bind(null, campaign));
  }
}
