import { signal } from '@angular/core';
import { EntityServices } from '../../services/entity/entity_services';
import { ItemService } from '../../services/entity/item.service';
import { MonsterService } from '../../services/entity/monster.service';
import { NpcService } from '../../services/entity/npc.service';
import { SpellService } from '../../services/entity/spell.service';
import { EncounterService } from '../../services/fact/encounter.service';
import { FactService } from '../../services/fact/fact.service';
import { Link } from '../../ui/common/link/link';
import { Item } from '../entities/item';
import { Monster } from '../entities/monster';
import { CampaignNPC, NPC } from '../entities/npc';
import { Spell } from '../entities/spell';
import { CountedValue } from '../wrappers';
import { Adventure } from './adventure';
import { Counted, Data as CountedData } from './counted';
import { Fact } from './fact';

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

const PATTERN_MINIATURE_LINE = /\s*(.*?)\s*:\s*(\d+)\s*x\s*(.*)\s*\((.*?)\)/;
const PATTERN_NAME = /^\s*(.*?)\s*(?:\[(.*)\])?\s*(?:\((.*)\))?$/;

export interface MiniatureSelection {
  monster: string;
  count: number;
  miniature: string;
  location: string;
}

export interface EditData {
  adventure: Adventure;
  encounter?: Encounter;
  service?: EncounterService;
}

export class Encounter extends Fact<Data, EncounterService> {
  nameS = signal<string>('');

  spells = signal<Spell[]>([]);
  monsters: CountedValue<Monster>[] = [];
  items: CountedValue<Item>[] = [];
  npcs: [NPC, CampaignNPC][] = [];
  miniatures: Map<string, MiniatureSelection[]>;
  imageSources: Link[];
  soundSources: string[];

  constructor(
    readonly encounterService: EncounterService,
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
    private started: boolean,
    private finished: boolean,
    data: Data,
  ) {
    super(encounterService);
    this.update(data);

    this.load();

    this.miniatures = Encounter.parseMiniatures(miniaturesData);
    this.imageSources = images.map((i) => Link.parse(i));
    this.soundSources = sounds;
  }

  protected override async doLoad() {
    for (const name of this.npcNames) {
      this.npcs.push([await this.npcService.get(name), await this.adventure.campaign.getNPC(name)]);
    }

    for (const name of this.monsterNames) {
      this.monsters.push(
        new CountedValue<Monster>(await Monster.fromString(this.monsterService, name.name), name.count),
      );
    }

    for (const name of this.spellNames) {
      //this.spells.push(await this.spellService.get(name));
    }

    for (const name of this.itemNames) {
      this.items.push(new CountedValue<Item>(await Item.fromString(this.itemService, name.name), name.count));
    }
  }

  override async update(data: Data) {
    if (data.spells) {
      this.spells.set(await Promise.all(data.spells.map((s) => this.spellService.get(s))));
    }
  }

  isStarted(): boolean {
    return this.started;
  }

  isFinished(): boolean {
    return this.finished;
  }

  generateStorageId(): string {
    return `${this.id} - ${this.name}`;
  }

  override buildDocumentId(): string {
    return `${this.id} - ${this.name}`;
  }

  static LfromData(
    adventure: Adventure,
    entityServices: EntityServices,
    encounterService: FactService<Data, Encounter, EncounterService>,
    name: string,
    data: Data,
  ): Encounter {
    return Encounter.fromData(
      encounterService,
      entityServices.spellService,
      entityServices.monsterService,
      entityServices.itemService,
      entityServices.npcService,
      adventure,
      name,
      data,
    );
  }

  static fromData(
    encounterService: EncounterService,
    spellService: SpellService,
    monsterService: MonsterService,
    itemService: ItemService,
    npcService: NpcService,
    adventure: Adventure,
    name: string,
    data: Data,
  ): Encounter {
    return new Encounter(
      encounterService,
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
      data.finished,
      data,
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

  async start() {
    this.started = true;
    this.finished = false;

    await this.encounterService.save(this);
  }

  async finish() {
    this.finished = true;
    this.started = false;
    this.save();
  }

  withMiniatures(miniatures: string): Encounter {
    const data = this.toData();
    data.miniatures = miniatures;

    return new Encounter(
      this.encounterService,
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
      this.finished,
      data,
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

  protected async save() {
    await this.encounterService.save(this);
  }
}
