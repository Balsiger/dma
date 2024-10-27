import { Loading } from '../../common/loading';
import { Entities } from '../../data/entities/entities';
import { Entity } from '../../data/entities/entity';
import { ProtoRpc } from '../../net/ProtoRpc';

export abstract class EntityService<T extends Entity<T>, P> extends Loading {
  private entities?: Entities<T>;

  protected readonly entitiesByName = new Map<string, T>();
  // These are the entities by the real name given in the proto, excluding synonyms and plurals.
  protected readonly entitiesByRealName = new Map<string, T>();

  constructor(
    private readonly path: string,
    private readonly creator: (name: string) => T,
    private readonly rpc: ProtoRpc<P>,
    private readonly deserializer?: (proto: P) => T[],
    private readonly asyncDeserializer?: (proto: P) => Promise<T>[],
  ) {
    super();
  }

  async get(name: string): Promise<T> {
    await this.load();
    return this.entities!.get(name);
  }

  async getAll(): Promise<T[]> {
    await this.load();
    return this.entities!.getAll();
  }

  async has(name: string): Promise<boolean> {
    await this.load();
    return this.entities!.has(name);
  }

  protected async doLoad() {
    const proto = await this.rpc.fetch(this.path);
    let entities: T[] = [];
    if (this.deserializer) {
      entities = this.deserializer(proto);
    } else if (this.asyncDeserializer) {
      entities = await Promise.all(this.asyncDeserializer(proto));
    }

    this.entities = new Entities(this.creator);
    this.entities.resolve(entities);
  }

  protected insertEntity(entity: T, reinsert = false) {
    this.entities?.insertEntity(entity, reinsert);
  }
}
