import { GroupProto } from '../../../proto/generated/template_pb';
import { Immutable } from './immutable';
import { ImmutableType } from './Immutable-type';
import { ProductContent } from './product-content';
import { Common } from './values/common';

export class Rank {
  constructor(
    readonly renown: number,
    readonly title: string,
    readonly description: string,
    readonly reward: string,
  ) {}

  static fromProto(proto: GroupProto.Rank): Rank {
    return new Rank(proto.getRenown(), proto.getTitle(), proto.getDescription(), proto.getReward());
  }
}

/** A representation of a Group concept. */
export class Group extends Immutable<Group> {
  constructor(
    common: Common,
    product: string,
    readonly ranks: Rank[],
  ) {
    super(common, product);

    console.log('~~ranks', this.ranks);
  }

  static fromProto(proto: GroupProto, productContent: ProductContent): Group {
    return new Group(
      Common.fromProto(proto.getCommon(), productContent, ImmutableType.group),
      productContent.name,
      proto.getRanksList().map((r) => Rank.fromProto(r)),
    );
  }

  static create(name: string, bases: string[] = []): Group {
    return new Group(Common.create(name, ImmutableType.group), '', []);
  }

  resolve(bases: Group[], values: Map<string, string>): Group {
    return new Group(
      this.common.resolve(
        bases.map((b) => b.common),
        values,
      ),
      this.product,
      this.ranks,
    );
  }
}
