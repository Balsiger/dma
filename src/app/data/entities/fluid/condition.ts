import { ConditionProto } from '../../../proto/generated/template_pb';
import { Immutable, ImmutableType } from '../immutable/immutable';
import { ProductContent } from '../immutable/product-content';
import { Common } from '../immutable/values/common';

export class Condition extends Immutable<Condition> {
  constructor(common: Common, product: string) {
    super(common, product);
  }

  static create(name: string, bases: string[] = []): Condition {
    return new Condition(Common.create(name, ImmutableType.condition), '');
  }

  static fromProto(proto: ConditionProto, productContent: ProductContent) {
    return new Condition(
      Common.fromProto(proto.getCommon(), productContent, ImmutableType.condition),
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
