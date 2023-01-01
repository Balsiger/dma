import { MonsterProto } from '../../proto/generated/template_pb';
import { Item } from '../things/item';
import { Damage } from './damage';
import { AttackType } from './enums/attack_type';
import { WeaponStyle } from './enums/weapon_style';
import { Size } from './size';
import { Modifier } from './value';

export class Attack {
  constructor(
    readonly name: string,
    readonly type: AttackType,
    readonly reach: number,
    readonly range: number,
    readonly rangeMax: number,
    readonly targets: number,
    readonly canTarget: boolean,
    readonly hits: Damage[],
    readonly missess: Damage[],
    readonly toHit: number = 0,
    readonly special: string
  ) {}

  with(
    toHitMelee: number,
    toHitRanged: number,
    toHitSpell: number,
    strengthModifier: number,
    dexterityModifier: number,
    intelligenceModifier: number
  ): Attack {
    let toHit = 0;
    let modifiers: Modifier<number>[] = [];
    switch (this.type) {
      case AttackType.MELEE_WEAPON:
        toHit = toHitMelee;
        modifiers.push(new Modifier<number>(strengthModifier, 'Strength'));
        break;

      case AttackType.RANGED_WEAPON:
        toHit = toHitRanged;
        modifiers.push(new Modifier<number>(strengthModifier, 'Strength'));
        break;

      case AttackType.MELEE_SPELL:
      case AttackType.RANGED_SPELL:
        toHit = toHitSpell;
        break;

      case AttackType.MELEE_WEAPON_DEX:
        toHit = toHitRanged;
        modifiers.push(new Modifier<number>(strengthModifier, 'Dexterity'));
        break;

      case AttackType.MELEE_WEAPON_INT:
        toHit = toHitSpell;
        modifiers.push(new Modifier<number>(strengthModifier, 'Intelligence'));
        break;
    }

    return new Attack(
      this.name,
      this.type,
      this.reach,
      this.range,
      this.rangeMax,
      this.targets,
      this.canTarget,
      this.hits.map((h) => h.withModifiers(modifiers)),
      this.missess.map((h) => h.withModifiers(modifiers)),
      toHit,
      this.special
    );
  }

  static fromProto(proto: MonsterProto.Attack | undefined): Attack {
    if (!proto) {
      return ATTACK_EMPTY;
    }

    return new Attack(
      proto.getName(),
      AttackType.fromProto(proto.getType()),
      proto.getReachFeet(),
      proto.getRangeFeet(),
      proto.getRangeMaxFeet(),
      proto.getTargets(),
      proto.getCanTarget(),
      proto.getHitsList().map((h) => Damage.fromProto(h)),
      proto.getMissesList().map((m) => Damage.fromProto(m)),
      0,
      proto.getSpecial()
    );
  }

  static fromItem(
    item: Item,
    toHitMelee: number,
    toHitRanged: number,
    strengthModifier: number,
    dexterityModifier: number,
    size: Size
  ): Attack {
    if (!item.weapon) {
      return ATTACK_EMPTY;
    }

    let toHit = 0;
    let modifiers: Modifier<number>[] = [];
    let damageModifier = 0;
    if (item.weapon.finesse) {
      toHit = Math.max(toHitMelee, toHitRanged);
      if (strengthModifier >= dexterityModifier) {
        modifiers.push(new Modifier<number>(strengthModifier, 'Strength (finesse)'));
      } else {
        modifiers.push(new Modifier<number>(dexterityModifier, 'Dexterity (finesse)'));
      }
    } else if (item.weapon.style === WeaponStyle.MELEE) {
      toHit = toHitMelee;
      modifiers.push(new Modifier<number>(strengthModifier, 'Strength'));
    } else {
      toHit = toHitRanged;
      modifiers.push(new Modifier<number>(dexterityModifier, 'Dexterity'));
    }

    return new Attack(
      item.name,
      item.weapon.style === WeaponStyle.MELEE ? AttackType.MELEE_WEAPON : AttackType.RANGED_WEAPON,
      item.weapon.style === WeaponStyle.MELEE ? (item.weapon.reach ? 10 : 5) : 0,
      item.weapon.range,
      item.weapon.rangeMax,
      1,
      true,
      [item.weapon.damage.withMultiplier(size.damageMultiplier).withModifiers(modifiers)],
      [],
      toHit,
      ''
    );
  }
}

const ATTACK_EMPTY = new Attack('', AttackType.UNKNOWN, 0, 0, 0, 0, false, [], [], 0, '');

export class MultiattackOr {
  constructor(readonly attacks: MultiattackAnd[]) {}
}

export class MultiattackAnd {
  constructor(readonly number: number, readonly name: string) {}
}

export class Multiattack {
  readonly totalAttacks: number;

  constructor(readonly attacksOr: MultiattackOr[]) {
    if (attacksOr.length == 1) {
      let total = 0;
      for (const attack of attacksOr[0].attacks) {
        total += attack.number;
      }
      this.totalAttacks = total;
    } else {
      this.totalAttacks = 0;
    }
  }

  static fromProto(proto?: MonsterProto.Multiattack): Multiattack {
    if (proto) {
      return new Multiattack(
        proto
          .getAttacksOrList()
          .map(
            (a) =>
              new MultiattackOr(a.getAttacksAndList().map((aa) => new MultiattackAnd(aa.getNumber(), aa.getName())))
          )
      );
    }

    return MULTIATTACK_EMPTY;
  }
}

export const MULTIATTACK_EMPTY = new Multiattack([]);
