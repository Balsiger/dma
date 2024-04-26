import { computed, signal } from '@angular/core';
import { UserMiniatureService } from '../../services/fact/user-miniature.service';
import { Miniature } from '../entities/miniature';
import { Rarity } from '../entities/values/enums/rarity';
import { Size } from '../entities/values/size';
import { Factoid } from './fact';

export const COLORS = new Map<number, string>();
COLORS.set(-48060, 'red');
COLORS.set(-12277180, 'green');
COLORS.set(-11390719, 'brown');
COLORS.set(-12303105, 'blue');
COLORS.set(-5317, 'yellow');
COLORS.set(-6543440, 'violet');
COLORS.set(-26624, 'orange');
COLORS.set(-9047757, 'light-green');
COLORS.set(-16777216, 'black');
COLORS.set(-16728876, 'light-blue');
COLORS.set(-5592406, 'green');

export interface Data {
  name?: string;
  color?: number;
  filters?: DataFilter[];
}

export interface LocationFilter {
  name: string;
  rarities: Rarity[];
  sizes: Size[];
  types: string[];
  subtypes: string[];
  races: string[];
  classes: string[];
  locations: string[];
  sets: string[];
}

export const EMPTY: LocationFilter = {
  name: '',
  rarities: [],
  sizes: [],
  types: [],
  subtypes: [],
  races: [],
  classes: [],
  locations: [],
  sets: [],
};

export interface DataFilter {
  classes?: string[];
  name?: string;
  races?: string[];
  rarity?: string[];
  sizes?: string[];
  types?: string[];
  subtypes?: string[];
  sets?: string[];
}

export class Location implements Factoid<Data> {
  color = signal(0);
  filters = signal<LocationFilter[]>([]);

  style = computed(() => this.convertColor(this.color()));
  summaries = computed(() => this.filters().map((f) => this.createSummary(f)));

  constructor(
    private readonly service: UserMiniatureService,
    readonly name: string,
    data: Data,
  ) {
    // Cannot update signals in the same cycle as they are created :-(.
    //setTimeout(() => {
    this.update(data);
    //});
  }

  update(data: Data) {
    if (data.color || data.filters?.length) {
      this.color.set(data.color || 0);
      this.filters.set(data.filters?.map((f) => Location.createFilter(f)) || []);
    }
  }

  matches(miniature: Miniature): boolean {
    for (const filter of this.filters()) {
      if (miniature.matchesData(filter)) {
        return true;
      }
    }

    return false;
  }

  withName(name: string): Location {
    return new Location(this.service, name, {
      color: this.color(),
      filters: this.filters().map((f) => Location.convertFilterToData(f)),
    });
  }

  withStyle(style: string): Location {
    return new Location(this.service, this.name, {
      color: this.convertStyle(style),
      filters: this.filters().map((f) => Location.convertFilterToData(f)),
    });
  }

  withFilters(filters: LocationFilter[]): Location {
    return new Location(this.service, this.name, {
      color: this.color(),
      filters: this.filters().map((f) => Location.convertFilterToData(f)),
    });
  }

  toData(): Data {
    return {
      name: this.name,
      color: this.color(),
      filters: this.filters().map((f) => Location.convertFilterToData(f)),
    };
  }

  //override buildDocumentId(): striFng {
  //  return this.name;
  //}

  static fromData(service: UserMiniatureService, _id: string, data: Data): Location {
    return new Location(service, data.name || '', data);
  }

  static old_fromData(data: Data): Location {
    return new Location(null as any as UserMiniatureService, data.name || '', data);
  }

  private convertColor(color: number): string {
    return COLORS.get(color) || 'white';
  }

  private convertStyle(style: string): number {
    for (let entry of COLORS.entries()) {
      if (entry[1] === style) {
        return entry[0];
      }
    }

    return 0;
  }

  private createSummary(filter: LocationFilter): string {
    const parts: string[] = [];

    if (filter.name) {
      parts.push('name=' + filter.name);
    }

    parts.push(Location.summarize('rarities', filter.rarities));
    parts.push(Location.summarize('sizes', filter.sizes));
    parts.push(Location.summarize('types', filter.types));
    parts.push(Location.summarize('subtypes', filter.subtypes));
    parts.push(Location.summarize('races', filter.races));
    parts.push(Location.summarize('classes', filter.classes));
    parts.push(Location.summarize('sets', filter.sets));

    return parts.filter((p) => !!p).join(', ');
  }

  private static summarize(name: string, values: any[]): string {
    if (values.length) {
      return name + ': ' + values.join('|');
    }

    return '';
  }

  private static createFilter(data: DataFilter): LocationFilter {
    return {
      name: data.name || '',
      rarities: data.rarity?.map((r) => Rarity.fromString(r)) || [],
      sizes: data.sizes?.map((s) => Size.fromString(s)) || [],
      types: data.types || [],
      subtypes: data.subtypes || [],
      races: data.races || [],
      classes: data.classes || [],
      locations: [],
      sets: data.sets || [],
    };
  }

  private static convertFilterToData(filter: LocationFilter): DataFilter {
    return {
      name: filter.name,
      rarity: filter.rarities.map((r) => r.name),
      sizes: filter.sizes.map((s) => s.name),
      types: filter.types,
      subtypes: filter.subtypes,
      races: filter.races,
      classes: filter.classes,
      sets: filter.sets,
    };
  }
}
