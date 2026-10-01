import { DocumentData } from '@angular/fire/firestore';
import { NO_FLUID_SERVICE, NoFluidService } from '../../../services/fluid/fluid.service';
import { LocalMonsterService } from '../../../services/local/monster.service';
import { LabelType } from '../../values/link';
import { NO_FLUID, NoFluid } from '../fluid/fluid';
import { ImmutableMonster } from '../immutable/monster';
import { Parametrized } from '../immutable/parametrized';
import { LocalMonster, MonsterData } from '../local/monster';
import { Combined } from './combined';
import { Creature, Type as CreatureType } from './creature';

export class Monster
  extends Combined<ImmutableMonster, NoFluid, DocumentData, NoFluidService, MonsterData, LocalMonster>
  implements Creature
{
  // Local.
  x = this.local.x;
  y = this.local.y;
  id = this.local.id;
  hp = this.local.hp;
  maxHp = this.local.maxHp;
  state = this.local.state;
  hpFill = this.local.hpFill;
  hpState = this.local.hpState;
  initiativeModifier = this.local.iniativeModifier;

  reset = this.local.reset.bind(this.local);
  store = this.local.store.bind(this.local);
  setPosition = this.local.setPosition.bind(this.local);
  clearPosition = this.local.clearPosition.bind(this.local);
  setHp = this.local.setHp.bind(this.local);
  updateHp = this.local.updateHp.bind(this.local);

  // Creature.
  portrait = this.immutable.firstImage(LabelType.portrait);
  uniqueName = `${this.name} #${this.id}`;
  type = CreatureType.monster;

  constructor(immutable: ImmutableMonster, local: LocalMonster) {
    super(immutable, NO_FLUID, NO_FLUID_SERVICE, local);
  }

  static fetchParametrized(service: LocalMonsterService, parametrized: Parametrized<ImmutableMonster>): Monster[] {
    const monsters: Monster[] = [];
    for (let i = 1; i <= parametrized.count; i++) {
      const local = service.get(parametrized.entity.name, `${i}`);
      local.maybeInit(parametrized.entity.hitDice.roll(), parametrized.entity.abilities.dexterity.modifier);
      monsters.push(new Monster(parametrized.entity, service.get(parametrized.entity.name, `${i}`)));
    }

    return monsters;
  }
}
