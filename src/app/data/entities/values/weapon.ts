import { WeaponProto } from '../../../proto/generated/template_pb';
import { Resolve } from '../../resolve';
import { Damage, EMPTY as EMPTY_DAMAGE } from './damage';
import { WeaponProficiency } from './enums/weapon_proficiency';
import { WeaponProperty } from './enums/weapon_property';
import { WeaponStyle } from './enums/weapon_style';
import { WeaponType } from './enums/weapon_type';
import { ModifierValue } from './value';

/** The part of an item entity if said item is a weapon. */
export class Weapon {
  readonly subTitles: string[] = [];
  readonly versatile: boolean;
  readonly reach: boolean;
  readonly finesse: boolean;

  constructor(
    readonly proficiency: WeaponProficiency,
    readonly style: WeaponStyle,
    readonly type: WeaponType,
    readonly damage: Damage,
    readonly range: number,
    readonly rangeMax: number,
    readonly properties: WeaponProperty[],
  ) {
    if (proficiency !== WeaponProficiency.UNKNOWN) {
      this.subTitles.push(proficiency.name);
    }

    if (style !== WeaponStyle.UNKNOWN) {
      this.subTitles.push(style.name);
    }

    if (type !== WeaponType.UNKNOWN) {
      this.subTitles.push(type.name);
    }

    this.versatile = properties.indexOf(WeaponProperty.VERSATILE) >= 0;
    this.reach = properties.indexOf(WeaponProperty.REACH) >= 0;
    this.finesse = properties.indexOf(WeaponProperty.FINESSE) >= 0;
  }

  withDamageModifier(modifier: ModifierValue): Weapon {
    return new Weapon(
      this.proficiency,
      this.style,
      this.type,
      this.damage.withModifiers(modifier.modifiers),
      this.range,
      this.rangeMax,
      this.properties,
    );
  }

  resolve(bases: Weapon[]): Weapon {
    if (!bases.length) {
      return this;
    }

    return new Weapon(
      Resolve.firstDefined(
        this.proficiency,
        bases.map((w) => w.proficiency),
        (p) => !!p && p !== WeaponProficiency.UNKNOWN,
      ),
      Resolve.firstDefined(
        this.style,
        bases.map((w) => w.style),
        (s) => !!s && s !== WeaponStyle.UNKNOWN,
      ),
      Resolve.firstDefined(
        this.type,
        bases.map((w) => w.type),
        (t) => !!t && t !== WeaponType.UNKNOWN,
      ),
      Resolve.firstDefined(
        this.damage,
        bases.map((w) => w.damage),
        (d) => !!d && d !== EMPTY_DAMAGE,
      ),
      Resolve.max(
        this.range,
        bases.map((w) => w.range),
      ),
      Resolve.max(
        this.rangeMax,
        bases.map((w) => w.rangeMax),
      ),
      Resolve.dedupe(
        this.properties,
        bases.map((w) => w.properties),
      ),
    );
  }

  static fromProto(proto: WeaponProto | undefined): Weapon | undefined {
    if (!proto) {
      return undefined;
    }

    return new Weapon(
      WeaponProficiency.fromProto(proto.getProficiency()),
      WeaponStyle.fromProto(proto.getStyle()),
      WeaponType.fromProto(proto.getType()),
      Damage.fromProto(proto.getDamage(), proto.getDamageTwoHanded()),
      proto.getRangeFeet(),
      proto.getRangeMaxFeet(),
      proto.getPropertiesList().map((p) => WeaponProperty.fromProto(p)),
    );
  }
}

export const EMPTY = new Weapon(
  WeaponProficiency.UNKNOWN,
  WeaponStyle.UNKNOWN,
  WeaponType.UNKNOWN,
  EMPTY_DAMAGE,
  0,
  0,
  [],
);
