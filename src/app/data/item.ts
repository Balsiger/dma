import { ItemProto } from '../proto/generated/template_pb';
import { Common, Entity } from './entities/entity';
import { Resolve } from './resolve';
import { Size } from './size';
import { ItemSubtype } from './values/item-subtype';
import { ItemType } from './values/item-type';
import { EMPTY as MONEY_EMPTY, Money } from './values/money';
import { Rarity } from './values/rarity';
import { EMPTY as SUBSTANCE_EMPTY, Substance } from './values/substance';
import { EMPTY as WEIGHT_EMPTY, Weight } from './values/weight';

export class Item extends Entity<Item> {
  readonly armorClass: number;
  readonly hitPoints: number;

  constructor(
    common: Common,
    readonly type: ItemType,
    readonly subtype: ItemSubtype,
    readonly size: Size,
    readonly value: Money,
    readonly weight: Weight,
    readonly monetary: boolean,
    armor_class: number,
    hit_points: number,
    readonly substance: Substance,
    readonly fragile: boolean,
    readonly probability: Rarity
  ) {
    super(common);

    this.armorClass = armor_class || substance.material.armorClass;
    this.hitPoints = hit_points || fragile ? size.hitPointsFragile : size.hitPoints;
  }

  static create(name: string): Item {
    return new Item(
      Common.create(name),
      ItemType.UNKNOWN,
      ItemSubtype.UNKNOWN,
      Size.UNKNOWN,
      MONEY_EMPTY,
      WEIGHT_EMPTY,
      false,
      0,
      0,
      SUBSTANCE_EMPTY,
      false,
      Rarity.UNKNOWN
    );
  }

  static fromProto(proto: ItemProto): Item {
    return new Item(
      Common.fromProto(proto.getCommon()),
      ItemType.fromProto(proto.getType()),
      ItemSubtype.fromProto(proto.getSubtype()),
      Size.fromProto(proto.getSize()),
      Money.fromProto(proto.getValue()),
      Weight.fromProto(proto.getWeight()),
      proto.getMonetary(),
      proto.getArmorClass(),
      proto.getHitPoints(),
      Substance.fromProto(proto.getSubstance()),
      proto.getFragile(),
      Rarity.fromProto(proto.getRarity())
    );
  }

  resolve(bases: Item[]): Item {
    if (bases.length === 0) {
      return this;
    }

    return new Item(
      this.common,
      this.type.resolve(bases.map((i) => i.type)),
      this.subtype.resolve(bases.map((i) => i.subtype)),
      this.size.resolve(bases.map((i) => i.size)),
      this.value.resolve(bases.map((i) => i.value)),
      this.weight.resolve(bases.map((i) => i.weight)),
      Resolve.firstDefined(
        this.monetary,
        bases.map((i) => i.monetary)
      ),
      Resolve.max(
        this.armorClass,
        bases.map((i) => i.armorClass)
      ),
      Resolve.max(
        this.hitPoints,
        bases.map((i) => i.hitPoints)
      ),
      this.substance.resolve(bases.map((i) => i.substance)),
      Resolve.firstDefined(
        this.fragile,
        bases.map((i) => i.fragile)
      ),
      this.probability.resolve(bases.map((i) => i.probability))
    );
  }
}
