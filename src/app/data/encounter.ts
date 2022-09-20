import { ItemService } from '../services/item.service';
import { MonsterService } from '../services/monster.service';
import { SpellService } from '../services/spell.service';
import { Adventure } from './adventure';
import { Item } from './item';
import { Monster } from './monster';
import { Spell } from './spell';

export const VALIDATE = /^(?:(\d+)\s*x)?\s*(.+?)\s*$/;

export interface CountedData {
  count: number;
  name: string;
}

export interface Data {
  id: string;
  locations: string[];
  monsters: CountedData[];
  spells: string[];
  items: CountedData[];
}

export class Counted {
  constructor(readonly name: string, readonly count = 1) {}

  toData(): CountedData {
    return {
      count: this.count,
      name: this.name,
    };
  }

  toString(): string {
    if (this.count) {
      return this.count + 'x ' + this.name;
    }

    return this.name;
  }

  static fromData(data: CountedData): Counted {
    return new Counted(data.name, data.count);
  }

  static fromString(text: string): Counted {
    const match = text.match(VALIDATE);
    if (match) {
      return new Counted(match[2], Number(match[1]) || 1);
    }

    return new Counted(text);
  }
}

export class Encounter {
  spells: Spell[] = [];
  monsters: [number, Monster][] = [];
  items: [number, Item][] = [];

  constructor(
    private readonly spellService: SpellService,
    private readonly monsterService: MonsterService,
    private readonly itemService: ItemService,
    readonly adventure: Adventure,
    readonly name: string,
    readonly id: string,
    readonly locations: string[],
    readonly monsterNames: Counted[],
    readonly spellNames: string[],
    readonly itemNames: Counted[]
  ) {
    this.load();
  }

  private async load() {
    for (const name of this.monsterNames) {
      this.monsters.push([name.count, (await this.monsterService.getMonster(name.name)) || Monster.create(name.name)]);
    }

    for (const name of this.spellNames) {
      this.spells.push((await this.spellService.getSpell(name)) || Spell.create(name));
    }

    for (const name of this.itemNames) {
      this.items.push([name.count, await this.itemService.getItem(name.name)]);
    }
  }

  static fromData(
    spellService: SpellService,
    monsterService: MonsterService,
    itemService: ItemService,
    adventure: Adventure,
    name: string,
    data: Data
  ): Encounter {
    return new Encounter(
      spellService,
      monsterService,
      itemService,
      adventure,
      name,
      data.id,
      data.locations || [],
      data.monsters?.map(Counted.fromData) || [],
      data.spells || [],
      data.items?.map(Counted.fromData) || []
    );
  }

  toData(): Data {
    return {
      id: this.id,
      locations: this.locations,
      monsters: this.monsterNames.map((m) => m.toData()),
      spells: this.spellNames,
      items: this.itemNames.map((i) => i.toData()),
    };
  }
}
