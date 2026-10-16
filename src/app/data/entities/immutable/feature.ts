import { FeatureProto } from '../../../proto/generated/template_pb';
import { Immutable } from './immutable';
import { ImmutableType } from './Immutable-type';
import { ProductContent } from './product-content';
import { Common } from './values/common';
import { Duration, EMPTY as EMPTY_DURATION } from './values/duration';
import { Blocker } from './values/enums/blocker';
import { CharacterClass } from './values/enums/character-class';
import { CharacterSubclass } from './values/enums/character-subclass';
import { FeatureType } from './values/enums/feature-type';
import { Prerequisite } from './values/enums/prerequisite';
import { Trigger } from './values/enums/trigger';

/** A representation of a Feature concept. */
export class Feature extends Immutable<Feature> {
  constructor(
    common: Common,
    product: string,
    readonly type: FeatureType,
    readonly classes: CharacterClass[],
    readonly subclasses: CharacterSubclass[],
    readonly duration: Duration,
    readonly prerequisites: Prerequisite[],
    readonly blockers: Blocker[],
    readonly triggers: Trigger[],
  ) {
    super(common, product);
  }

  static fromProto(proto: FeatureProto, productContent: ProductContent): Feature {
    return new Feature(
      Common.fromProto(proto.getCommon(), productContent, ImmutableType.feature),
      productContent.name,
      FeatureType.fromProto(proto.getType()),
      proto.getClassesList().map((c) => CharacterClass.fromProto(c)),
      proto.getSubclassesList().map((c) => CharacterSubclass.fromProto(c)),
      Duration.fromProto(proto.getDuration()),
      proto.getPrerequisitesList().map((p) => Prerequisite.fromProto(p)),
      proto.getBlockersList().map((b) => Blocker.fromProto(b)),
      proto.getTriggersList().map((b) => Trigger.fromProto(b)),
    );
  }

  static create(name: string, bases: string[] = []): Feature {
    return new Feature(
      Common.create(name, ImmutableType.feature),
      '',
      FeatureType.UNKNOWN,
      [],
      [],
      EMPTY_DURATION,
      [],
      [],
      [],
    );
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
      this.subclasses,
      this.duration,
      this.prerequisites,
      this.blockers,
      this.triggers,
    );
  }
}
