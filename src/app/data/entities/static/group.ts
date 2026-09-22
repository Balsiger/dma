import { GroupProto } from '../../../proto/generated/template_pb';
import { ProductContent } from './product-content';
import { Static, StaticType } from './static';
import { Common } from './values/common';

/** A representation of a Group concept. */
export class Group extends Static<Group> {
  constructor(common: Common, product: string) {
    super(common, product);
  }

  static fromProto(proto: GroupProto, productContent: ProductContent): Group {
    return new Group(Common.fromProto(proto.getCommon(), productContent, StaticType.trapHazard), productContent.name);
  }

  static create(name: string, bases: string[] = []): Group {
    return new Group(Common.create(name, StaticType.group), '');
  }

  resolve(bases: Group[], values: Map<string, string>): Group {
    return new Group(
      this.common.resolve(
        bases.map((b) => b.common),
        values,
      ),
      this.product,
    );
  }
}
