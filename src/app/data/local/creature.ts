import { CreatureType } from '../../ui/campaign/encounter/encounter-monster-canvas.component';
import { NPC } from '../combined/npc';
import { Monster } from '../entities/monster';
import { Parametrized } from '../entities/parametrized';
import { Character } from '../facts/character';
import { NPCState } from '../facts/npc-fact';
import { LabelType, Link } from '../values/link';
import { Data as BaseData, Local } from './local';

const PREFIX = 'creature';

interface Data extends BaseData {
  state?: NPCState;
  hp?: number;
  maxHp?: number;
  x?: number;
  y?: number;
}

export class Creature extends Local<Creature, Data> {
  private internalX = 0;
  get x(): number {
    return this.internalX;
  }

  private internalY = 0;
  get y(): number {
    return this.internalY;
  }

  internalHpState = this.determineHpState();
  get hpState(): string {
    return this.internalHpState;
  }

  internalHpFill = this.determineHpFill();
  get hpFill(): string {
    return this.internalHpFill;
  }

  private internalState: NPCState = NPCState.unknown;
  get state(): NPCState {
    return this.internalState;
  }

  private internalHp: number | undefined;
  get hp(): number | undefined {
    return this.internalHp;
  }

  private internalMaxHp: number | undefined;
  get maxHp(): number | undefined {
    return this.internalMaxHp;
  }

  constructor(
    readonly image: string,
    readonly type: CreatureType,
    data: Data,
  ) {
    super(type, data.context, data.name, data.number);

    this.update(data);
    this.restore();
  }

  protected toData(): Data {
    return {
      ...this.toBaseData(),
      state: this.state,
      x: this.x,
      y: this.y,
      hp: this.hp,
      maxHp: this.maxHp,
    };
  }

  update(data: Data) {
    this.internalState = data.state ?? NPCState.unknown;
    if (this.name === data.name) {
      if (this.type === CreatureType.monster) {
        this.internalState = data.state ?? NPCState.unknown;
        this.internalMaxHp = data.maxHp;
        this.setHp(data.hp);
      }

      this.internalX = data.x ?? 0;
      this.internalY = data.y ?? 0;
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
    this.setHp((this.hp ?? 0) + diff);
    this.store();
  }

  setHp(hp?: number) {
    this.internalHp = hp;
    if (this.hp) {
      this.internalState = this.hp <= 0 ? NPCState.dead : NPCState.alive;
      this.internalHpState = this.determineHpState();
      this.internalHpFill = this.determineHpFill();
    }
  }

  private determineHpState(): string {
    if (!this.hp || !this.maxHp) {
      return '';
    }

    if (this.hp / this.maxHp > 0.5) {
      return 'well';
    }

    if (this.hp / this.maxHp > 0.25) {
      return 'bloodied';
    }

    return 'critical';
  }

  private determineHpFill(): string {
    if (!this.hp || !this.maxHp) {
      return '100%';
    }

    return `${(100 * this.hp) / this.maxHp}%`;
  }

  static fromNPC(context: string, npc: NPC): Creature {
    return Creature.fromData(Creature.portraitImage(npc.images), CreatureType.npc, {
      prefix: CreatureType.npc,
      context,
      name: npc.name,
      number: 0,
      state: npc.state(),
      hp: npc.hp(),
      maxHp: npc.maxHp(),
    });
  }

  static fromParametrizedMonster(context: string, monster: Parametrized<Monster>): Creature[] {
    const creatures: Creature[] = [];
    for (let i = 0; i < monster.count; i++) {
      creatures.push(Creature.fromMonster(context, i + 1, monster.entity));
    }
    return creatures;
  }

  static fromMonster(context: string, number: number, monster: Monster): Creature {
    const hp = monster.hitDice.roll();
    return Creature.fromData(Creature.portraitImage(monster.images), CreatureType.monster, {
      prefix: CreatureType.monster,
      context,
      name: monster.name,
      number,
      state: NPCState.alive,
      hp,
      maxHp: hp,
    });
  }

  static fromCharacter(context: string, character: Character): Creature {
    return Creature.fromData(character.profile().url, CreatureType.character, {
      prefix: CreatureType.character,
      context,
      name: character.name(),
      number: 0,
      state: NPCState.alive,
    });
  }

  private static fromData(image: string, type: CreatureType, data: Data): Creature {
    return new Creature(image, type, data);
  }

  private static portraitImage(images: Link[]): string {
    return images.find((i) => i.label === LabelType.portrait)?.url ?? images[0]?.url ?? '';
  }
}
