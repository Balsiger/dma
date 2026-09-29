import { Immutable, NO_IMMUTABLE, NoImmutable } from './immutable';
import { Version } from './values/enums/version';

export class Immutables<T extends Immutable<T>> {
  protected readonly byName = new Map<string, T>();
  // These are the immutables by the real name given in the proto, excluding synonyms and plurals.
  protected readonly byRealName = new Map<string, T>();
  // These are the immutables by the real name, including duplicates (because of versioning)
  protected readonly byRealNameAllVersions = new Map<string, T[]>();

  protected readonly names: string[] = [];

  constructor(private readonly creator: (name: string) => T) {}

  get(name: string, version?: Version): T {
    let immutable;
    if (version) {
      for (const candidate of this.byRealNameAllVersions.get(name.toLocaleLowerCase()) || []) {
        if (candidate.common.version === version) {
          immutable = candidate;
          break;
        }
      }
    } else {
      immutable = this.byName.get(name.toLocaleLowerCase());
    }

    return immutable ?? this.creator(name);
  }

  getVersions(name: string): Version[] {
    return this.byRealNameAllVersions.get(name.toLocaleLowerCase())?.map((e) => e.common.version) || [];
  }

  getAll(): T[] {
    return Array.from(this.byRealName.values()).sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? +1 : 0));
  }

  getAllByVersion(version: Version): T[] {
    return [...this.byRealNameAllVersions.values()]
      .flatMap((v) => v.filter((e) => e.common.version === version))
      .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? +1 : 0));
  }

  getAllVersions(): T[] {
    return Array.from(this.byRealNameAllVersions.values())
      .flatMap((v) => v)
      .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? +1 : 0));
  }

  getAllByProduct(product: string): T[] {
    return this.getAll().filter((e) => e.product === product);
  }

  getAllByProducts(products: string[]): T[] {
    return this.getAll().filter((e) => products.includes(e.product));
  }

  getAllNames(): string[] {
    return this.names;
  }

  size(): number {
    return this.byRealName.size;
  }

  has(name: string, version?: Version): boolean {
    if (version) {
      for (const candidate of this.byRealNameAllVersions.get(name.toLocaleLowerCase()) || []) {
        if (candidate.common.version === version) {
          return true;
        }
      }

      return false;
    }

    return this.byName.has(name.toLocaleLowerCase());
  }

  resolve(immutables: T[]) {
    do {
      const unresolved: T[] = [];
      for (const immutable of immutables) {
        if (this.available(immutable.common.bases, immutable.common.version)) {
          const resolved = immutable.resolve(
            immutable.common.bases.map((m) => this.get(m.toLocaleLowerCase(), immutable.common.version)),
            new Map(),
          );
          this.insertImmutable(resolved);
        } else {
          unresolved.push(immutable);
        }
      }

      if (unresolved.length > 0 && unresolved.length >= immutables.length) {
        throw new Error(
          'There seems to be a loop in the bases for entities (' + unresolved.map((e) => e.toString()) + ')!',
        );
      } else {
        immutables = unresolved;
      }
    } while (immutables.length > 0);
  }

  public insertImmutable(immutable: T, reinsert = false) {
    const present = this.byRealName.get(immutable.normalizedName);

    if (!present) {
      this.names.push(immutable.name);
    }

    if (!present || immutable.common.version.isNewerOrEqual(present.common.version) || reinsert) {
      this.byName.set(immutable.normalizedName, immutable);
      this.byRealName.set(immutable.normalizedName, immutable);
    }

    this.insertMultiple(immutable);
    this.insertSynonyms(immutable, reinsert || !!present);
    this.insertPlural(immutable, reinsert || !!present);
  }

  private insertSynonyms(immutable: T, reinsert: boolean) {
    for (const synonym of immutable.common.synonyms) {
      const synonymName = synonym.toLowerCase();
      if (!reinsert && this.byName.has(synonymName)) {
        console.warn(
          'Synonym',
          synonymName,
          'already present for',
          this.byName.get(synonymName)?.name,
          'ignored for',
          immutable.name,
        );
      } else {
        this.byName.set(synonymName, immutable);
        this.names.push(synonym);
      }
    }
  }

  private insertPlural(immutable: T, reinsert: boolean) {
    const pluralName = immutable.common.plural.toLowerCase();
    if (!reinsert && pluralName && pluralName !== immutable.normalizedName && this.byName.has(pluralName)) {
      console.warn(
        'Plural',
        pluralName,
        'already present for',
        this.byName.get(pluralName)?.name,
        'ignored for',
        immutable.name,
      );
    } else {
      this.byName.set(pluralName, immutable);
      this.names.push(immutable.common.plural);
    }
  }

  private insertMultiple(immutable: T) {
    const entities = this.byRealNameAllVersions.get(immutable.normalizedName) || [];
    entities.unshift(immutable);
    this.byRealNameAllVersions.set(immutable.normalizedName, entities);
  }

  private available(names: string[], version: Version): boolean {
    for (const name of names) {
      if (!this.has(name.toLocaleLowerCase(), version)) {
        return false;
      }
    }

    return true;
  }
}

export class NoImmutables extends Immutables<NoImmutable> {
  constructor() {
    super((name: string) => NO_IMMUTABLE);
  }
}
export const NO_IMMUTABLES = new NoImmutables();
