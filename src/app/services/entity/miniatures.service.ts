import { Injectable, computed } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Miniature } from '../../data/entities/miniature';
import { Rarity } from '../../data/entities/values/enums/rarity';
import { Size } from '../../data/entities/values/size';
import { Location, LocationFilter } from '../../data/facts/location';
import { ProtoRpc } from '../../net/ProtoRpc';
import { MiniaturesProto } from '../../proto/generated/template_pb';
import { Filter } from '../../ui/common/filtering-line/filtering-line.component';
import { UserMiniatureService } from '../fact/user-miniature.service';
import { FirebaseService } from '../firebase.service';
import { EntityService } from './entity.service';

const PATH = 'miniatures/miniatures';
const DATA_OWNED = 'owned';
const DATA_LOCATIONS = 'locations';

@Injectable({
  providedIn: 'root',
})
export class MiniaturesService extends EntityService<Miniature, MiniaturesProto> {
  private locations = computed(() => this.userMiniatureService.facts().flatMap((m) => m.locations()));
  private owned: { [key: string]: number } = {};
  private allTypes: string[] = [];
  private allSubtypes: string[] = [];
  private allRaces: string[] = [];
  private allClasses: string[] = [];
  private allLocations: string[] = [];
  private allSets: string[] = [];

  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly userMiniatureService: UserMiniatureService,
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
    //this.locations = this.locationService.facts();
    //data[DATA_LOCATIONS].map((l: DataLocation) => Location.old_fromData(l));
    this.owned = data[DATA_OWNED];
    console.log('~~process user update', data, this.locations);
    for (const id in this.owned) {
      const miniature = await this.get(id);
      if (miniature) {
        miniature.owned = this.owned[id];
        const location = this.matchLocation(miniature);
        miniature.location = location?.name || '';
        miniature.locationStyle = location?.style() || '';
      } else {
        this.snackBar.open('Cannot find owned miniature: ' + id, 'Dismiss');
      }
    }
  }

  async getMiniatures(filter?: LocationFilter): Promise<Miniature[]> {
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

    return this.locations();
  }

  async saveLocations(locations: Location[]) {
    this.firebaseService.saveData(PATH, {
      locations: locations.map((l) => l.toData()),
      owned: this.owned,
    });
  }

  private matchLocation(miniature: Miniature): Location | undefined {
    for (const location of this.locations()) {
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
