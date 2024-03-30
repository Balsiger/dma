import { Injectable } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Miniature } from '../data/entities/miniature';
import { Rarity } from '../data/entities/values/enums/rarity';
import { Size } from '../data/entities/values/size';
import { FilterData } from '../data/filter_data';
import { Data as DataLocation, Location } from '../data/location';
import { ProtoRpc } from '../net/ProtoRpc';
import { MiniaturesProto } from '../proto/generated/template_pb';
import { Filter } from '../ui/common/filtering-line/filtering-line.component';
import { EntityService } from './entity.service';
import { FirebaseService } from './firebase.service';

const DELIMITER = '##';
const LIST_DELIMITER = '|';

export function serializeFilter(filter: FilterData): string | null {
  if (
    !filter.name &&
    !filter.rarities.length &&
    !filter.sizes.length &&
    !filter.types.length &&
    !filter.subtypes.length &&
    !filter.races.length &&
    !filter.classes.length &&
    !filter.locations.length &&
    !filter.sets.length
  ) {
    return null;
  }

  return [
    filter.name,
    filter.rarities.join(LIST_DELIMITER),
    filter.sizes.join(LIST_DELIMITER),
    filter.types.join(LIST_DELIMITER),
    filter.subtypes.join(LIST_DELIMITER),
    filter.races.join(LIST_DELIMITER),
    filter.classes.join(LIST_DELIMITER),
    filter.locations.join(LIST_DELIMITER),
    filter.sets.join(LIST_DELIMITER),
  ].join(DELIMITER);
}

export function deserializeFilter(text: string): FilterData {
  const parts = text.split(DELIMITER);

  return {
    name: parts[0],
    rarities: parts[1] ? parts[1].split(LIST_DELIMITER).map((r) => Rarity.fromString(r)) : [],
    sizes: parts[2] ? parts[2]?.split(LIST_DELIMITER).map((r) => Size.fromString(r)) : [],
    types: parts[3] ? parts[3]?.split(LIST_DELIMITER) : [],
    subtypes: parts[4] ? parts[4]?.split(LIST_DELIMITER) : [],
    races: parts[5] ? parts[5]?.split(LIST_DELIMITER) : [],
    classes: parts[6] ? parts[6]?.split(LIST_DELIMITER) : [],
    locations: parts[7] ? parts[7]?.split(LIST_DELIMITER) : [],
    sets: parts[8] ? parts[8]?.split(LIST_DELIMITER) : [],
  };
}

const PATH = 'miniatures/miniatures';
const DATA_OWNED = 'owned';
const DATA_LOCATIONS = 'locations';

@Injectable({
  providedIn: 'root',
})
export class MiniaturesService extends EntityService<Miniature, MiniaturesProto> {
  private readonly miniaturesByName = new Map<string, Miniature>();

