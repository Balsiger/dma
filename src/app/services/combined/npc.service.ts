import { NPC } from 'src/app/data/combined/npc';
import { Entities } from '../../data/entities/entities';
import { NPCEntity } from '../../data/entities/npc-entity';
import { Campaign } from '../../data/facts/campaign';
import { Data, NPCFact } from '../../data/facts/npc-fact';
import { NpcFactService } from '../fact/npcFact.service';
import { FirebaseService } from '../firebase.service';
import { CombinedService } from './combined.service';

export class NpcService extends CombinedService<NPC, NPCEntity, NPCFact, Data, NpcFactService> {
  static create(firebaseService: FirebaseService, npcs: Entities<NPCEntity>, campaign: Campaign): NpcService {
    const factService = new NpcFactService(firebaseService, campaign);
    return new NpcService(npcs, factService, (e, f) => new NPC(e, f, factService));
  }
}
