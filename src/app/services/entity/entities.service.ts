import { Injectable } from '@angular/core';
import { BattleMap } from '../../data/entities/battle-map';
import { EncounterEntity } from '../../data/entities/encounter-entity';
import { Entities } from '../../data/entities/entities';
import { Item } from '../../data/entities/item';
import { Miniature } from '../../data/entities/miniature';
import { Monster } from '../../data/entities/monster';
import { NPC } from '../../data/entities/npc';
import { Product } from '../../data/entities/product';
import { Spell } from '../../data/entities/spell';
import { Token } from '../../data/entities/token';
import { Trap } from '../../data/entities/trap';
import { Condition } from '../../data/facts/condition';
import { EntityStorage } from '../../data/facts/entity-storage';
import { Glossary } from '../../data/facts/glossary';
import { Autocomplete } from '../../proto/metadata';

export type EntityTypes =
  | Monster
  | NPC
  | Condition
  | Glossary
  | Item
  | Spell
  | Product
  | Trap
  | BattleMap
  | Token
  | Miniature
  | EncounterEntity;

export interface Asset {
  name: string;
  file: string;
}

export const ASSETS: Asset[] = [
  { name: "Player's Handbook", file: "/assets/data/products/Player's Handbook.pb" },
  { name: "Player's Handbook (2024)", file: "/assets/data/products/Player's Handbook (2024).pb" },
  { name: "Dungeon Master's Guide", file: "/assets/data/products/Dungeon Master's Guide.pb" },
  { name: "Dungeon Master's Guide (2024)", file: "/assets/data/products/Dungeon Master's Guide (2024).pb" },
  { name: 'Monster Manual', file: '/assets/data/products/Monster Manual.pb' },
  { name: 'Monster Manual (2024)', file: '/assets/data/products/Monster Manual (2024).pb' },
  { name: "Volo's Guide to Monsters", file: "/assets/data/products/Volo's Guide to Monsters.pb" },
  { name: 'Dragon Heist', file: '/assets/data/products/Dragon Heist.pb' },
  { name: 'Dungeon of the Mad Mage', file: '/assets/data/products/Dungeon of the Mad Mage.pb' },
  { name: 'Monsters of the Multiverse', file: '/assets/data/products/Monsters of the Multiverse.pb' },
  { name: "Xanathar's Guide to Everything", file: "/assets/data/products/Xanathar's Guide to Everything.pb" },
  { name: 'Blue Alley', file: '/assets/data/products/Blue Alley.pb' },
  {
    name: "VeX's Complete Expanded Dungeon of the Mad Mage",
    file: "/assets/data/products/VeX's Complete Expanded Dungeon of the Mad Mage.pb",
  },
  { name: 'Skullport - Shadow of Waterdeep', file: '/assets/data/products/Skullport - Shadow of Waterdeep.pb' },
  { name: 'Dungeon Master Assistant', file: '/assets/data/products/Dungeon Master Assistant.pb' },
];

@Injectable({
  providedIn: 'root',
})
export class EntitiesService {
  // TODO(Merlin): This needs to be keyed by settings in the user (if we want to be able to reduce memory usage
  // and loading times).
  private readonly entities = new EntityStorage(ASSETS.map((a) => a.file));
  readonly monsters = this.entities.monsters;
  readonly npcs = this.entities.npcs;
  readonly conditions = this.entities.conditions;
  readonly glossary = this.entities.glossary;
  readonly items = this.entities.items;
  readonly spells = this.entities.spells;
  readonly encounters = this.entities.encounters;
  readonly traps = this.entities.traps;
  readonly products = this.entities.products;
  readonly gods = this.entities.gods;
  readonly places = this.entities.places;
  readonly events = this.entities.events;
  readonly groups = this.entities.groups;
  readonly maps = this.entities.maps;
  readonly tokens = this.entities.tokens;
  readonly miniatures = this.entities.miniatures;
  readonly adventures = this.entities.adventures;

  private termsByCommand = new Map<string, string>();
  private terms: string[] = [];

