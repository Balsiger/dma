import { NPC } from '../../data/entities/combined/npc';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Data, FluidNPC } from '../../data/entities/fluid/npc';
import { Entities } from '../../data/entities/immutable/entities';
import { NPCEntity } from '../../data/entities/immutable/npc-entity';
import { NPC as LocalNPC, NPCData as LocalNPCData } from '../../data/entities/local/npc';
import { FirebaseService } from '../firebase.service';
import { NpcFluidService } from '../fluid/npc-fluid.service';
import { NPCService as LocalNPCService } from '../local/npc.service';
import { CombinedService } from './combined.service';

export class NpcService extends CombinedService<
  NPC,
  NPCEntity,
  FluidNPC,
  Data,
  NpcFluidService,
  LocalNPCData,
  LocalNPC,
  LocalNPCService
> {
  static create(firebaseService: FirebaseService, npcs: Entities<NPCEntity>, campaign: Campaign): NpcService {
    const fluidService = new NpcFluidService(firebaseService, campaign);
    return new NpcService(
      npcs,
      fluidService,
      new LocalNPCService('npc', campaign.name, (name: string, id: string) => new LocalNPC(name, campaign.name)),
      (e, f, l) => new NPC(e, f, fluidService, l),
    );
  }
}
