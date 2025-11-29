import { AdventureProto } from '../../proto/generated/template_pb';
import { Entity, EntityType } from './entity';
import { ProductContent } from './product-content';
import { Common } from './values/common';

/** A representation of an adventure concept. */
export class AdventureEntity extends Entity<AdventureEntity> {
  constructor(
    common: Common,
    product: string,
    readonly levels: string,
    readonly products: string[],
  ) {
    super(common, product);
  }

  static fromProto(proto: AdventureProto, productContent: ProductContent): AdventureEntity {
    return new AdventureEntity(
      Common.fromProto(proto.getCommon(), productContent, EntityType.adventure),
      productContent.name,
      proto.getLevels() || '',
      proto.getProductsList(),
    );
  }

  static create(name: string, bases: string[] = []): AdventureEntity {
    return new AdventureEntity(Common.create(name, EntityType.adventure), '', '', []);
  }

  resolve(bases: AdventureEntity[], values: Map<string, string>): AdventureEntity {
    return new AdventureEntity(
      this.common.resolve(
        bases.map((b) => b.common),
        values,
      ),
      this.product,
      this.levels,
      this.products,
    );
  }
}
