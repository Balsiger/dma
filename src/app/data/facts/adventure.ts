import { computed, signal } from '@angular/core';
import { AdventureService } from '../../services/fact/adventure.service';
import { EncounterService } from '../../services/fact/encounter.service';
import { Campaign } from './campaign';
import { Encounter } from './encounter';
import { Fact } from './fact';

export interface Data {
  encounter?: string;
  image?: string;
  levels?: string;
}

export class Adventure extends Fact<Data, AdventureService> {
  encounterService: EncounterService;

  encounters = computed(() => this.encounterService.facts());
  encountersById = computed(() => new Map<string, Encounter>(this.encounters().map((e) => [e.id(), e])));
  encountersByName = computed(() => new Map<string, Encounter>(this.encounters().map((e) => [e.name(), e])));
  currentEncounter = computed(() => this.encounterService.factsById().get(this.currentEncounterId()));
  currentEncounterId = signal('');
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

  constructor(
    adventureService: AdventureService,
    readonly campaign: Campaign,
    readonly name: string,
    data: Data,
  ) {
    super(adventureService);
    this.encounterService = adventureService.createEncounterService(this);

    // Cannot update signals in the same cycle as they are created :-(.
    setTimeout(() => {
      this.update(data);
    });
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
    // Since the initial, empty update may happen after the update from firestore, ignore empty updates.
    if (data.encounter || data.image || data.levels) {
      this.currentEncounterId.set(data.encounter || '');
      this.image.set(data.image || '');
      this.levels.set(data.levels || '');
    }
  }

  static fromData(campaign: Campaign, adventureService: AdventureService, name: string, data: Data): Adventure {
    return new Adventure(adventureService, campaign, name, data);
  }

  toData(): Data {
    return {
      encounter: this.currentEncounterId(),
      levels: this.levels(),
      image: this.image(),
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
