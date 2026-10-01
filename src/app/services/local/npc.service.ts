import { LocalNPC, NPCData } from '../../data/entities/local/npc';
import { LocalService } from './local.service';

export class LocalNPCService extends LocalService<NPCData, LocalNPC> {
  constructor(context: string, factory: (name: string, id: string) => LocalNPC) {
    super('npc', context, factory);
  }
}
