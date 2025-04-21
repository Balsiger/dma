import { computed, signal } from '@angular/core';
import { Utils } from '../../../common/utils';
import { EntitiesService } from '../../services/entity/entities.service';
import { AdventureService } from '../../services/fact/adventure.service';
import { EncounterService } from '../../services/fact/encounter.service';
import { EncounterEntity } from '../entities/encounter-entity';
import { Campaign } from './campaign';
import { Encounter } from './encounter';
import { Fact } from './fact';

export interface Data {
  encounter?: string;
  image?: string;
  levels?: string;
  products: string[];
}

export class Adventure extends Fact<Data, AdventureService> {
  encounterService: EncounterService;

  currentEncounterId = signal('');
  encounters = signal<Encounter[]>([]);
  encountersById = computed(() => new Map<string, Encounter>(this.encounters().map((e) => [e.id(), e])));
  encountersByName = computed(() => new Map<string, Encounter>(this.encounters().map((e) => [e.name(), e])));

  currentEncounter = computed(() => {
    return this.encounterService.get(this.currentEncounterId());
  });
  previousEncounter = computed(() =>
    this.currentEncounter() ? this.encounters()[this.encounters().indexOf(this.currentEncounter()!) - 1] : undefined,
  );
  nextEncounter = computed(() =>
    this.currentEncounter()
      ? this.encounters()[this.encounters().indexOf(this.currentEncounter()!) + 1]
      : this.encounters()[0],
  );

  image = signal('');
  levels = signal('');
  products = signal<string[]>([]);

  constructor(
    adventureService: AdventureService,
    private readonly entitiesService: EntitiesService,
    readonly campaign: Campaign,
    readonly name: string,
    data: Data,
  ) {
    super(adventureService);
    this.encounterService = adventureService.createEncounterService(this);

    this.update(data);

    Utils.delayed(() => {
      this.encounters.set(
        this.sortEncounters(
          Encounter.forEntitites(
            this.encounterService,
            this.entitiesService.encounters.getAllByProducts(this.products()),
          ),
        ),
      );
    });
  }

  override buildDocumentId(): string {
    return this.name;
  }

  async addEncounter(encounter: Encounter) {}

  async updateEncounter(old: Encounter, changed: Encounter) {
    await this.encounterService.update(old, changed);
  }

  async deleteEncounter(encounter: Encounter) {
    await this.encounterService.delete(encounter);
  }

  override update(data: Data) {
    // Since the initial, empty update may happen after the update from firestore, ignore empty updates.
    if (data.encounter || data.image || data.levels) {
      this.currentEncounterId.set(data.encounter || '');
      //this.updateCurrentEncounter();
      this.image.set(data.image || '');
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
    this.currentEncounterId.set(encounter.buildDocumentId());
    //this.updateCurrentEncounter();
    this.save();
  }

  setEncounterEntity(encounter: EncounterEntity) {
    this.currentEncounterId.set(encounter.name);
    //this.updateCurrentEncounter();
    this.save();
  }

  hasEncounterId(id: string): boolean {
    return this.encountersById().has(id);
  }

  hasEncounterName(name: string): boolean {
    return this.encountersByName().has(name);
  }

  private sortEncounters(encounters: Encounter[]): Encounter[] {
    return encounters.toSorted((a, b) => Utils.compareIds(a.entity()?.name || '', b.entity()?.name || ''));
  }

  productId?: string;
  lookupProductId(): string {
    if (this.productId === undefined) {
      const product = this.entitiesService.products.getAll().find((p) => p.title.includes(this.name));
      this.productId = product?.name || '';
    }

    return this.productId;
  }
}
