import { MonsterProto } from '../../proto/generated/template_pb';
import { Item } from '../things/item';
import { Damage } from './damage';
import { AbilityType } from './enums/ability_type';
import { AttackType } from './enums/attack_type';
import { ValueType } from './enums/value_type';
import { WeaponStyle } from './enums/weapon_style';
import { Size } from './size';
import { EMPTY_MODIFIER_VALUE, Modifier, ModifierValue } from './value';

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
    readonly toHit: ModifierValue,
    readonly special: string
  ) {}

  with(
    source: string,
    proficiency: number,
    strengthModifier: number,
    dexterityModifier: number,
    intelligenceModifier: number,
    spellcastingAbility: AbilityType,
    spellcastingModifier: number
  ): Attack {
    const hitModifiers: Modifier<number>[] = [];
    hitModifiers.push(new Modifier<number>(proficiency, 'Proficienty'));
    const damageModifiers: Modifier<number>[] = [];
    switch (this.type) {
      case AttackType.MELEE_WEAPON:
        hitModifiers.push(new Modifier<number>(strengthModifier, 'Strength'));
        damageModifiers.push(new Modifier<number>(strengthModifier, 'Strength'));
        break;

      case AttackType.RANGED_WEAPON:
        damageModifiers.push(new Modifier<number>(dexterityModifier, 'Dexterity'));
        damageModifiers.push(new Modifier<number>(dexterityModifier, 'Dexterity'));
        break;

      case AttackType.MELEE_SPELL:
      case AttackType.RANGED_SPELL:
        hitModifiers.push(new Modifier<number>(spellcastingModifier, spellcastingAbility.name));
        break;

      case AttackType.MELEE_WEAPON_DEX:
        hitModifiers.push(new Modifier<number>(strengthModifier, 'Dexterity'));
        damageModifiers.push(new Modifier<number>(strengthModifier, 'Dexterity'));
        break;

      case AttackType.MELEE_WEAPON_INT:
        hitModifiers.push(new Modifier<number>(intelligenceModifier, 'Intelligence'));
        damageModifiers.push(new Modifier<number>(intelligenceModifier, 'Intelligence'));
        break;
    }

    const toHit = new ModifierValue(0, source, hitModifiers);
    return new Attack(
      this.name,
      this.type,
      this.reach,
      this.range,
      this.rangeMax,
      this.targets,
      this.canTarget,
      this.hits.map((h) => h.withModifiers(damageModifiers)),
      this.missess.map((h) => h.withModifiers(damageModifiers)),
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
      EMPTY_MODIFIER_VALUE,
      proto.getSpecial()
    );
  }

  static fromItem(
    wielder: string,
    item: Item,
    proficiency: number,
    strengthModifier: number,
    dexterityModifier: number,
    size: Size
  ): Attack {
    if (!item.weapon) {
      return ATTACK_EMPTY;
    }

    const attackModifiers: Modifier<number>[] = [];
    attackModifiers.push(new Modifier<number>(proficiency, 'Proficiency'));
    const damageModifiers: Modifier<number>[] = [];
    if (item.weapon.finesse) {
      if (strengthModifier >= dexterityModifier) {
        attackModifiers.push(new Modifier<number>(strengthModifier, 'Strength (finesse)'));
        damageModifiers.push(new Modifier<number>(strengthModifier, 'Strength (finesse)'));
      } else {
        attackModifiers.push(new Modifier<number>(dexterityModifier, 'Dexterity (finesse)'));
        damageModifiers.push(new Modifier<number>(dexterityModifier, 'Dexterity (finesse)'));
      }
    } else if (item.weapon.style === WeaponStyle.MELEE) {
      attackModifiers.push(new Modifier<number>(strengthModifier, 'Strength'));
      damageModifiers.push(new Modifier<number>(strengthModifier, 'Strength'));
    } else {
      attackModifiers.push(new Modifier<number>(dexterityModifier, 'Dexterity'));
      damageModifiers.push(new Modifier<number>(dexterityModifier, 'Dexterity'));
    }

    if (item.magic) {
      for (const modificator of item.magic.modificators) {
        if (modificator.type === ValueType.ATTACK) {
          attackModifiers.push(new Modifier<number>(modificator.value, item.name));
        }
      }
    }

    return new Attack(
      item.name,
      item.weapon.style === WeaponStyle.MELEE ? AttackType.MELEE_WEAPON : AttackType.RANGED_WEAPON,
      item.weapon.style === WeaponStyle.MELEE ? (item.weapon.reach ? 10 : 5) : 0,
      item.weapon.range,
      item.weapon.rangeMax,
      1,
      true,
      [item.weapon.damage.withMultiplier(size.damageMultiplier).withModifiers(damageModifiers)],
      [],
      new ModifierValue(0, `${wielder} wielding ${item.name}`, attackModifiers),
      item.magic?.attackOptions?.join(' ') || ''
    );
  }
}

const ATTACK_EMPTY = new Attack('', AttackType.UNKNOWN, 0, 0, 0, 0, false, [], [], EMPTY_MODIFIER_VALUE, '');

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
