import { computed, signal } from '@angular/core';
import { AdventureService } from '../../services/fact/adventure.service';
import { EncounterService } from '../../services/fact/encounter.service';
import { Campaign } from './campaign';
import { Encounter } from './encounter';
import { Fact } from './fact';

export interface Data {
  encounter: string;
  image: string;
  levels: string;
}

export class Adventure extends Fact<Data, AdventureService> {
  encounterService: EncounterService;

  encounters = computed(() => this.encounterService.facts());
  encountersById = computed(() => new Map<string, Encounter>(this.encounters().map((e) => [e.id, e])));
  encountersByName = computed(() => new Map<string, Encounter>(this.encounters().map((e) => [e.name, e])));
  currentEncounter = computed(() => this.encounterService.factsById().get(this.currentEncounterId()));
  currentEncounterId = signal<string>('');
  previousEncounter = computed(() =>
    this.currentEncounter() ? this.encounters()[this.encounters().indexOf(this.currentEncounter()!) - 1] : undefined,
  );
  nextEncounter = computed(() =>
    this.currentEncounter()
      ? this.encounters()[this.encounters().indexOf(this.currentEncounter()!) + 1]
      : this.encounters()[0],
  );

  constructor(
    private readonly adventureService: AdventureService,
    readonly campaign: Campaign,
    readonly name: string,
    originalEncounterId: string,
    public image: string,
    public levels: string,
  ) {
    super();
    this.encounterService = adventureService.createEncounterService(this);
    this.currentEncounterId.set(originalEncounterId);

    this.load();
  }

  override async doLoad() {
    //this.encounters.set(await this.encounterService.load(this));
    //this.currentEncounter.set(this.encountersById().get(this.originalEncounterId));
  }

  override buildDocumentId(): string {
    return this.name;
  }

  async addEncounter(encounter: Encounter) {
    await this.encounterService.save(encounter);
    this.load();
  }

  async updateEncounter(old: Encounter, changed: Encounter) {
    await this.encounterService.update(old, changed);
    this.load();
  }

  async deleteEncounter(encounter: Encounter) {
    await this.encounterService.delete(encounter);
    this.load();
  }

  override update(data: Data) {
    this.currentEncounterId.set(data.encounter);
    this.image = data.image;
    this.levels = data.levels;
  }

  static fromData(campaign: Campaign, adventureService: AdventureService, name: string, data: Data): Adventure {
    return new Adventure(adventureService, campaign, name, data.encounter, data.image, data.levels);
  }

  toData(): Data {
    return {
      encounter: this.currentEncounterId(),
      levels: this.levels,
      image: this.image,
    };
  }

  getEncounter(id: string): Encounter | undefined {
    return this.encountersById().get(id);
  }

  setEncounter(encounter: Encounter) {
    this.currentEncounterId.set(encounter.generateStorageId());
    this.save();
  }

  protected override save() {
    this.adventureService.save(this);
  }

  hasEncounterId(id: string): boolean {
    return this.encountersById().has(id);
  }

  hasEncounterName(name: string): boolean {
    return this.encountersByName().has(name);
  }
}
