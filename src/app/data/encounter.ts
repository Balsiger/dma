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
  miniatures: string;
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

const PATTERN_MINIATURE_LINE = /\s*(.*?)\s*:\s*(\d+)\s*x\s*(.*?)\s*\((.*?)\)/;

export interface MiniatureSelection {
  monster: string;
  count: number;
  miniature: string;
  location: string;
}

export class Encounter {
  spells: Spell[] = [];
  monsters: [number, Monster][] = [];
  items: [number, Item][] = [];
  miniatures: Map<string, MiniatureSelection[]>;

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
    readonly itemNames: Counted[],
    readonly miniaturesData: string
  ) {
    this.load();

    this.miniatures = Encounter.parseMiniatures(miniaturesData);
  }

  private async load() {
    for (const name of this.monsterNames) {
      this.monsters.push([name.count, (await this.monsterService.get(name.name)) || Monster.create(name.name)]);
    }

    for (const name of this.spellNames) {
      this.spells.push((await this.spellService.getSpell(name)) || Spell.create(name));
    }

    for (const name of this.itemNames) {
      this.items.push([name.count, await this.itemService.get(name.name)]);
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
      data.items?.map(Counted.fromData) || [],
      data.miniatures || ''
    );
  }

  static parseMiniatures(miniatures: string): Map<string, MiniatureSelection[]> {
    const parts = miniatures.split(/\s*;\s*/);
    const parsed = new Map<string, MiniatureSelection[]>();

    for (const part of parts) {
      if (part) {
        const match = part.match(PATTERN_MINIATURE_LINE);
        if (match) {
          const miniature = {
            monster: match[1],
            count: Number(match[2]) || 0,
            miniature: match[3],
            location: match[4],
          };

          if (parsed.has(match[1])) {
            parsed.get(match[1])?.push(miniature);
          } else {
            parsed.set(match[1], [miniature]);
          }
        } else {
          console.error('Cannot parse miniature line: ' + part);
        }
      }
    }

    return parsed;
  }

  withMiniatures(miniatures: string): Encounter {
    return new Encounter(
      this.spellService,
      this.monsterService,
      this.itemService,
      this.adventure,
      this.name,
      this.id,
      this.locations,
      this.monsterNames,
      this.spellNames,
      this.itemNames,
      miniatures
    );
  }

  toData(): Data {
    return {
      id: this.id,
      locations: this.locations,
      monsters: this.monsterNames.map((m) => m.toData()),
      spells: this.spellNames,
      items: this.itemNames.map((i) => i.toData()),
      miniatures: this.miniaturesData,
    };
  }
}
