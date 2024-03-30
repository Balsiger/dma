import { Common } from './values/common';
import { References } from './values/references';

/** The base class of all entities, providing basic functionality. */
export abstract class Entity<T extends Entity<T>> {
  get name(): string {
    return this.common.name;
  }

  get description(): string {
    return this.common.description;
  }

  get shortDescription(): string {
    return this.common.shortDescription;
  }

  get references(): References {
    return this.common.references;
  }

  get images(): string[] {
    return this.common.images;
  }

  constructor(readonly common: Common) {}

  toString() {
    return this.name;
  }

  abstract resolve(bases: T[], values: Map<string, string>): T;

  protected static splitValues(text: string): Map<string, string> {
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
