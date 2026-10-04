import { NPC } from '../../data/entities/combined/npc';
import { Campaign } from '../../data/entities/fluid/campaign';
import { FluidNPC, FluidNPCData } from '../../data/entities/fluid/npc';
import { Immutables } from '../../data/entities/immutable/immutables';
import { NPCEntity } from '../../data/entities/immutable/npc-entity';
import { LocalNPC, NPCData as LocalNPCData } from '../../data/entities/local/npc';
import { Context } from '../context';
import { FirebaseService } from '../firebase.service';
import { NpcFluidService } from '../fluid/npc-fluid.service';
import { LocalNPCService } from '../local/npc.service';
import { CombinedService } from './combined.service';

export class NpcService extends CombinedService<
  NPC,
  NPCEntity,
  FluidNPC,
  FluidNPCData,
  NpcFluidService,
  LocalNPCData,
  LocalNPC,
  LocalNPCService
> {
  static create(
    firebaseService: FirebaseService,
    npcs: Immutables<NPCEntity>,
    campaign: Campaign,
    context: Context,
  ): NpcService {
    const fluidService = new NpcFluidService(firebaseService, campaign, context);
    return new NpcService(
      npcs,
      fluidService,
      new LocalNPCService(campaign.name, (name: string, id: string) => new LocalNPC(name, campaign.name)),
      (i, f, l) => new NPC(i, f, fluidService, l),
    );
  }
}
