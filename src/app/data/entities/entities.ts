import { Entity } from './entity';
import { Version } from './values/enums/version';

export class Entities<T extends Entity<T>> {
  protected readonly entitiesByName = new Map<string, T>();
  // These are the entities by the real name given in the proto, excluding synonyms and plurals.
  protected readonly entitiesByRealName = new Map<string, T>();
  // These are the entitties by the real name, including duplicates (because of versioning)
  protected readonly entitiesByRealNameAllVersions = new Map<string, T[]>();

  constructor(private readonly creator: (name: string) => T) {}

  get(name: string, version?: Version): T {
    let entity;
    if (version) {
      for (const candidate of this.entitiesByRealNameAllVersions.get(name.toLocaleLowerCase()) || []) {
        if (candidate.common.version === version) {
          entity = candidate;
          break;
        }
      }
    } else {
      entity = this.entitiesByName.get(name.toLocaleLowerCase());
    }

    return entity ?? this.creator(name);
  }

  getVersions(name: string): Version[] {
    return this.entitiesByRealNameAllVersions.get(name.toLocaleLowerCase())?.map((e) => e.common.version) || [];
  }

  getAll(): T[] {
    return Array.from(this.entitiesByRealName.values()).sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? +1 : 0,
    );
  }

  getAllByVersion(version: Version): T[] {
    return [...this.entitiesByRealNameAllVersions.values()]
      .flatMap((v) => v.filter((e) => e.common.version === version))
      .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? +1 : 0));
  }

  getAllVersions(): T[] {
    return Array.from(this.entitiesByRealNameAllVersions.values())
      .flatMap((v) => v)
      .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? +1 : 0));
  }

  getAllByProduct(product: string): T[] {
    return this.getAll().filter((e) => e.product === product);
  }

  getAllByProducts(products: string[]): T[] {
    return this.getAll().filter((e) => products.includes(e.product));
  }

  size(): number {
    return this.entitiesByRealName.size;
  }

  has(name: string, version?: Version): boolean {
    if (version) {
      for (const candidate of this.entitiesByRealNameAllVersions.get(name.toLocaleLowerCase()) || []) {
        if (candidate.common.version === version) {
          return true;
        }
      }

      return false;
    }

    return this.entitiesByName.has(name.toLocaleLowerCase());
  }

  resolve(entities: T[]) {
    do {
      const unresolved: T[] = [];
      for (const entity of entities) {
        if (this.available(entity.common.bases, entity.common.version)) {
          const resolved = entity.resolve(
            entity.common.bases.map((m) => this.get(m.toLocaleLowerCase(), entity.common.version)),
            new Map(),
          );
          this.insertEntity(resolved);
        } else {
          unresolved.push(entity);
        }
      }

      if (unresolved.length > 0 && unresolved.length >= entities.length) {
        throw new Error(
          'There seems to be a loop in the bases for entities (' + unresolved.map((e) => e.toString()) + ')!',
        );
      } else {
        entities = unresolved;
      }
    } while (entities.length > 0);
  }

  public insertEntity(entity: T, reinsert = false) {
    const present = this.entitiesByRealName.get(entity.normalizedName);

    if (!present || entity.common.version.isNewerOrEqual(present.common.version)) {
      this.entitiesByName.set(entity.normalizedName, entity);
      this.entitiesByRealName.set(entity.normalizedName, entity);
    }

    this.insertMultiple(entity);
    this.insertSynonyms(entity, reinsert || !!present);
    this.insertPlural(entity, reinsert || !!present);
  }

  private insertSynonyms(entity: T, reinsert: boolean) {
    for (const synonym of entity.common.synonyms) {
      const synonymName = synonym.toLowerCase();
      if (!reinsert && this.entitiesByName.has(synonymName)) {
        console.warn(
          'Synonym',
          synonymName,
          'already present for',
          this.entitiesByName.get(synonymName)?.name,
          'ignored for',
          entity.name,
        );
      } else {
        this.entitiesByName.set(synonymName, entity);
      }
    }
  }

  private insertPlural(entity: T, reinsert: boolean) {
    const pluralName = entity.common.plural.toLowerCase();
    if (!reinsert && pluralName && pluralName !== entity.normalizedName && this.entitiesByName.has(pluralName)) {
      console.warn(
        'Plural',
        pluralName,
        'already present for',
        this.entitiesByName.get(pluralName)?.name,
        'ignored for',
        entity.name,
      );
    } else {
      this.entitiesByName.set(pluralName, entity);
    }
  }

  private insertMultiple(entity: T) {
    const entities = this.entitiesByRealNameAllVersions.get(entity.normalizedName) || [];
    entities.unshift(entity);
    this.entitiesByRealNameAllVersions.set(entity.normalizedName, entities);
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
