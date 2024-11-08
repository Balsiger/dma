import { signal } from '@angular/core';
import { Utils } from '../../../common/utils';
import { EntitiesService } from '../../services/entity/entities.service';
import { EncounterService } from '../../services/fact/encounter.service';
import { FactService } from '../../services/fact/fact.service';
import { EncounterEntity } from '../entities/encounter-entity';
import { Item } from '../entities/item';
import { Monster } from '../entities/monster';
import { CampaignNPC, NPC } from '../entities/npc';
import { Spell } from '../entities/spell';
import { Link } from '../values/link';
import { MiniatureSelection } from '../values/miniature-selection';
import { Adventure } from './adventure';
import { Fact } from './fact';
import { ModifiedEntity, Data as ModifiedEntityData } from './factoids/modified-entity';

export interface Data {
  id?: string;
  name?: string; // Originally, this was encoded in the id of the entity stored.
  locations?: string[];
  npcs?: string[];
  monsters?: ModifiedEntityData[];
  spells?: string[];
  items?: ModifiedEntityData[];
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
  monsters = signal<ModifiedEntity<Monster>[]>([]);
  items = signal<ModifiedEntity<Item>[]>([]);
  npcs = signal<NPCData[]>([]);
  miniatures = signal<Map<string, MiniatureSelection[]>>(new Map());
  imageSources = signal<Link[]>([]);
  soundSources = signal<string[]>([]);
  notes = signal<string[]>([]);
  map = signal('');
  started = signal(false);
  finished = signal(false);
  entity = signal<EncounterEntity | undefined>(undefined);

  constructor(
    readonly encounterService: EncounterService,
    private readonly entitiesService: EntitiesService,
    readonly adventure: Adventure,
    data: Data,
  ) {
    super(encounterService);

    // Cannot update signals in the same cycle as they are created :-(.
    Utils.delayed(() => {
      this.update(data);
    });
  }

  override async update(data: Data) {
    this.id.set(data.id || '');
    this.name.set(data.name || '');
    this.locations.set(data.locations || []);
    this.spells.set((data.spells || []).map((s) => this.entitiesService.spells.get(s)));
    this.miniatures.set(MiniatureSelection.parseMiniatures(data.miniatures || ''));
    this.imageSources.set((data.images || []).map((i) => Link.parse(i)));
    this.soundSources.set(data.sounds || []);
    this.notes.set(data.notes || []);
    this.map.set(data.map || '');
    this.started.set(data.started || false);
    this.finished.set(data.finished || false);
  }

  isStarted(): boolean {
    return this.started();
  }

  isFinished(): boolean {
    return this.finished();
  }

  override buildDocumentId(): string {
    return this.entity()?.name || '(no id)';
  }

  async start() {
    this.started.set(true);
    this.finished.set(false);
    this.save();
    this.adventure.campaign.addNoteToCurrentJournal(`Started encounter ${this.id()} - ${this.name()}.`);
  }

  async finish() {
    this.finished.set(true);
    this.started.set(false);
    this.save();
    this.adventure.campaign.addNoteToCurrentJournal(`Finished encounter ${this.id()} - ${this.name()}.`);
  }

  setMiniatures(miniatures: string) {
    this.miniatures.set(MiniatureSelection.parseMiniatures(miniatures));
  }

  private async updateEntity(entity: EncounterEntity) {
    this.entity.set(entity);

    const npcs = [];
    for (const npc of this.entity()?.npcs || []) {
      npcs.push({
        npc: npc,
        campaignNPC: await this.adventure.campaign.getNPC(npc.name),
      });
    }
    this.npcs.set(npcs);
  }

  toData(): Data {
    return {
      id: this.id(),
      name: this.name(),
      locations: this.locations(),
      npcs: this.npcs().map((n) => n.npc.name),
      monsters: this.monsters().map((m) => m.toData()),
      spells: this.spells().map((s) => s.name),
      items: this.items().map((i) => i.toData()),
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
    entitiesService: EntitiesService,
    encounterService: FactService<Data, Encounter, EncounterService>,
    id: string,
    data: Data,
  ): Encounter {
    data.id = id;
    return new Encounter(encounterService, entitiesService, adventure, data);
  }

  static forEntitites(encounterService: EncounterService, entities: EncounterEntity[]): Encounter[] {
    return entities.map((e) => Encounter.forEntity(encounterService, e));
  }

  static forEntity(encounterService: EncounterService, entity: EncounterEntity) {
    const encounter = encounterService.get(entity.name);
    encounter.updateEntity(entity);
    return encounter;
  }
}
