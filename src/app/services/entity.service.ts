import { Entity } from '../data/entities/entity';
import { ProtoRpc } from '../net/ProtoRpc';
import { Loading } from './loading';

export abstract class EntityService<T extends Entity<T>, P> extends Loading {
  protected readonly entitiesByName = new Map<string, T>();

  constructor(
    private readonly path: string,
    private readonly creator: (name: string) => T,
    private readonly rpc: ProtoRpc<P>,
    private readonly deserializer?: (proto: P) => T[],
    private readonly asyncDeserializer?: (proto: P) => Promise<T>[]
  ) {
    super();
  }

  async get(name: string): Promise<T> {
    await this.load();
    const entity = this.entitiesByName.get(name.toLocaleLowerCase());
    if (!entity) {
      return this.creator(name);
    }

    return entity;
  }

  async has(name: string): Promise<boolean> {
    await this.load();
    return this.entitiesByName.has(name.toLocaleLowerCase());
  }

  protected async doLoad() {
    const proto = await this.rpc.fetch(this.path);
    let entities: T[] = [];
    if (this.deserializer) {
      entities = this.deserializer(proto);
    } else if (this.asyncDeserializer) {
      entities = await Promise.all(this.asyncDeserializer(proto));
    }

    do {
      const unresolved: T[] = [];
      for (const entity of entities) {
        if (this.available(entity.common.bases)) {
          const resolved = entity.resolve(
            entity.common.bases.map((m) => this.entitiesByName.get(m.toLocaleLowerCase())!),
            new Map()
          );
          this.entitiesByName.set(entity.name.toLocaleLowerCase(), resolved);
          for (const synonym of resolved.common.synonyms) {
            const synonymName = synonym.toLowerCase();
            if (this.entitiesByName.has(synonymName)) {
              console.warn('Synonym', synonymName, 'already present, ignored');
            } else {
              this.entitiesByName.set(synonymName, resolved);
            }
          }
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
            ')!'
        );
      } else {
        entities = unresolved;
      }
    } while (entities.length > 0);
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
