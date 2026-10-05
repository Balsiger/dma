import { LocalNPC, NPCData } from '../../data/entities/local/npc';
import { Context } from '../context';
import { LocalService } from './local.service';

export class LocalNPCService extends LocalService<NPCData, LocalNPC> {
  constructor(context: Context, factory: (name: string, id: string) => LocalNPC) {
    super(context.extendTerminal('npc'), factory);
  }
}
