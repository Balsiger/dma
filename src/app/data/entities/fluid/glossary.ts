import { GlossaryProto } from '../../../proto/generated/template_pb';
import { Common } from '..//static/values/common';
import { ProductContent } from '../static/product-content';
import { Static, StaticType } from '../static/static';
import { GlossaryType } from '../static/values/enums/glossary_type';

export class Glossary extends Static<Glossary> {
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
    return new Glossary(Common.create(name, StaticType.condition), '', GlossaryType.UNKNOWN, [], '');
  }

  static fromProto(proto: GlossaryProto, productContent: ProductContent) {
    return new Glossary(
      Common.fromProto(proto.getCommon(), productContent, StaticType.condition),
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
