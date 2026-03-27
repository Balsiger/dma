import { NPC } from 'src/app/data/combined/npc';
import { NPCEntity } from '../../data/entities/npc-entity';
import { Data, NPCFact } from '../../data/facts/npc-fact';
import { CampaignNpcService } from '../fact/campaignNpc.service';
import { CombinedService } from './combined.service';

export class NpcService extends CombinedService<NPC, NPCEntity, NPCFact, Data, CampaignNpcService> {}
