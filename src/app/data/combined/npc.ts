import { NpcFactService } from '../../services/fact/npcFact.service';
import { NPCEntity } from '../entities/npc-entity';
import { Campaign } from '../facts/campaign';
import { Data, NPCFact } from '../facts/npc-fact';
import { LabelType } from '../values/link';
import { Combined } from './combined';

export class NPC extends Combined<NPCEntity, Data, NpcFactService, NPCFact> {
  miniature = this.fact.miniature.bind(this.fact);
  state = this.fact.state.bind(this.fact);
  hp = this.fact.hp.bind(this.fact);
  maxHp = this.fact.maxHp.bind(this.fact);

  gender = this.entity.gender;
  genderSpecial = this.entity.genderSpecial;
  race = this.entity.race;
  factions = this.entity.factions;
  portrait = this.entity.images.find((i) => i.label === LabelType.portrait) ?? this.entity.images[0];

  constructor(entity: NPCEntity, fact: NPCFact, service: NpcFactService) {
    super(entity, fact, service);
  }

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

  reset() {
    const hp = this.entity.race.hitDice.roll();
    this.fact.setHp(hp, hp);
  }

  adjustHp(diff: number) {
    this.fact.setHp((this.hp() ?? 0) + diff);
  }
}