  async ensureLoaded() {
    await this.entities.load();

    if (this.terms.length == 0) {
      // Last term collected wins.
      this.collectTerms(this.spells.getAllNames(), 'Spell');
      this.collectTerms(this.monsters.getAllNames(), 'Monster');
      this.collectTerms(this.traps.getAllNames(), 'Trap');
      this.collectTerms(this.npcs.getAllNames(), 'NPC');
      this.collectTerms(this.items.getAllNames(), 'Item');
      this.collectTerms(this.gods.getAllNames(), 'God');
      this.collectTerms(this.places.getAllNames(), 'Place');
      this.collectTerms(this.events.getAllNames(), 'Event');
      this.collectTerms(this.groups.getAllNames(), 'Group');
      this.collectTerms(this.glossary.getAllNames(), 'Glossary');
    }
  }

  async getByType(type: string): Promise<Entities<EntityTypes>> {
    await this.ensureLoaded();

    switch (type) {
      case 'God':
      case 'GodProto':
        return this.gods;

      case 'Place':
      case 'PlaceProto':
        return this.places;

      case 'Event':
      case 'EventProto':
        return this.events;

      case 'Group':
      case 'GroupProto':
        return this.groups;

      case 'Adventure':
      case 'AdventureProto':
        return this.adventures;

      case 'Monster':
      case 'MonsterProto':
        return this.monsters;

      case 'Npc':
      case 'NpcProto':
        return this.npcs;

      case 'Condition':
      case 'ConditionProto':
        return this.conditions;

      case 'Glossary':
      case 'GlossaryProto':
        return this.glossary;

      case 'Item':
      case 'ItemProto':
        return this.items;

      case 'Spell':
      case 'SpellProto':
        return this.spells;

      case 'Encounter':
      case 'EncounterProto':
        return this.encounters;

      case 'Product':
      case 'ProductProto':
        return this.products;

      case 'Trap':
      case 'TrapProto':
        return this.traps;

      case 'Map':
      case 'MapProto':
        return this.maps;

      case 'Token':
      case 'TokenProto':
        return this.tokens;

      case 'Miniature':
      case 'MiniatureProto':
      case 'ProductContent':
      case 'ProductContentProto':
        return this.miniatures;

      default:
        throw new Error(`Unknown type '${type}' to get entities for.`);
    }
  }

  async computeAutocompleteOptions(
    autocomplete: Autocomplete | undefined,
    lookup: ((e: any) => string[]) | undefined,
    type: string,
    value: string,
  ): Promise<string[]> {
    if (type) {
      switch (autocomplete) {
        case Autocomplete.entity:
          return EntitiesService.dedupe((await this.getByType(type)).getAll().map((e) => e.name));

        case Autocomplete.previous:
          return EntitiesService.dedupe(
            (await this.getByType(type)).getAll().flatMap((e) => e.computeAutocompleteOptions(value)),
          );

        case Autocomplete.lookup:
          if (lookup) {
            return EntitiesService.dedupe((await this.getByType(type)).getAll().flatMap((e) => lookup(e)));
          } else {
            console.warn('No lookup function found for', type, value);
            return [];
          }

        default:
          return [];
      }
    } else {
      return [];
    }
  }

  static dedupe(values: string[]): string[] {
    const deduped = new Set(values);
    return [...deduped.values()].toSorted();
  }

  linkify(text: string): string {
    for (const term of this.terms) {
      const regexp = new RegExp(`(^|[\\s(])${term}($|[\\s\\!\\.,;\\')])`, 'g');
      text = text.replaceAll(regexp, '$1\\' + this.termsByCommand.get(term) + '{' + term + '}$2');
    }

    return text;
  }

  private collectTerms(texts: string[], command: string) {
    for (const term of texts) {
      if (term) {
        this.termsByCommand.set(term, command);
      }
    }

    this.terms = Array.from(this.termsByCommand.keys()).sort((a, b) => b.length - a.length);
  }
}
