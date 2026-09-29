import { computed } from '@angular/core';
import { LabelType, Link } from '../../values/link';
import {
  Creature as CreatureInterface,
  Type as CreatureType,
  computeHpFill,
  computeHpState,
} from '../combined/creature';
import { NPC } from '../combined/npc';
import { FluidCharacter } from '../fluid/character';
import { NPCState } from '../fluid/npc';
import { Monster } from '../immutable/monster';
import { Parametrized } from '../immutable/parametrized';
import { LocalData as BaseData, Local } from './local';

interface Data extends BaseData {
  state?: NPCState;
  hp?: number;
  maxHp?: number;
  initiativeModifier: number;
  x?: number;
  y?: number;
}

export class Creature extends Local<Creature, Data> implements CreatureInterface {
  private internalX = 0;
  x = computed(() => this.internalX);
  //get x(): number {
  //  return this.internalX;
  //}

  private internalY = 0;
  y = computed(() => this.internalY);
  //get y(): number {
  //  return this.internalY;
  //}

  hpState = computed(() => computeHpState(this.hp(), this.maxHp()));
  hpFill = computed(() => computeHpFill(this.hp(), this.maxHp()));

  private internalState: NPCState = NPCState.unknown;
  state = computed(() => this.internalState);

  private internalHp: number | undefined;
  hp = computed(() => this.internalHp);

  private internalMaxHp: number | undefined;
  maxHp = computed(() => this.internalMaxHp);

  private internalInitiativeModifier: number = 0;
  initiativeModifier = computed(() => this.internalInitiativeModifier);

  constructor(
    readonly portrait: string,
    readonly type: CreatureType,
    data: Data,
  ) {
    super(type, data.context, data.name, data.id);

    this.localUpdate(data);
    this.restore();
  }

  protected toLocalData(): Data {
    return {
      ...this.toBaseData(),
      state: this.state(),
      initiativeModifier: this.initiativeModifier(),
      x: this.x(),
      y: this.y(),
      hp: this.hp(),
      maxHp: this.maxHp(),
    };
  }

  localUpdate(data: Data) {
    this.internalState = data.state ?? NPCState.unknown;
    if (this.name === data.name) {
      if (this.type === CreatureType.monster || this.type === CreatureType.npc) {
        this.internalState = data.state ?? NPCState.unknown;
        this.internalMaxHp = data.maxHp;
        this.setHp(data.hp);
      }

      this.internalX = data.x ?? 0;
      this.internalY = data.y ?? 0;
      this.internalInitiativeModifier = data.initiativeModifier;
    } else {
      console.warn('Cannot update creature with a different name', this.name);
    }
  }

  setPosition(x: number, y: number) {
    this.internalX = x;
    this.internalY = y;
    this.store();
  }

  clearPosition() {
    this.setPosition(0, 0);
    this.store();
  }

  updateHp(diff: number) {
    this.setHp((this.hp() ?? 0) + diff);
    this.store();
  }

  setHp(hp?: number) {
    this.internalHp = hp;
    const oldHp = this.hp();
    if (oldHp !== undefined) {
      this.internalState = oldHp <= 0 ? NPCState.dead : NPCState.alive;
    }
  }

  static fromNPC(context: string, npc: NPC): CreatureInterface {
    return npc;
  }

  static fromParametrizedMonster(context: string, monster: Parametrized<Monster>): CreatureInterface[] {
    const creatures: CreatureInterface[] = [];
    for (let i = 0; i < monster.count; i++) {
      creatures.push(Creature.fromMonster(context, `${i + 1}`, monster.entity));
    }
    return creatures;
  }

  static fromMonster(context: string, id: string, monster: Monster): CreatureInterface {
    const hp = monster.hitDice.roll();
    return Creature.fromData(Creature.portraitImage(monster.images), CreatureType.monster, {
      prefix: CreatureType.monster,
      context,
      name: monster.name,
      id,
      state: NPCState.alive,
      hp,
      maxHp: hp,
      initiativeModifier: monster.abilities.dexterity.modifier,
    });
  }

  static fromCharacter(context: string, character: FluidCharacter): CreatureInterface {
    return Creature.fromData(character.profile().url, CreatureType.character, {
      prefix: CreatureType.character,
      context,
      name: character.name(),
      id: '',
      state: NPCState.alive,
      initiativeModifier: 0,
    });
  }

  private static fromData(image: string, type: CreatureType, data: Data): Creature {
    return new Creature(image, type, data);
  }

  private static portraitImage(images: Link[]): string {
    return images.find((i) => i.label === LabelType.portrait)?.url ?? images[0]?.url ?? '';
  }
}
