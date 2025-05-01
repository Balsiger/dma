import { DamageProto } from '../../../proto/generated/value_pb';
import { Dice, EMPTY as DICE_EMPTY } from './dice';
import { DamageType } from './enums/damage_type';
import { Modifier } from './value';

export class Damage {
  readonly text: string;
  readonly withAverage: string;

  constructor(
    readonly damage: Dice,
    readonly type: DamageType,
    readonly twoHandedDamage?: Damage,
  ) {
    this.text = this.asString();
    this.withAverage = this.asStringWithAverage();
  }

  toString(): string {
    return this.text;
  }

  withMultiplier(multiplier: number): Damage {
    if (this.type.isBasic) {
      return new Damage(this.damage.multiply(multiplier), this.type, this.twoHandedDamage?.withMultiplier(multiplier));
    }

    return this;
  }

  withModifiers(modifiers: Modifier<number>[]): Damage {
    // No modifiers for psychic damage.
    if (this.type === DamageType.PSYCHIC) {
      return this;
    }

    return new Damage(this.damage.addModifiers(modifiers), this.type, this.twoHandedDamage?.withModifiers(modifiers));
  }

  static fromProto(proto: DamageProto | undefined, twoHandedProto?: DamageProto): Damage {
    if (!proto) {
      return EMPTY;
    }

    return new Damage(
      Dice.fromProto(proto.getDamage(), 'Damage Modifier'),
      DamageType.fromProto(proto.getType()),
      twoHandedProto ? Damage.fromProto(twoHandedProto) : undefined,
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
