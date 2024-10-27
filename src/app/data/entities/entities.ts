import { Entity } from './entity';

export class Entities<T extends Entity<T>> {
  protected readonly entitiesByName = new Map<string, T>();
  // These are the entities by the real name given in the proto, excluding synonyms and plurals.
  protected readonly entitiesByRealName = new Map<string, T>();

  constructor(private readonly creator: (name: string) => T) {}

  get(name: string): T {
    const entity = this.entitiesByName.get(name.toLocaleLowerCase());
    if (!entity) {
      return this.creator(name);
    }

    return entity;
  }

  getAll(): T[] {
    return Array.from(this.entitiesByRealName.values()).sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? +1 : 0,
    );
  }

  has(name: string): boolean {
    return this.entitiesByName.has(name.toLocaleLowerCase());
  }

  resolve(entities: T[]) {
    do {
      const unresolved: T[] = [];
      for (const entity of entities) {
        if (this.available(entity.common.bases)) {
          const resolved = entity.resolve(
            entity.common.bases.map((m) => this.entitiesByName.get(m.toLocaleLowerCase())!),
            new Map(),
          );
          this.insertEntity(resolved);
        } else {
          unresolved.push(entity);
        }
      }

      if (unresolved.length > 0 && unresolved.length >= entities.length) {
        throw new Error(
          'There seems to be a loop in the bases for entities (' +
            this.constructor.name +
            ', ' +
            unresolved.map((e) => e.toString()) +
            ')!',
        );
      } else {
        entities = unresolved;
      }
    } while (entities.length > 0);
  }

  public insertEntity(entity: T, reinsert = false) {
    this.entitiesByName.set(entity.name.toLocaleLowerCase(), entity);
    this.entitiesByRealName.set(entity.name.toLocaleLowerCase(), entity);
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
    const pluralName = entity.common.plural.toLowerCase();
    if (
      !reinsert &&
      pluralName &&
      pluralName !== entity.name.toLocaleLowerCase() &&
      this.entitiesByName.has(pluralName)
    ) {
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

  private available(names: string[]): boolean {
    for (const name of names) {
      if (!this.entitiesByName.has(name.toLocaleLowerCase())) {
        return false;
      }
    }

    return true;
  }
}
