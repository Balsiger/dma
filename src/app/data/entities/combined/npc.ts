import { NpcFactService } from '../../../services/fact/npcFact.service';
import { LabelType } from '../../values/link';
import { Campaign } from '../fluid/campaign';
import { Data, NPCFact } from '../fluid/npc-fact';
import { NPCEntity } from '../immutable/npc-entity';
import { CombinedStaticFluid } from './combined';

export class NPC extends CombinedStaticFluid<NPCEntity, Data, NpcFactService, NPCFact> {
  miniature = this.fluid.miniature.bind(this.fluid);
  state = this.fluid.state.bind(this.fluid);
  hp = this.fluid.hp.bind(this.fluid);
  maxHp = this.fluid.maxHp.bind(this.fluid);

  gender = this.immutable.gender;
  genderSpecial = this.immutable.genderSpecial;
  race = this.immutable.race;
  factions = this.immutable.factions;
  portrait = this.immutable.images.find((i) => i.label === LabelType.portrait) ?? this.immutable.images[0];

  constructor(entity: NPCEntity, fact: NPCFact, service: NpcFactService) {
    super(entity, fact, service);
  }

  withFact(data: Data): NPC {
    return new NPC(
      this.immutable,
      new NPCFact(this.factService, this.fluid.campaign, this.name, data),
      this.factService,
    );
  }

  static fromEntityOnly(entity: NPCEntity): NPC {
    return new NPC(
      entity,
      new NPCFact({} as any as NpcFactService, {} as any as Campaign, entity.name, {}),
      {} as any as NpcFactService,
    );
  }

  reset() {
    const hp = this.immutable.race.hitDice.roll();
    this.fluid.setHp(hp, hp);
  }

  adjustHp(diff: number) {
    this.fluid.setHp((this.hp() ?? 0) + diff);
  }
}
