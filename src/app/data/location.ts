import { Miniature } from './entities/miniature';
import { FilterData } from './filter_data';
import { Rarity } from './values/enums/rarity';
import { Size } from './values/size';

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
  name: string;
  color: number;
  filters: DataFilter[];
}

export interface DataFilter {
  classes: string[];
  name: string;
  races: string[];
  rarity: string[];
  sizes: string[];
  types: string[];
  subtypes: string[];
  sets: string[];
}

export class Location {
  style = '';
  summaries: string[] = [];

  constructor(
    readonly name: string,
    private readonly color: number,
    readonly filters: FilterData[],
    style: string = ''
  ) {
    this.style = style || this.convertColor(color);
    this.summaries = filters.map((f) => this.createSummary(f));
  }

  matches(miniature: Miniature): boolean {
    for (const filter of this.filters) {
      if (miniature.matchesData(filter)) {
        return true;
      }
    }

    return false;
  }

  withName(name: string): Location {
    return new Location(name, this.color, this.filters);
  }

  withStyle(style: string): Location {
    return new Location(this.name, 0, this.filters, style);
  }

  withFilters(filters: FilterData[]): Location {
    return new Location(this.name, this.color, filters);
  }

  toData(): Data {
    return {
      name: this.name,
      color: this.color,
      filters: this.filters.map((f) => Location.convertFilterToData(f)),
    };
  }

  static fromData(data: Data): Location {
    return new Location(data.name, data.color, data.filters ? data.filters.map((f) => Location.createFilter(f)) : []);
  }

  private convertColor(color: number): string {
    return COLORS.get(color) || 'white';
  }

  private createSummary(filter: FilterData): string {
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

  private static createFilter(data: DataFilter): FilterData {
    return {
      name: data.name,
      rarities: data.rarity.map((r) => Rarity.fromString(r)),
      sizes: data.sizes.map((s) => Size.fromString(s)),
      types: data.types,
      subtypes: data.subtypes,
      races: data.races,
      classes: data.classes,
      locations: [],
      sets: data.sets,
    };
  }

  private static convertFilterToData(filter: FilterData): DataFilter {
    return {
      name: filter.name,
      rarity: filter.rarities.map(r => r.name),
      sizes: filter.sizes.map((s) => s.name),
      types: filter.types,
      subtypes: filter.subtypes,
      races: filter.races,
      classes: filter.classes,
      sets: filter.sets,
    };
  }
}
