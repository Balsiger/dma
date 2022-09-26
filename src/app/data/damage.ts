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
}

export class Damage {
  readonly text: string;

  constructor(readonly damage: Dice, readonly type: DamageType) {
    this.text = this.asString();
  }

  toString(): string {
    return this.text;
  }

  with(modifier: number): Damage {
    if (this.isBasicDamage()) {
      return new Damage(this.damage.addModifier(modifier), this.type);
    }

    return this;
  }

  isBasicDamage() {
    return (
      this.type === DamageType.bludgeoning || this.type === DamageType.piercing || this.type === DamageType.slashing
    );
  }

  static fromProto(proto: DamageProto | undefined): Damage {
    if (!proto) {
      return EMPTY;
    }

    return new Damage(Dice.fromProto(proto.getDamage()), Damage.convertType(proto.getType()));
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

      default:
        return DamageType.unknown;
    }
  }

  private asString(): string {
    return `${this.damage} ${this.type}`;
  }
}

const EMPTY = new Damage(DICE_EMPTY, DamageType.unknown);
