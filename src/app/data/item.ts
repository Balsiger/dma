import { ItemProto } from '../proto/generated/template_pb';
import { Common, Entity } from './entities/entity';
import { Size } from './size';
import { EMPTY as MONEY_EMPTY, Money } from './values/money';
import { Probability } from './values/probability';
import { EMPTY as SUBSTANCE_EMPTY, Substance } from './values/substance';
import { EMPTY as WEIGHT_EMPTY, Weight } from './values/weight';

export class Item extends Entity<Item> {
  readonly armorClass: number;
  readonly hitPoints: number;

  constructor(
    common: Common,
    readonly size: Size,
    readonly value: Money,
    readonly weight: Weight,
    readonly monetary: boolean,
    armor_class: number,
    hit_points: number,
    readonly substance: Substance,
    readonly fragile: boolean,
    readonly probability: Probability
  ) {
    super(common);

    this.armorClass = armor_class || substance.material.armorClass;
    this.hitPoints = hit_points || fragile ? size.hitPointsFragile : size.hitPoints;
  }

  static create(name: string): Item {
    return new Item(
      Common.create(name),
      Size.UNKNOWN,
      MONEY_EMPTY,
      WEIGHT_EMPTY,
      false,
      0,
      0,
      SUBSTANCE_EMPTY,
      false,
      Probability.UNKNOWN
    );
  }

  static fromProto(proto: ItemProto): Item {
    return new Item(
      Common.fromProto(proto.getCommon()),
      Size.fromProto(proto.getSize()),
      Money.fromProto(proto.getValue()),
      Weight.fromProto(proto.getWeight()),
      proto.getMonetary(),
      proto.getArmorClass(),
      proto.getHitPoints(),
      Substance.fromProto(proto.getSubstance()),
      proto.getFragile(),
      Probability.fromProto(proto.getProbability())
    );
  }

  resolve(bases: Item[]): Item {
    if (bases.length === 0) {
      return this;
    }

    let size = this.size;
    let value = this.value;
    let weight = this.weight;
    let monetary = this.monetary;
    let armorClass = this.armorClass;
    let hitPoints = this.hitPoints;
    let substance = this.substance;
    let fragile = this.fragile;
    let probability = this.probability;

    for (const base of bases) {
      if (size === Size.UNKNOWN) {
        size = base.size;
      }

      if (value.empty) {
        value = base.value;
        monetary = base.monetary;
      }

      if (weight.empty) {
        weight = base.weight;
      }

      if (substance.empty) {
        substance = base.substance;
        fragile = base.fragile;
      }

      if (probability === Probability.UNKNOWN) {
        probability = base.probability;
      }
    }

    return new Item(this.common, size, value, weight, monetary, armorClass, hitPoints, substance, fragile, probability);
  }
}
