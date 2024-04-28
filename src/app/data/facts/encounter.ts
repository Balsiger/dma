import { signal } from '@angular/core';
import { EntityServices } from '../../services/entity/entity_services';
import { EncounterService } from '../../services/fact/encounter.service';
import { FactService } from '../../services/fact/fact.service';
import { Link } from '../../ui/common/link/link';
import { Item } from '../entities/item';
import { Monster } from '../entities/monster';
import { CampaignNPC, NPC } from '../entities/npc';
import { Spell } from '../entities/spell';
import { MiniatureSelection } from '../values/miniature-selection';
import { CountedValue } from '../wrappers';
import { Adventure } from './adventure';
import { Fact } from './fact';
import { Data as CountedData } from './factoids/counted';

export interface Data {
  id?: string;
  name?: string; // Originally, this was encoded in the id of the entity stored.
  locations?: string[];
  npcs?: string[];
  monsters?: CountedData[];
  spells?: string[];
  items?: CountedData[];
  miniatures?: string;
  images?: string[];
  sounds?: string[];
  notes?: string[];
  map?: string;
  started?: boolean;
  finished?: boolean;
}

export interface EditData {
  adventure: Adventure;
  encounter?: Encounter;
  service?: EncounterService;
}

interface NPCData {
  npc: NPC;
  campaignNPC: CampaignNPC;
}

export class Encounter extends Fact<Data, EncounterService> {
  id = signal('');
  name = signal('');
  spells = signal<Spell[]>([]);
  locations = signal<string[]>([]);
  monsters = signal<CountedValue<Monster>[]>([]);
  items = signal<CountedValue<Item>[]>([]);
  npcs = signal<NPCData[]>([]);
  miniatures = signal<Map<string, MiniatureSelection[]>>(new Map());
  imageSources = signal<Link[]>([]);
  soundSources = signal<string[]>([]);
  notes = signal<string[]>([]);
  map = signal('');
  started = signal(false);
  finished = signal(false);

  constructor(
    readonly encounterService: EncounterService,
    private readonly entityServices: EntityServices,
    readonly adventure: Adventure,
    data: Data,
  ) {
    super(encounterService);

    this.update(data);
  }

  override async update(data: Data) {
    this.id.set(data.id || '');
    this.name.set(data.name || '');
    this.locations.set(data.locations || []);
    this.spells.set(await Promise.all((data.spells || []).map((s) => this.entityServices.spellService.get(s))));
    this.miniatures.set(MiniatureSelection.parseMiniatures(data.miniatures || ''));
    this.imageSources.set((data.images || []).map((i) => Link.parse(i)));
    this.soundSources.set(data.sounds || []);
    this.notes.set(data.notes || []);
    this.map.set(data.map || '');
    this.started.set(data.started || false);
    this.finished.set(data.finished || false);

    const monsters = [];
    for (const name of data.monsters || []) {
      monsters.push(
        new CountedValue<Monster>(await Monster.fromString(this.entityServices.monsterService, name.name), name.count),
      );
    }
    this.monsters.set(monsters);

    const items = [];
    for (const name of data.items || []) {
      items.push(new CountedValue<Item>(await Item.fromString(this.entityServices.itemService, name.name), name.count));
    }
    this.items.set(items);

    const npcs = [];
    for (const name of data.npcs || []) {
      npcs.push({
        npc: await this.entityServices.npcService.get(name),
        campaignNPC: await this.adventure.campaign.getNPC(name),
      });
    }
    this.npcs.set(npcs);
  }

  isStarted(): boolean {
    return this.started();
  }

  isFinished(): boolean {
    return this.finished();
  }

  override buildDocumentId(): string {
    return `${this.id()} - ${this.name()}`;
  }

  async start() {
    this.started.set(true);
    this.finished.set(false);
    this.save();
  }

  async finish() {
    this.finished.set(true);
    this.started.set(false);
    this.save();
  }

  withMiniatures(miniatures: string): Encounter {
    const data = this.toData();
    data.miniatures = miniatures;

    return new Encounter(this.encounterService, this.entityServices, this.adventure, data);
  }

  toData(): Data {
    return {
      id: this.id(),
      name: this.name(),
      locations: this.locations(),
      npcs: this.npcs().map((n) => n.npc.name),
      monsters: this.monsters().map((m) => ({ count: m.count, name: m.value.name })),
      spells: this.spells().map((s) => s.name),
      items: this.items().map((i) => ({ count: i.count, name: i.value.name })),
      miniatures: Array.from(this.miniatures().values())
        .flatMap((a) => a.map((m) => `${m.monster}:${m.count}x ${m.miniature} (${m.location})`))
        .join(';'),
      images: this.imageSources().map((i) => i.toSimpleString()),
      sounds: this.soundSources(),
      notes: this.notes(),
      map: this.map(),
      started: this.started(),
      finished: this.finished(),
    };
  }

  static fromData(
    adventure: Adventure,
    entityServices: EntityServices,
    encounterService: FactService<Data, Encounter, EncounterService>,
    _id: string,
    data: Data,
  ): Encounter {
    return new Encounter(encounterService, entityServices, adventure, data);
  }
}
