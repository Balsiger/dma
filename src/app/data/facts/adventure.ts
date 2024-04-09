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
  encounters: Encounter[] = [];
  currentEncounter?: Encounter;
  previousEncounter?: Encounter;
  nextEncounter?: Encounter;

  constructor(
    private readonly adventureService: AdventureService,
    private readonly encounterService: EncounterService,
    readonly campaign: Campaign,
    public readonly name: string,
    public encounterId: string,
    readonly image: string,
    readonly levels: string,
  ) {
    super();

    this.load();
  }

  override async doLoad() {
    this.encounters = await this.encounterService.load(this);
    this.update();
  }

  update() {
    this.currentEncounter = this.getEncounter(this.encounterId);
    if (this.currentEncounter) {
      this.previousEncounter = this.encounters[this.encounters.indexOf(this.currentEncounter) - 1];
      this.nextEncounter = this.encounters[this.encounters.indexOf(this.currentEncounter) + 1];
    } else {
      this.previousEncounter = undefined;
      this.nextEncounter = this.encounters[0];
    }
  }

  async addEncounter(encounter: Encounter) {
    await this.encounterService.save(encounter);
    this.load();
  }

  async changeEncounter(old: Encounter, changed: Encounter) {
    await this.encounterService.update(old, changed);
    this.load();
  }

  async deleteEncounter(encounter: Encounter) {
    await this.encounterService.delete(encounter);
    this.load();
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
      encounter: this.encounterId,
      levels: this.levels,
      image: this.image,
    };
  }

  getEncounter(id: string): Encounter | undefined {
    return this.encounters.find((e) => e.id === id);
  }

  setEncounter(encounterId: string) {
    this.encounterId = encounterId;
    this.update();
    this.save();
  }

  protected override save() {
    this.adventureService.save(this);
  }

  hasEncounterId(id: string): boolean {
    for (const encounter of this.encounters) {
      if (encounter.id === id) {
        return true;
      }
    }

    return false;
  }

  hasEncounterName(name: string): boolean {
    for (const encounter of this.encounters) {
      if (encounter.name === name) {
        return true;
      }
    }

    return false;
  }
}
