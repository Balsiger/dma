import { GodProto } from '../../proto/generated/template_pb';
import { Entity, EntityType } from './entity';
import { ProductContent } from './product-content';
import { Common } from './values/common';

/** A representation of a god concept. */
export class God extends Entity<God> {
  constructor(common: Common, product: string) {
    super(common, product);
  }

  static fromProto(proto: GodProto, productContent: ProductContent): God {
    return new God(Common.fromProto(proto.getCommon(), productContent, EntityType.trapHazard), productContent.name);
  }

  static create(name: string, bases: string[] = []): God {
    return new God(Common.create(name, EntityType.god), '');
  }

  resolve(bases: God[], values: Map<string, string>): God {
    return new God(
      this.common.resolve(
        bases.map((b) => b.common),
        values,
      ),
      this.product,
    );
  }
}
