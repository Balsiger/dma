import { Campaign } from '../../data/entities/fluid/campaign';
import { FluidNPC, FluidNPCData } from '../../data/entities/fluid/npc';
import { Context } from '../context';
import { FirebaseService } from '../firebase.service';
import { FluidService } from './fluid.service';

const PATH = 'npcs';

export class NpcFluidService extends FluidService<FluidNPCData, FluidNPC, NpcFluidService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign, context: Context) {
    super(firebaseService, context.extendTerminal(PATH), FluidNPC.fromData.bind(null));
  }
}
