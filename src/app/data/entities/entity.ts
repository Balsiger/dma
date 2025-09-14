import { Link } from '../values/link';
import { Entities } from './entities';
import { Common } from './values/common';
import { Reference } from './values/reference';

export enum EntityType {
  undefined,
  monster,
  npc,
  condition,
  glossary,
  token,
  spell,
  product,
  miniature,
  item,
  encounter,
  map,
}

/** The base class of all entities, providing basic functionality. */
export abstract class Entity<T extends Entity<T>> {
  get name(): string {
    return this.common.name;
  }

  get normalizedName(): string {
    return this.common.normalizedName;
  }

  get description(): string {
    return this.common.description;
  }

  get shortDescription(): string {
    return this.common.shortDescription;
  }

  get reference(): Reference {
    return this.common.reference;
  }

  get images(): Link[] {
    return this.common.images;
  }

  private playerDescriptions: string[] = [];

  constructor(
    readonly common: Common,
    readonly product: string,
  ) {}

  toString() {
    return this.name;
  }

  abstract resolve(bases: T[], values: Map<string, string>): T;

  deriveWithValues(baseNames: string[], values: Map<string, string>, entities: Entities<T>): T {
    const bases: T[] = baseNames.map((n) => entities.get(n));
    return this.resolve(bases, values);
  }

  resolveSimple(entities: Entities<T>): T {
    return this.resolve(this.lookupBases(entities), new Map());
  }

  computePlayerDescriptions(entities: Entities<T>): string[] {
    if (this.playerDescriptions.length === 0) {
      if (this.common.playerDescription.trim()) {
        this.playerDescriptions = [this.common.playerDescription];
      } else if (this.common.description.trim()) {
        this.playerDescriptions = [this.common.description];
      } else {
        this.playerDescriptions = this.lookupBases(entities).flatMap((b) => b.computePlayerDescriptions(entities));
      }
    }

    return this.playerDescriptions;
  }

  lookupBases(entities: Entities<T>): T[] {
    return this.common.bases.map((n) => entities.get(n, this.common.version));
  }

  public static splitValues(text: string): Map<string, string> {
    const result = new Map<string, string>();
    if (!text) {
      return result;
    }

    const lines = text.split(/\s*,\s*/);
    for (const line of lines) {
      const parts = line.split(/\s*=\s*/);
      if (parts.length == 2) {
        result.set(parts[0], parts[1]);
      } else {
        console.log('Invalid key value: ', line);
      }
    }

    return result;
  }

  protected static maybeOverride<T>(
    values: Map<string, string>,
    name: string,
    converter: (text: string) => T,
    other: T,
  ): T {
    if (values.has(name)) {
      return converter(values.get(name) || '');
    } else {
      return other;
    }
  }

  matches(selections: Map<string, any>): boolean {
    for (const [label, value] of selections.entries()) {
      if (label === 'Name' && typeof value === 'string') {
        if (!this.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
          return false;
        }
      }
    }

    return true;
  }

  computeAutocompleteOptions(value: string): string[] {
    console.warn('Unknown value', value, 'to compute autocomplete options');
    return [];
  }

  protected static includes<T>(value: T, selections: any): boolean {
    if (Array.isArray(selections)) {
      return selections.includes(value);
    } else {
      return value === selections;
    }
  }

  protected static includesAny<T>(value: T[], selections: any): boolean {
    if (Array.isArray(selections)) {
      return this.includesAnyValue(value, selections);
    } else {
      return value.includes(selections);
    }
  }

  private static includesAnyValue<T>(values: T[], checks: T[]): boolean {
    for (const check of checks) {
      if (values.includes(check)) {
        return true;
      }
    }

    return false;
  }
}
