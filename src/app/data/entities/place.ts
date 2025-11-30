import { PlaceProto } from '../../proto/generated/template_pb';
import { Entity, EntityType } from './entity';
import { ProductContent } from './product-content';
import { Common } from './values/common';

/** A representation of a Place concept. */
export class Place extends Entity<Place> {
  constructor(common: Common, product: string) {
    super(common, product);
  }

  static fromProto(proto: PlaceProto, productContent: ProductContent): Place {
    return new Place(Common.fromProto(proto.getCommon(), productContent, EntityType.trapHazard), productContent.name);
  }

  static create(name: string, bases: string[] = []): Place {
    return new Place(Common.create(name, EntityType.place), '');
  }

  resolve(bases: Place[], values: Map<string, string>): Place {
    return new Place(
      this.common.resolve(
        bases.map((b) => b.common),
        values,
      ),
      this.product,
    );
  }
}
