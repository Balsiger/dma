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

export class Adventure extends Fact<Data> {
  encounters = signal<Encounter[]>([]);
  encountersById = computed(() => new Map<string, Encounter>(this.encounters().map((e) => [e.id, e])));
  encountersByName = computed(() => new Map<string, Encounter>(this.encounters().map((e) => [e.name, e])));
  currentEncounter = signal<Encounter | undefined>(undefined);
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
    private readonly encounterService: EncounterService,
    readonly campaign: Campaign,
    public readonly name: string,
    private readonly originalEncounterId: string,
    readonly image: string,
    readonly levels: string,
  ) {
    super();

    this.load();
  }

  override async doLoad() {
    this.encounters.set(await this.encounterService.load(this));
    this.currentEncounter.set(this.encountersById().get(this.originalEncounterId));
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

  override update(data: Data): void {
    throw new Error('Method not implemented.');
  }

  static fromData(
    adventureService: AdventureService,
    encounterService: EncounterService,
    campaign: Campaign,
    name: string,
    data: Data,
  ): Adventure {
    return new Adventure(adventureService, encounterService, campaign, name, data.encounter, data.image, data.levels);
  }

  toData(): Data {
    return {
      encounter: this.originalEncounterId,
      levels: this.levels,
      image: this.image,
    };
  }

  getEncounter(id: string): Encounter | undefined {
    return this.encountersById().get(id);
  }

  setEncounter(encounter: Encounter) {
    this.currentEncounter.set(encounter);
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
