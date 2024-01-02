import { ItemService } from '../../services/item.service';
import { MonsterService } from '../../services/monster.service';
import { NpcService } from '../../services/npc.service';
import { SpellService } from '../../services/spell.service';
import { Monster } from '../entities/monster';
import { CampaignNPC, NPC } from '../entities/npc';
import { Spell } from '../spell';
import { CollapsibleValue, CountedValue } from '../wrappers';
import { Adventure } from './adventure';
import { Item } from './item';

export const VALIDATE = /^(?:(\d+)\s*x)?\s*(.+?)\s*$/;

export interface CountedData {
  count: number;
  name: string;
}

export interface Data {
  id: string;
  name: string; // Originally, this was encoded in the id of the entity stored.
  locations: string[];
  npcs: string[];
  monsters: CountedData[];
  spells: string[];
  items: CountedData[];
  miniatures: string;
  images: string[];
  sounds: string[];
  notes: string[];
  map: string;
  started: boolean;
  finished: boolean;
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

const PATTERN_MINIATURE_LINE = /\s*(.*?)\s*:\s*(\d+)\s*x\s*(.*)\s*\((.*?)\)/;
const PATTERN_NAME = /^\s*(.*?)\s*(?:\[(.*)\])?\s*(?:\((.*)\))?$/;

export interface MiniatureSelection {
  monster: string;
  count: number;
  miniature: string;
  location: string;
}

export class Encounter {
  spells: CollapsibleValue<Spell>[] = [];
  monsters: CountedValue<CollapsibleValue<Monster>>[] = [];
  items: CountedValue<CollapsibleValue<Item>>[] = [];
  npcs: CollapsibleValue<[NPC, CampaignNPC]>[] = [];
  miniatures: Map<string, MiniatureSelection[]>;
  imageSources: string[];

  constructor(
    private readonly spellService: SpellService,
    private readonly monsterService: MonsterService,
    private readonly itemService: ItemService,
    private readonly npcService: NpcService,
    readonly adventure: Adventure,
    readonly name: string,
    readonly id: string,
    readonly locations: string[],
    readonly npcNames: string[],
    readonly monsterNames: Counted[],
    readonly spellNames: string[],
    readonly itemNames: Counted[],
    readonly miniaturesData: string,
    readonly images: string[],
    readonly sounds: string[],
    readonly notes: string[],
    readonly map: string,
    readonly started: boolean,
    readonly finished: boolean
  ) {
    this.load();

    this.miniatures = Encounter.parseMiniatures(miniaturesData);
    this.imageSources = images.map((m) => this.resolveImageSource(m));
  }

  private resolveImageSource(source: string): string {
    if (source.startsWith('http')) {
      return source;
    }

    // Assume everything which is not a url is a drive link.
    return 'https://lh3.googleusercontent.com/d/' + source;
  }

  generateStorageId(): string {
    return `${this.id} - ${this.name}`;
  }

  private async load() {
    for (const name of this.npcNames) {
      this.npcs.push(
        new CollapsibleValue([await this.npcService.get(name), await this.adventure.campaign.getNPC(name)])
      );
    }

    for (const name of this.monsterNames) {
      this.monsters.push(
        new CountedValue<CollapsibleValue<Monster>>(
          new CollapsibleValue(await Monster.fromString(this.monsterService, name.name)),
          name.count
        )
      );
    }

    for (const name of this.spellNames) {
      this.spells.push(new CollapsibleValue<Spell>(await this.spellService.get(name)));
    }

    for (const name of this.itemNames) {
      this.items.push(
        new CountedValue<CollapsibleValue<Item>>(
          new CollapsibleValue(await Item.fromString(this.itemService, name.name)),
          name.count
        )
      );
    }
  }

  private static splitValues(text: string): Map<string, string> {
    const result = new Map<string, string>();
    if (!text) {
      return result;
    }

    const lines = text.split(/\s*,\s*/);
    for (const line of lines) {
      const parts = line.split(/\s*=\s*/);
      if (parts.length == 2) {
        result.set(parts[0], parts[1]);
      } else {
        console.log('Invalid key value: ', line);
      }
    }

    return result;
  }

  static fromData(
    spellService: SpellService,
    monsterService: MonsterService,
    itemService: ItemService,
    npcService: NpcService,
    adventure: Adventure,
    name: string,
    data: Data
  ): Encounter {
    return new Encounter(
      spellService,
      monsterService,
      itemService,
      npcService,
      adventure,
      data.name || name,
      data.id,
      data.locations || [],
      data.npcs || [],
      data.monsters?.map(Counted.fromData) || [],
      data.spells || [],
      data.items?.map(Counted.fromData) || [],
      data.miniatures || '',
      data.images?.filter((i) => !!i) || [],
      data.sounds?.filter((s) => !!s) || [],
      data.notes || [],
      data.map || '',
      data.started,
      data.finished
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
          console.error('Cannot parse miniature line: ' + part + ' (' + parts + ')');
        }
      }
    }

    return parsed;
  }

  start(): Encounter {
    return new Encounter(
      this.spellService,
      this.monsterService,
      this.itemService,
      this.npcService,
      this.adventure,
      this.name,
      this.id,
      this.locations,
      this.npcNames,
      this.monsterNames,
      this.spellNames,
      this.itemNames,
      this.miniaturesData,
      this.images,
      this.sounds,
      this.notes,
      this.map,
      true,
      false
    );
  }

  finish(): Encounter {
    return new Encounter(
      this.spellService,
      this.monsterService,
      this.itemService,
      this.npcService,
      this.adventure,
      this.name,
      this.id,
      this.locations,
      this.npcNames,
      this.monsterNames,
      this.spellNames,
      this.itemNames,
      this.miniaturesData,
      this.images,
      this.sounds,
      this.notes,
      this.map,
      false,
      true
    );
  }

  withMiniatures(miniatures: string): Encounter {
    return new Encounter(
      this.spellService,
      this.monsterService,
      this.itemService,
      this.npcService,
      this.adventure,
      this.name,
      this.id,
      this.locations,
      this.npcNames,
      this.monsterNames,
      this.spellNames,
      this.itemNames,
      miniatures,
      this.images,
      this.sounds,
      this.notes,
      this.map,
      this.started,
      this.finished
    );
  }

  toData(): Data {
    return {
      id: this.id,
      name: this.name,
      locations: this.locations,
      npcs: this.npcNames,
      monsters: this.monsterNames.map((m) => m.toData()),
      spells: this.spellNames,
      items: this.itemNames.map((i) => i.toData()),
      miniatures: this.miniaturesData,
      images: this.images,
      sounds: this.sounds,
      notes: this.notes,
      map: this.map,
      started: this.started,
      finished: this.finished,
    };
  }
}
