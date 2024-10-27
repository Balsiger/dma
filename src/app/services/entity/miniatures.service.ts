import { Injectable, computed, effect } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Loading } from '../../common/loading';
import { Miniature } from '../../data/entities/miniature';
import { Rarity } from '../../data/entities/values/enums/rarity';
import { Size } from '../../data/entities/values/size';
import { Location, LocationFilter } from '../../data/facts/factoids/location';
import { Owned } from '../../data/facts/factoids/owned';
import { Filter } from '../../ui/common/filtering-line/filtering-line.component';
import { UserMiniatureService } from '../fact/user-miniature.service';
import { EntitiesService } from './entities.service';

@Injectable({
  providedIn: 'root',
})
export class MiniaturesService extends Loading {
  private locations = computed(() => this.userMiniatureService.facts().flatMap((m) => m.locations()));
  private owned = computed(
    () =>
      this.userMiniatureService
        .facts()
        .find(() => true)
        ?.owned(),
  );
  private allTypes: string[] = [];
  private allSubtypes: string[] = [];
  private allRaces: string[] = [];
  private allClasses: string[] = [];
  private allLocations: string[] = [];
  private allSets: string[] = [];

  constructor(
    private readonly userMiniatureService: UserMiniatureService,
    private readonly snackBar: MatSnackBar,
    private readonly entitiesService: EntitiesService,
  ) {
    super();

    effect(() => this.processOwned(this.owned()));
  }

  override async doLoad() {
    if (this.allTypes.length == 0) {
      const types = new Set<string>();
      const subtypes = new Set<string>();
      const races = new Set<string>();
      const classes = new Set<string>();
      const locations = new Set<string>();
      const sets = new Set<string>();
      for (const miniature of this.entitiesService.miniatures.getAll()) {
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

  private async processOwned(owned: Owned | undefined) {
    if (owned) {
      for (const id of owned.ownedByMiniature().keys() || []) {
        const miniature = this.entitiesService.miniatures.get(id);
        if (miniature) {
          miniature.owned = owned.ownedByMiniature().get(id) || 0;
          const location = this.matchLocation(miniature);
          miniature.location = location?.name || '';
          miniature.locationStyle = location?.style() || '';
        } else {
          this.snackBar.open('Cannot find owned miniature: ' + id, 'Dismiss');
        }
      }
    }
  }

  async getMiniatures(filter?: LocationFilter): Promise<Miniature[]> {
    await this.load();

    const miniatures = [];
    for (const miniature of this.entitiesService.miniatures.getAll()) {
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
