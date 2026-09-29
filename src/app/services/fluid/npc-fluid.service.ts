import { Campaign } from '../../data/entities/fluid/campaign';
import { FluidNPC, FluidNPCData } from '../../data/entities/fluid/npc';
import { FirebaseService } from '../firebase.service';
import { FluidCampaignService } from './campaign.service';
import { FluidService } from './fluid.service';

const PATH = 'npcs';

export class NpcFluidService extends FluidService<FluidNPCData, FluidNPC, NpcFluidService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign) {
    super(
      firebaseService,
      FluidCampaignService.buildPath(campaign) + '/' + PATH,
      FluidNPC.fromData.bind(null, campaign),
    );
  }
}
