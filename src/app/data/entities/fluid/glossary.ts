import { GlossaryProto } from '../../../proto/generated/template_pb';
import { Common } from '..//static/values/common';
import { Entity, EntityType } from '../static/entity';
import { ProductContent } from '../static/product-content';
import { GlossaryType } from '../static/values/enums/glossary_type';

export class Glossary extends Entity<Glossary> {
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
    return new Glossary(Common.create(name, EntityType.condition), '', GlossaryType.UNKNOWN, [], '');
  }

  static fromProto(proto: GlossaryProto, productContent: ProductContent) {
    return new Glossary(
      Common.fromProto(proto.getCommon(), productContent, EntityType.condition),
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
