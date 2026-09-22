import { EventProto } from '../../../proto/generated/template_pb';
import { ProductContent } from './product-content';
import { Static, StaticType } from './static';
import { Common } from './values/common';

/** A representation of a Event concept. */
export class Event extends Static<Event> {
  constructor(common: Common, product: string) {
    super(common, product);
  }

  static fromProto(proto: EventProto, productContent: ProductContent): Event {
    return new Event(Common.fromProto(proto.getCommon(), productContent, StaticType.trapHazard), productContent.name);
  }

  static create(name: string, bases: string[] = []): Event {
    return new Event(Common.create(name, StaticType.event), '');
  }

  resolve(bases: Event[], values: Map<string, string>): Event {
    return new Event(
      this.common.resolve(
        bases.map((b) => b.common),
        values,
      ),
      this.product,
    );
  }
}
