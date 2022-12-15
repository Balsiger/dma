import { DamageProto } from '../../proto/generated/value_pb';
import { Dice, EMPTY as DICE_EMPTY } from './dice';
import { DamageType } from './enums/damage_type';
import { ModifierValue } from './value';

export class Damage {
  readonly text: string;
  readonly withAverage: string;

  constructor(readonly damage: Dice, readonly type: DamageType, readonly twoHandedDamage?: Damage) {
    this.text = this.asString();
    this.withAverage = this.asStringWithAverage();
  }

  toString(): string {
    return this.text;
  }

  with(multiplier: number, modifier: number): Damage {
    if (this.type.isBasic) {
      return new Damage(
        this.damage.multiply(multiplier).addModifier(modifier),
        this.type,
        this.twoHandedDamage?.with(multiplier, modifier)
      );
    }

    return this;
  }

  withModifier(modifier: ModifierValue): Damage {
    return new Damage(this.damage.addModifier(modifier.total), this.type, this.twoHandedDamage?.withModifier(modifier));
  }

  static fromProto(proto: DamageProto | undefined, twoHandedProto?: DamageProto): Damage {
    if (!proto) {
      return EMPTY;
    }

    return new Damage(
      Dice.fromProto(proto.getDamage()),
      DamageType.fromProto(proto.getType()),
      twoHandedProto ? Damage.fromProto(twoHandedProto) : undefined
    );
  }

  private asString(): string {
    const base = `${this.damage} ${this.type} damage`;
    if (this.twoHandedDamage) {
      return `${base} or ${this.twoHandedDamage} damage if used with two hands`;
    } else {
      return base;
    }
  }

  private asStringWithAverage(): string {
    const base = `${this.damage.average} (${this.damage}) ${this.type}`;
    if (this.twoHandedDamage) {
      return `${base} or ${this.twoHandedDamage.damage.average} (${this.twoHandedDamage}) if used with two hands`;
    } else {
      return base;
    }
  }
}

export const EMPTY = new Damage(DICE_EMPTY, DamageType.UNKNOWN);
