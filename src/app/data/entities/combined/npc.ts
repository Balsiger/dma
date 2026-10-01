import { computed } from '@angular/core';
import { NpcFluidService } from '../../../services/fluid/npc-fluid.service';
import { LabelType } from '../../values/link';
import { Campaign } from '../fluid/campaign';
import { FluidNPCData as FluidData, FluidNPC } from '../fluid/npc';
import { NPCEntity } from '../immutable/npc-entity';
import { LocalNPC, NPCData as LocalNPCData } from './../local/npc';
import { Combined } from './combined';
import { computeHpFill, computeHpState, Creature, Type as CreatureType } from './creature';

export class NPC
  extends Combined<NPCEntity, FluidNPC, FluidData, NpcFluidService, LocalNPCData, LocalNPC>
  implements Creature
{
  // Immutable.
  gender = this.immutable.gender;
  genderSpecial = this.immutable.genderSpecial;
  race = this.immutable.race;
  factions = this.immutable.factions;
  portrait = this.immutable.firstImage(LabelType.portrait);

  // Fluid.
  miniature = this.fluid.miniature.bind(this.fluid);
  state = this.fluid.state.bind(this.fluid);
  hp = this.fluid.hp.bind(this.fluid);
  maxHp = this.fluid.maxHp.bind(this.fluid);
  updateHp = this.adjustHp;
  setHp = this.fluid.setHp.bind(this.fluid);

  // Local.
  x = this.local.x;
  y = this.local.y;
  hpState = computed(() => computeHpState(this.hp(), this.maxHp()));
  hpFill = computed(() => computeHpFill(this.hp(), this.maxHp()));

  // Creature.
  initiativeModifier = computed(() => this.race.abilities.dexterity.modifier);
  id = '';
  uniqueName = this.name;
  type = CreatureType.npc;
  store = this.local.store.bind(this.local);
  setPosition = this.local.setPosition.bind(this.local);
  clearPosition = this.local.clearPosition.bind(this.local);

  constructor(entity: NPCEntity, fluid: FluidNPC, service: NpcFluidService, local: LocalNPC) {
    super(entity, fluid, service, local);
  }

  withFluid(data: FluidData): NPC {
    return new NPC(
      this.immutable,
      new FluidNPC(this.fluidService, this.fluid.campaign, this.name, data),
      this.fluidService,
      this.local,
    );
  }

  reset() {
    const hp = this.immutable.race.hitDice.roll();
    this.fluid.setHp(hp, hp);
  }

  adjustHp(diff: number) {
    this.fluid.setHp((this.hp() ?? 0) + diff);
  }

  static fromImmutableOnly(entity: NPCEntity): NPC {
    return new NPC(
      entity,
      new FluidNPC({} as any as NpcFluidService, {} as any as Campaign, entity.name, {}),
      {} as any as NpcFluidService,
      new LocalNPC(entity.name, 'entity-only'),
    );
  }
}