  private locations: Location[] = [];
  private owned: { [key: string]: number } = {};
  private allTypes: string[] = [];
  private allSubtypes: string[] = [];
  private allRaces: string[] = [];
  private allClasses: string[] = [];
  private allLocations: string[] = [];
  private allSets: string[] = [];

  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly snackBar: MatSnackBar,
  ) {
    super(
      '/assets/data/miniatures.pb',
      Miniature.create,
      new ProtoRpc(MiniaturesProto.deserializeBinary),
      (p) => p.getMiniaturesList().map((m) => Miniature.fromProto(m)),
      undefined,
    );
  }

  override async load() {
    if (this.loading === false) {
      return;
    }

    await super.load();
    await this.loadUserData();

    if (this.allTypes.length == 0) {
      const types = new Set<string>();
      const subtypes = new Set<string>();
      const races = new Set<string>();
      const classes = new Set<string>();
      const locations = new Set<string>();
      const sets = new Set<string>();
      for (const miniature of this.entitiesByName.values()) {
        types.add(miniature.type);
        miniature.subtypes.forEach((s) => subtypes.add(s));
        races.add(miniature.race);
        miniature.classes.forEach((c) => classes.add(c));
        locations.add(miniature.location);
        sets.add(miniature.set);
      }

      this.allTypes = Array.from(types).sort();
      this.allSubtypes = Array.from(subtypes).sort();
      this.allRaces = Array.from(races).sort();
      this.allClasses = Array.from(classes).sort();
      this.allLocations = Array.from(locations).sort();
      this.allSets = Array.from(sets).sort();
    }
  }

  private async loadUserData() {
    const data = await this.firebaseService.loadData(PATH);
    if (data) {
      await this.processUserData(data);
    }
  }

  private async processUserData(data: DocumentData) {
    this.locations = data[DATA_LOCATIONS].map((l: DataLocation) => Location.fromData(l));
    this.owned = data[DATA_OWNED];
    for (const id in this.owned) {
      const miniature = await this.get(id);
      if (miniature) {
        miniature.owned = this.owned[id];
        const location = this.matchLocation(miniature);
        miniature.location = location?.name || '';
        miniature.locationStyle = location?.style || '';
      } else {
        this.snackBar.open('Cannot find owned miniature: ' + id, 'Dismiss');
      }
    }
  }

  async getMiniatures(filter?: FilterData): Promise<Miniature[]> {
    await this.load();

    const miniatures = [];
    for (const miniature of this.entitiesByRealName.values()) {
      if (miniature.matchesData(filter)) {
        miniatures.push(miniature);
      }
    }

    return miniatures;
  }

  async hasRace(name: string): Promise<boolean> {
    await this.load();
    return this.allRaces.indexOf(name) >= 0;
  }

  async availbleRaces(names: string[]): Promise<string[]> {
    await this.load();

    return names.filter((r) => this.allRaces.indexOf(r) >= 0);
  }

  async hasType(type: string): Promise<boolean> {
    await this.load();
    return this.allTypes.indexOf(type) >= 0;
  }

  async getAllTypes(): Promise<string[]> {
    await this.load();
    return this.allTypes;
  }

  async getAllSubtypes(): Promise<string[]> {
    await this.load();
    return this.allSubtypes;
  }

  async getAllRaces(): Promise<string[]> {
    await this.load();
    return this.allRaces;
  }

  async getAllClasses(): Promise<string[]> {
    await this.load();
    return this.allClasses;
  }

  async getAllLocations(): Promise<string[]> {
    await this.load();
    return this.allLocations;
  }

  async getAllSets(): Promise<string[]> {
    await this.load();
    return this.allSets;
  }

  async getLocations(): Promise<Location[]> {
    await this.load();

    return this.locations;
  }

  async saveLocations(locations: Location[]) {
    this.firebaseService.saveData(PATH, {
      locations: locations.map((l) => l.toData()),
      owned: this.owned,
    });
  }

  private matchLocation(miniature: Miniature): Location | undefined {
    for (const location of this.locations) {
      if (location.matches(miniature)) {
        return location;
      }
    }

    return undefined;
  }

  async getFilters(): Promise<Filter[]> {
    await this.load();

    return [
      {
        label: 'Name',
      },
      {
        label: 'Size',
        options: Size.sizes.map((s) => ({ label: s.name, value: s })),
        multiple: true,
      },
      {
        label: 'Rarity',
        options: Rarity.probabilities.map((r) => ({ label: r.name, value: r })),
        multiple: true,
      },
      {
        label: 'Type',
        options: this.allTypes.map((t) => ({ label: t, value: t })),
        multiple: true,
      },
      {
        label: 'Subtype',
        options: this.allSubtypes.map((t) => ({ label: t, value: t })),
        multiple: true,
      },
      {
        label: 'Race',
        options: this.allRaces.map((t) => ({ label: t, value: t })),
        multiple: true,
      },
      {
        label: 'Class',
        options: this.allClasses.map((t) => ({ label: t, value: t })),
        multiple: true,
      },
      {
        label: 'Location',
        options: this.allLocations.map((t) => ({ label: t, value: t })),
        multiple: true,
      },
      {
        label: 'Set',
        options: this.allSets.map((t) => ({ label: t, value: t })),
        multiple: true,
      },
    ];
  }
}
