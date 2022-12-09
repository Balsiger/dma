import { DamageProto } from '../proto/generated/value_pb';
import { Dice, EMPTY as DICE_EMPTY } from './dice';

export enum DamageType {
  unknown = 'unknown',
  acid = 'acid',
  bludgeoning = 'bludgeoning',
  cold = 'cold',
  fire = 'fire',
  force = 'force',
  lightning = 'lightning',
  necrotic = 'necrotic',
  piercing = 'piercing',
  poison = 'poison',
  psychic = 'psychich',
  radiant = 'radiant',
  slashing = 'slashing',
  thunder = 'thunder',
  bludeoningNonMagical = 'bludgeoning from nonmagical weapon',
  piercingNonMagical = 'piercing from nonmagical weapon',
  slashingNonMagical = 'slashing from nonmagical weapon',
  bludeoningNonMagicalNonSilver = "bludgeoning from nonmagical weapon that aren't silvered",
  piercingNonMagicalNonSilver = "piercing from nonmagical weapon that aren't silvered",
  slashingNonMagicalNonSilver = "slashing from nonmagical weapon that aren't silvered",
  bludeoningNonMagicalNonAdamantine = "bludgeoning from nonmagical weapon that aren't adamantine",
  piercingNonMagicalNonAdamantine = "piercing from nonmagical weapon that aren't adamantine",
  slashingNonMagicalNonAdamantine = "slashing from nonmagical weapon that aren't adamantine",
}

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
    if (this.isBasicDamage()) {
      return new Damage(
        this.damage.multiply(multiplier).addModifier(modifier),
        this.type,
        this.twoHandedDamage?.with(multiplier, modifier)
      );
    }

    return this;
  }

  isBasicDamage() {
    return (
      this.type === DamageType.bludgeoning ||
      this.type === DamageType.piercing ||
      this.type === DamageType.slashing ||
      this.type === DamageType.psychic
    );
  }

  static fromProto(proto: DamageProto | undefined, twoHandedProto?: DamageProto): Damage {
    if (!proto) {
      return EMPTY;
    }

    return new Damage(
      Dice.fromProto(proto.getDamage()),
      Damage.convertType(proto.getType()),
      twoHandedProto ? Damage.fromProto(twoHandedProto) : undefined
    );
  }

  static convertType(proto: number): DamageType {
    switch (proto) {
      case DamageProto.DamageType.ACID:
        return DamageType.acid;
      case DamageProto.DamageType.BLUDGEONING:
        return DamageType.bludgeoning;
      case DamageProto.DamageType.COLD:
        return DamageType.cold;
      case DamageProto.DamageType.FIRE:
        return DamageType.fire;
      case DamageProto.DamageType.FORCE:
        return DamageType.force;
      case DamageProto.DamageType.LIGHTNING:
        return DamageType.lightning;
      case DamageProto.DamageType.NECROTIC:
        return DamageType.necrotic;
      case DamageProto.DamageType.PIERCING:
        return DamageType.piercing;
      case DamageProto.DamageType.POISON:
        return DamageType.poison;
      case DamageProto.DamageType.PSYCHIC:
        return DamageType.psychic;
      case DamageProto.DamageType.RADIANT:
        return DamageType.radiant;
      case DamageProto.DamageType.SLASHING:
        return DamageType.slashing;
      case DamageProto.DamageType.THUNDER:
        return DamageType.thunder;
      case DamageProto.DamageType.BLUDGEONING_NON_MAGICAL:
        return DamageType.bludeoningNonMagical;
      case DamageProto.DamageType.PIERCING_NON_MAGICAL:
        return DamageType.piercingNonMagical;
      case DamageProto.DamageType.SLASHING_NON_MAGICAL:
        return DamageType.slashingNonMagical;
      case DamageProto.DamageType.BLUDGEONING_NON_MAGICAL_NON_SILVER:
        return DamageType.bludeoningNonMagicalNonSilver;
      case DamageProto.DamageType.PIERCING_NON_MAGICAL_NON_SILVER:
        return DamageType.piercingNonMagicalNonSilver;
      case DamageProto.DamageType.SLASHING_NON_MAGICAL_NON_SILVER:
        return DamageType.slashingNonMagicalNonSilver;
      case DamageProto.DamageType.BLUDGEONING_NON_MAGICAL_NON_ADAMANTINE:
        return DamageType.bludeoningNonMagicalNonAdamantine;
      case DamageProto.DamageType.PIERCING_NON_MAGICAL_NON_ADAMANTINE:
        return DamageType.piercingNonMagicalNonAdamantine;
      case DamageProto.DamageType.SLASHING_NON_MAGICAL_NON_ADAMANTINE:
        return DamageType.slashingNonMagicalNonAdamantine;

      default:
        return DamageType.unknown;
    }
  }

  private asString(): string {
    const base = `${this.damage} ${this.type} damage`;
    if (this.twoHandedDamage) {
      return `${base} or ${this.twoHandedDamage.toString()} damage if used with two hands`;
    } else {
      return base;
    }
  }

  private asStringWithAverage(): string {
    const base = `${this.damage.average} (${this.damage}) ${this.type}`;
    if (this.twoHandedDamage) {
      return `${base} or ${
        this.twoHandedDamage.damage.average
      } (${this.twoHandedDamage.toString()}) if used with two hands`;
    } else {
      return base;
    }
  }
}

export const EMPTY = new Damage(DICE_EMPTY, DamageType.unknown);
