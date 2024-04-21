import { WritableSignal, computed, signal } from '@angular/core';
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
  encountersById = computed(() => new Map<string, Encounter>(this.encounters().map((e) => [e.id(), e])));
  encountersByName = computed(() => new Map<string, Encounter>(this.encounters().map((e) => [e.name(), e])));
  currentEncounter = computed(() => this.encounterService.factsById().get(this.currentEncounterId()));
  currentEncounterId: WritableSignal<string>;
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
    super(adventureService);
    this.encounterService = adventureService.createEncounterService(this);
    // Cannot initialize a signal in the constructor cycle when it's also set in a field.
    this.currentEncounterId = signal(originalEncounterId);
  }

  override async doLoad() {
    // Nothing to do there. Check whether we can remove this for all facts.
  }

  override buildDocumentId(): string {
    return this.name;
  }

  async addEncounter(encounter: Encounter) {
    await this.encounterService.save(encounter);
  }

  async updateEncounter(old: Encounter, changed: Encounter) {
    await this.encounterService.update(old, changed);
  }

  async deleteEncounter(encounter: Encounter) {
    await this.encounterService.delete(encounter);
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

  setEncounter(encounter: Encounter) {
    this.currentEncounterId.set(encounter.buildDocumentId());
    this.save();
  }

  hasEncounterId(id: string): boolean {
    return this.encountersById().has(id);
  }

  hasEncounterName(name: string): boolean {
    return this.encountersByName().has(name);
  }
}
