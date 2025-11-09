import { ConditionProto } from '../../proto/generated/template_pb';
import { Entity, EntityType } from '../entities/entity';
import { ProductContent } from '../entities/product-content';
import { Common } from '../entities/values/common';

export class Condition extends Entity<Condition> {
  constructor(common: Common, product: string) {
    super(common, product);
  }

  static create(name: string, bases: string[] = []): Condition {
    return new Condition(Common.create(name, EntityType.condition), '');
  }

  static fromProto(proto: ConditionProto, productContent: ProductContent) {
    return new Condition(
      Common.fromProto(proto.getCommon(), productContent, EntityType.condition),
      productContent.name,
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
