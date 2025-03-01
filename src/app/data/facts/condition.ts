import { ConditionProto } from '../../proto/generated/template_pb';
import { Entity, EntityType } from '../entities/entity';
import { Common } from '../entities/values/common';
import { Version } from '../entities/values/enums/version';
import { EMPTY as REFERENCE_EMPTY } from '../entities/values/reference';

export class Condition extends Entity<Condition> {
  constructor(common: Common, product: string) {
    super(common, product);
  }

  static create(name: string, bases: string[] = []): Condition {
    return new Condition(
      new Common(
        name,
        name + 's',
        bases,
        [],
        '',
        '',
        [],
        REFERENCE_EMPTY,
        [],
        EntityType.condition,
        Version.DND_5_24,
        false,
      ),
      '',
    );
  }

  static fromProto(proto: ConditionProto, productName: string, productId: string) {
    return new Condition(
      Common.fromProto(proto.getCommon(), productName, productId, EntityType.condition),
      productName,
    );
  }

  override resolve(bases: Condition[], values: Map<string, string>): Condition {
    if (bases.length === 0) {
      return this;
    }

    return new Condition(
      this.common.resolve(
        bases.map((b) => b.common),
        values,
      ),
      this.product,
    );
  }
}
