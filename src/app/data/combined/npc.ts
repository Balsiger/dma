import { CampaignNpcService } from '../../services/fact/campaignNpc.service';
import { Monster } from '../entities/monster';
import { NPCEntity } from '../entities/npc-entity';
import { Gender } from '../entities/values/enums/gender';
import { Data, NPCFact } from '../facts/npc-fact';
import { Combined } from './combined';

export class NPC extends Combined<NPCEntity, Data, CampaignNpcService, NPCFact> {
  get miniature(): string {
    return this.fact.miniature();
  }

  get gender(): Gender {
    return this.entity.gender;
  }

  get genderSpecial(): string {
    return this.entity.genderSpecial;
  }

  get race(): Monster {
    return this.entity.race;
  }

  get factions(): string[] {
    return this.entity.factions;
  }
}
