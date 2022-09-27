import { Injectable } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FilterData } from '../data/FilterData';
import { Data as DataLocation, Location } from '../data/location';
import { Miniature, Rarity } from '../data/miniature';
import { Size } from '../data/size';
import { ProtoRpc } from '../net/ProtoRpc';
import { MiniaturesProto } from '../proto/generated/template_pb';
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
    rarities: parts[1] ? parts[1].split(LIST_DELIMITER).map((r) => r as Rarity) : [],
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
  //private readonly rpc = new ProtoRpc(MiniaturesProto.deserializeBinary);

  private locations: Location[] = [];
  private owned: { [key: string]: number } = {};
  private allTypes: string[] = [];
  private allSubtypes: string[] = [];
  private allRaces: string[] = [];
  private allClasses: string[] = [];
  private allLocations: string[] = [];
  private allSets: string[] = [];

  constructor(private readonly firebaseService: FirebaseService, private readonly snackBar: MatSnackBar) {
    super(
      '/assets/data/miniatures.pb',
      Miniature.create,
      new ProtoRpc(MiniaturesProto.deserializeBinary),
      (p) => p.getMiniaturesList().map((m) => Miniature.fromProto(m)),
      undefined
    );
  }

  private async loadUserData() {
    const data = await this.firebaseService.loadData(PATH);
    if (data) {
      this.processUserData(data);
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
    await this.fetch();
    
    const miniatures = [];
    for (const miniature of this.entitiesByName.values()) {
      if (miniature.matches(filter)) {
        miniatures.push(miniature);
      }
    }

    return miniatures;
  }

  async hasRace(name: string): Promise<boolean> {
    await this.fetch();
    return this.allRaces.indexOf(name) >= 0;
  }

  async hasType(type: string): Promise<boolean> {
    await this.fetch();
    return this.allTypes.indexOf(type) >= 0;
  }

  async getAllTypes(): Promise<string[]> {
    await this.fetch();
    return this.allTypes;
  }

  async getAllSubtypes(): Promise<string[]> {
    await this.fetch();
    return this.allSubtypes;
  }

  async getAllRaces(): Promise<string[]> {
    await this.fetch();
    return this.allRaces;
  }

  async getAllClasses(): Promise<string[]> {
    await this.fetch();
    return this.allClasses;
  }

  async getAllLocations(): Promise<string[]> {
    await this.fetch();
    return this.allLocations;
  }

  async getAllSets(): Promise<string[]> {
    await this.fetch();
    return this.allSets;
  }

  async getLocations(): Promise<Location[]> {
    await this.fetch();

    return this.locations;
  }

  async saveLocations(locations: Location[]) {
    this.firebaseService.saveData(PATH, {
      locations: locations.map((l) => l.toData()),
      owned: this.owned,
    });
  }

  protected override async fetch() {
    await super.fetch();
        
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

      await this.loadUserData();
    }
  }

  private matchLocation(miniature: Miniature): Location | undefined {
    for (const location of this.locations) {
      if (location.matches(miniature)) {
        return location;
      }
    }

    return undefined;
  }
}
