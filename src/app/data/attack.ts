import { MonsterProto } from '../proto/generated/template_pb';
import { Damage, DamageType } from './damage';
import { Dice, EMPTY as DICE_EMPTY } from './dice';

export class Effect {
  constructor(readonly damage: Dice, readonly type: DamageType) {}

  with(modifier: number): Effect {
    if (this.isBasicDamage()) {
      return new Effect(this.damage.addModifier(modifier), this.type);
    }

    return this;
  }

  isBasicDamage() {
    return (
      this.type === DamageType.bludgeoning || this.type === DamageType.piercing || this.type === DamageType.slashing
    );
  }

  static fromProto(proto: MonsterProto.Attack.Effect | undefined): Effect {
    if (!proto) {
      return EFFECT_EMPTY;
    }

    return new Effect(Dice.fromProto(proto.getDamage()), Damage.convertType(proto.getType()));
  }
}

const EFFECT_EMPTY = new Effect(DICE_EMPTY, DamageType.unknown);

export enum AttackType {
  unknown = 'Unknown',
  meleeWeapon = 'Melee Weapon',
  rangedWeapon = 'Ranged Weapon',
}

export class Attack {
  constructor(
    readonly name: string,
    readonly type: AttackType,
    readonly reach: number,
    readonly targets: number,
    readonly canTarget: boolean,
    readonly hits: Effect[],
    readonly missess: Effect[],
    readonly toHit: number = 0
  ) {}

  with(toHitMelee: number, toHitRanged: number, strengthModifier: number, dexterityModifier: number): Attack {
    const toHit = this.type === AttackType.meleeWeapon ? toHitMelee : toHitRanged;
    const modifier = this.type === AttackType.meleeWeapon ? strengthModifier : dexterityModifier;

    return new Attack(
      this.name,
      this.type,
      this.reach,
      this.targets,
      this.canTarget,
      this.hits.map((h) => h.with(modifier)),
      this.missess.map((h) => h.with(modifier)),
      toHit
    );
  }

  static fromProto(proto: MonsterProto.Attack | undefined): Attack {
    if (!proto) {
      return ATTACK_EMPTY;
    }

    return new Attack(
      proto.getName(),
      Attack.convertType(proto.getType()),
      proto.getReachFeet(),
      proto.getTargets(),
      proto.getCanTarget(),
      proto.getHitsList().map((h) => Effect.fromProto(h)),
      proto.getMissesList().map((m) => Effect.fromProto(m))
    );
  }

  private static convertType(proto: number): AttackType {
    switch (proto) {
      case MonsterProto.Attack.Type.MELEE_WEAPON:
        return AttackType.meleeWeapon;
      case MonsterProto.Attack.Type.RANGED_WEAPON:
        return AttackType.rangedWeapon;

      default:
        return AttackType.unknown;
    }
  }
}

const ATTACK_EMPTY = new Attack('', AttackType.unknown, 0, 0, false, [], []);
