import { ParametrizedProto } from '../../proto/generated/template_pb';
import { Entities } from './entities';
import { Entity } from './entity';

export class Parametrized<E extends Entity<E>> {
  constructor(
    readonly name: string,
    readonly count: number,
    readonly bases: string[],
    readonly values: Map<string, string>,
    readonly entity: E,
  ) {}

  static fromProto<T extends Entity<T>>(proto: ParametrizedProto, entity: T, entities: Entities<T>): Parametrized<T> {
    const values = new Map<string, string>(proto.getValuesList().map((v) => [v.getKey(), v.getValue()]));

    return new Parametrized<T>(
      proto.getName(),
      proto.getCount(),
      proto.getBasesList(),
      values,
      entity.deriveWithValues(proto.getBasesList(), values, entities),
    );
  }
}
