import { GlossaryProto } from '../../../proto/generated/template_pb';
import { Immutable, ImmutableType } from '../immutable/immutable';
import { ProductContent } from '../immutable/product-content';
import { Common } from '../immutable/values/common';
import { GlossaryType } from '../immutable/values/enums/glossary_type';

export class Glossary extends Immutable<Glossary> {
  constructor(
    common: Common,
    product: string,
    readonly type: GlossaryType,
    readonly seeAlso: string[],
    readonly abbreveation: string,
  ) {
    super(common, product);
  }

  static create(name: string, bases: string[] = []): Glossary {
    return new Glossary(Common.create(name, ImmutableType.condition), '', GlossaryType.UNKNOWN, [], '');
  }

  static fromProto(proto: GlossaryProto, productContent: ProductContent) {
    return new Glossary(
      Common.fromProto(proto.getCommon(), productContent, ImmutableType.condition),
      productContent.name,
      GlossaryType.fromProto(proto.getType()),
      proto.getSeeAlsoList(),
      proto.getAbbreviation(),
    );
  }

  override resolve(bases: Glossary[], values: Map<string, string>): Glossary {
    if (bases.length === 0) {
      return this;
    }

    return new Glossary(
      this.common.resolve(
        bases.map((b) => b.common),
        values,
      ),
      this.product,
      this.type,
      this.seeAlso,
      this.abbreveation,
    );
  }
}
