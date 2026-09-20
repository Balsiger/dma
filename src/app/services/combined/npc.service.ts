import { NPC } from 'src/app/data/combined/npc';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Data, NPCFact } from '../../data/entities/fluid/npc-fact';
import { Entities } from '../../data/entities/static/entities';
import { NPCEntity } from '../../data/entities/static/npc-entity';
import { NpcFactService } from '../fact/npcFact.service';
import { FirebaseService } from '../firebase.service';
import { CombinedService } from './combined.service';

export class NpcService extends CombinedService<NPC, NPCEntity, NPCFact, Data, NpcFactService> {
  static create(firebaseService: FirebaseService, npcs: Entities<NPCEntity>, campaign: Campaign): NpcService {
    const factService = new NpcFactService(firebaseService, campaign);
    return new NpcService(npcs, factService, (e, f) => new NPC(e, f, factService));
  }
}
