import { NpcFactService } from '../../services/fact/npcFact.service';
import { NPCEntity } from '../entities/npc-entity';
import { Campaign } from '../facts/campaign';
import { Data, NPCFact } from '../facts/npc-fact';
import { Combined } from './combined';

export class NPC extends Combined<NPCEntity, Data, NpcFactService, NPCFact> {
  miniature = this.fact.miniature.bind(this.fact);
  state = this.fact.state.bind(this.fact);

  gender = this.entity.gender;
  genderSpecial = this.entity.genderSpecial;
  race = this.entity.race;
  factions = this.entity.factions;

  withFact(data: Data): NPC {
    return new NPC(this.entity, new NPCFact(this.factService, this.fact.campaign, this.name, data), this.factService);
  }

  static fromEntityOnly(entity: NPCEntity): NPC {
    return new NPC(
      entity,
      new NPCFact({} as any as NpcFactService, {} as any as Campaign, entity.name, {}),
      {} as any as NpcFactService,
    );
  }
}
