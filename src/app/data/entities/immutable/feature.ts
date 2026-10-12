import { FeatureProto } from '../../../proto/generated/template_pb';
import { Immutable } from './immutable';
import { ImmutableType } from './Immutable-type';
import { ProductContent } from './product-content';
import { Common } from './values/common';
import { CharacterClass } from './values/enums/character-class';
import { FeatureType } from './values/enums/feature-type';

/** A representation of a Feature concept. */
export class Feature extends Immutable<Feature> {
  constructor(
    common: Common,
    product: string,
    readonly type: FeatureType,
    readonly classes: CharacterClass[],
  ) {
    super(common, product);
  }

  static fromProto(proto: FeatureProto, productContent: ProductContent): Feature {
    return new Feature(
      Common.fromProto(proto.getCommon(), productContent, ImmutableType.feature),
      productContent.name,
      FeatureType.fromProto(proto.getType()),
      proto.getClassesList().map((c) => CharacterClass.fromProto(c)),
    );
  }

  static create(name: string, bases: string[] = []): Feature {
    return new Feature(Common.create(name, ImmutableType.feature), '', FeatureType.UNKNOWN, []);
  }

  resolve(bases: Feature[], values: Map<string, string>): Feature {
    return new Feature(
      this.common.resolve(
        bases.map((b) => b.common),
        values,
      ),
      this.product,
      this.type,
      this.classes,
    );
  }
}
