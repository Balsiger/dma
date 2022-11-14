import { Entity } from '../data/entities/entity';
import { ProtoRpc } from '../net/ProtoRpc';
import { Resolvers } from './resolvers';

export abstract class EntityService<T extends Entity<T>, P> {
  protected readonly entitiesByName = new Map<string, T>();
  private loading?: boolean;
  private readonly resolvers = new Resolvers<void>();

  constructor(
    private readonly path: string,
    private readonly creator: (name: string) => T,
    private readonly rpc: ProtoRpc<P>,
    private readonly deserializer?: (proto: P) => T[],
    private readonly asyncDeserializer?: (proto: P) => Promise<T>[]
  ) {}

  async get(name: string): Promise<T> {
    await this.fetch();
    const entity = this.entitiesByName.get(name.toLocaleLowerCase());
    if (!entity) {
      return this.creator(name);
    }

    return entity;
  }

  async has(name: string): Promise<boolean> {
    await this.fetch();
    return this.entitiesByName.has(name.toLocaleLowerCase());
  }

  protected async fetch() {
    if (this.loading === false) {
      return;
    }

    if (this.loading === true) {
      return this.resolvers.create();
    }

    this.loading = true;

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
          this.entitiesByName.set(
            entity.name.toLocaleLowerCase(),
            entity.resolve(
              entity.common.bases.map((m) => this.entitiesByName.get(m.toLocaleLowerCase())!),
              new Map()
            )
          );
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

    this.resolvers.resolve();
    this.loading = false;
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
