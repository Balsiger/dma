import { computed, signal } from '@angular/core';
import { Utils } from '../../../common/utils';
import { EncounterService } from '../../services/combined/encounter.service';
import { EntitiesService } from '../../services/entity/entities.service';
import { AdventureService } from '../../services/fact/adventure.service';
import { EncounterFactService } from '../../services/fact/encounter.service';
import { Encounter } from '../combined/encounter';
import { AdventureEntity } from '../entities/adventure';
import { EncounterEntity } from '../entities/encounter-entity';
import { Campaign } from './campaign';
import { EncounterFact } from './encounter-fact';
import { Fact } from './fact';

export interface Data {
  encounter?: string;
  image?: string;
  levels?: string;
  products: string[];
}

export class Adventure extends Fact<Data, AdventureService> {
  encounterFactService: EncounterFactService;
  encounterService: EncounterService;

  private currentEncounterId = signal('');
  encounters = signal<Encounter[]>([]);
  encountersById = computed(() => new Map<string, Encounter>(this.encounters().map((e) => [e.id, e])));
  encountersByName = computed(() => new Map<string, Encounter>(this.encounters().map((e) => [e.name, e])));

  currentEncounter = signal<Encounter | undefined>(undefined);
  //currentEncounter = resource({
  //  params: () => ({ id: this.currentEncounterId() }),
  //  loader: async ({ params }) => await this.encounterService.get(params.id),
  //});
  previousEncounter = computed(() => {
    const current = this.currentEncounter();
    return current ? this.encounters()[this.encounters().indexOf(current) - 1] : undefined;
  });
  nextEncounter = computed(() => {
    const current = this.currentEncounter();
    return current ? this.encounters()[this.encounters().indexOf(current) + 1] : this.encounters()[0];
  });

  image = signal('');
  levels = signal('');
  products = signal<string[]>([]);
  entity = signal<AdventureEntity | undefined>(undefined);

  constructor(
    adventureService: AdventureService,
    private readonly entitiesService: EntitiesService,
    readonly campaign: Campaign,
    readonly name: string,
    data: Data,
  ) {
    super(adventureService);
    this.encounterFactService = adventureService.createEncounterFactService(this);
    this.encounterService = adventureService.createEncounterService(this);

    this.update(data);

    Utils.delayed(async () => {
      this.encounters.set(
        this.sortEncounters(
          await this.encounterService.getAll(
            this.entitiesService.encounters
              .getAllByProducts(this.products())
              .filter((e) => !e.common.baseOnly)
              .map((e) => e.name),
          ),
        ),
      );
    });
  }

  override buildDocumentId(): string {
    return this.name;
  }

  getCurrentEncounterId(): string {
    return this.getCurrentEncounterId();
  }

  async addEncounter(encounter: EncounterFact) {}

  async updateEncounter(old: Encounter, changed: Encounter) {
    await this.encounterFactService.update(old.fact, changed.fact);
  }

  async deleteEncounter(encounter: Encounter) {
    await this.encounterFactService.delete(encounter.fact);
  }

  private async updateEntity(entity: AdventureEntity) {
    this.entity.set(entity);

    if (!this.levels()) {
      this.levels.set(entity.levels);
    }

    if (!this.image() && entity.images.length > 0) {
      this.image.set(entity.images[0].url);
    }

    if (!this.products.length) {
      this.products.set(entity.products);
    }
  }

  override update(data: Data) {
    // Since the initial, empty update may happen after the update from firestore, ignore empty updates.
    if (data.encounter || data.image || data.levels) {
      this.updateCurrentEncounter(data.encounter || '');
      this.image.set(data.image || this.image());
      this.levels.set(data.levels || '');

      let products = data.products || [];
      if (!products.includes(this.name)) {
        products = [this.name, ...products];
      }
      this.products.set(products);
    }
  }

  static fromData(
    campaign: Campaign,
    entitiesService: EntitiesService,
    adventureService: AdventureService,
    name: string,
    data: Data,
  ): Adventure {
    return new Adventure(adventureService, entitiesService, campaign, name, data);
  }

  toData(): Data {
    return {
      encounter: this.currentEncounterId(),
      levels: this.levels(),
      image: this.image(),
      products: this.products(),
    };
  }

  setEncounter(encounter: Encounter) {
    this.updateCurrentEncounter(encounter.name);
    this.save();
  }

  setEncounterEntity(encounter: EncounterEntity) {
    this.updateCurrentEncounter(encounter.name);
    this.save();
  }

  hasEncounterId(id: string): boolean {
    return this.encountersById().has(id);
  }

  hasEncounterName(name: string): boolean {
    return this.encountersByName().has(name);
  }

  private sortEncounters(encounters: Encounter[]): Encounter[] {
    return encounters.toSorted((a, b) => Utils.compareIds(a.name || '', b.name || ''));
  }

  private async updateCurrentEncounter(id: string) {
    this.currentEncounterId.set(id);
    this.currentEncounter.set(await this.encounterService.get(this.currentEncounterId()));
  }

  productId?: string;
  lookupProductId(): string {
    if (this.productId === undefined) {
      const product = this.entitiesService.products.getAll().find((p) => p.title.includes(this.name));
      this.productId = product?.name || '';
    }

    return this.productId;
  }

  static forEntities(adventureService: AdventureService, entities: AdventureEntity[]): Adventure[] {
    return entities.map((e) => Adventure.forEntity(adventureService, e));
  }

  static forEntity(adventureService: AdventureService, entity: AdventureEntity): Adventure {
    const adventure = adventureService.get(entity.name);
    Utils.delayed(() => adventure.updateEntity(entity));
    return adventure;
  }
}
