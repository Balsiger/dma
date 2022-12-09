import { ArmorProto, ItemProto, WeaponProto } from '../proto/generated/template_pb';
import { ItemService } from '../services/item.service';
import { Damage, EMPTY as EMPTY_DAMAGE } from './damage';
import { Common, Entity } from './entities/entity';
import { EMPTY as REFERENCES_EMPTY } from './references';
import { Resolve } from './resolve';
import { Size } from './size';
import { ItemSubtype } from './values/item-subtype';
import { ItemType } from './values/item-type';
import { EMPTY as MONEY_EMPTY, Money } from './values/money';
import { Rarity } from './values/rarity';
import { EMPTY as SUBSTANCE_EMPTY, Substance } from './values/substance';
import { EMPTY as WEIGHT_EMPTY, Weight } from './values/weight';

const AMMUNITION =
  'You can use a w eapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack. At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield.\nIf you use a weapon that has the ammunition property   to make a melee attack, you treat the weapon as an improvised weapon (see "Improvised Weapons" later in the section). A sling must be loaded to deal any damage when used in this way.';
const FINESSE =
  'When making an attack with a finesse weapon, you use your choice o f your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.';
const HEAVY =
  "Small creatures have disadvantage on attack rolls with heavy weapons. A heavy weapon's size and bulk make it too large for a Sm all creature to use effectively.";
const LIGHT =
  'A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons. See the rules for two-weapon fighting in chapter 9.';
const LOADING =
  'Because of the time required to load this weapon, you can fire only one piece of ammunition from it when you use an action, bonus action, or reaction to fire it, regardless of the number of attacks you can normally make.';
const RANGE =
  "A weapon that can be used to make a ranged attack has a range show n in parentheses after the ammunition or thrown property. The range lists two numbers. The first is the weapon's norm al range in feet, and the second indicates the weapon's maximum range. When attacking a target beyond normal range, you have disadvantage on the attack roll. You can't attack a target beyond the weapon's long range.";
const REACH = 'This weapon adds 5 feet to your reach when you attack with it.';
const SPECIAL =
  "A weapon with the special property has unusual rules governing its use, explained in the weapon's description.";
const THROWN =
  'If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use either your Strength or your Dexterity, since the dagger has the finesse property.';
const TWO_HANDED = 'This w eapon requires two hands to use.';
const VERSATILE = 'This weapon can be used with one or two hands.';

export enum WeaponProficiency {
  unknown = 'Unknown',
  simple = 'Simple',
  martial = 'Martial',
}

export enum WeaponStyle {
  unknown = 'Unknown',
  melee = 'Melee',
  ranged = 'Ranged',
}

export enum WeaponType {
  unknown = 'Unknown',
  sword = 'Sword',
  pick = 'Pick',
  staff = 'Staff',
  bow = 'Bow',
  polearm = 'Polearm',
  whip = 'Whip',
  crossbow = 'Crossbow',
  club = 'Club',
  spear = 'Spear',
  axe = 'Axe',
  firearm = 'Firearm',
  sling = 'Sling',
  dart = 'Dart',
  net = 'Net',
}

export enum WeaponProperty {
  unknown = 'Unknown',
  ammunition = 'Ammunition',
  finesse = 'Finesse',
  heavy = 'Heavy',
  light = 'Light',
  loading = 'Loading',
  range = 'Range',
  reach = 'Reach',
  special = 'Special',
  thrown = 'Thrown',
  twoHanded = 'Two-Handed',
  versatile = 'Versatile',
}

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
    readonly properties: WeaponProperty[]
  ) {
    if (proficiency !== WeaponProficiency.unknown) {
      this.subTitles.push(proficiency);
    }

    if (style !== WeaponStyle.unknown) {
      this.subTitles.push(style);
    }

    if (type !== WeaponType.unknown) {
      this.subTitles.push(type);
    }

    this.versatile = properties.indexOf(WeaponProperty.versatile) >= 0;
    this.reach = properties.indexOf(WeaponProperty.reach) >= 0;
    this.finesse = properties.indexOf(WeaponProperty.finesse) >= 0;
  }

  getPropertyDescription(property: WeaponProperty): string {
    switch (property) {
      case WeaponProperty.ammunition:
        return AMMUNITION;
      case WeaponProperty.finesse:
        return FINESSE;
      case WeaponProperty.heavy:
        return HEAVY;
      case WeaponProperty.light:
        return LIGHT;
      case WeaponProperty.loading:
        return LOADING;
      case WeaponProperty.range:
        return RANGE;
      case WeaponProperty.reach:
        return REACH;
      case WeaponProperty.special:
        return SPECIAL;
      case WeaponProperty.thrown:
        return THROWN;
      case WeaponProperty.twoHanded:
        return TWO_HANDED;
      case WeaponProperty.versatile:
        return VERSATILE;

      default:
        return '(unknown)';
    }
  }

  resolve(bases: Weapon[]): Weapon {
    if (!bases.length) {
      return this;
    }

    return new Weapon(
      Resolve.firstDefined(
        this.proficiency,
        bases.map((w) => w.proficiency),
        (p) => !!p && p !== WeaponProficiency.unknown
      ),
      Resolve.firstDefined(
        this.style,
        bases.map((w) => w.style),
        (s) => !!s && s !== WeaponStyle.unknown
      ),
      Resolve.firstDefined(
        this.type,
        bases.map((w) => w.type),
        (t) => !!t && t !== WeaponType.unknown
      ),
      Resolve.firstDefined(
        this.damage,
        bases.map((w) => w.damage),
        (d) => !!d && d !== EMPTY_DAMAGE
      ),
      Resolve.max(
        this.range,
        bases.map((w) => w.range)
      ),
      Resolve.max(
        this.rangeMax,
        bases.map((w) => w.rangeMax)
      ),
      Resolve.dedupe(
        this.properties,
        bases.map((w) => w.properties)
      )
    );
  }

  static fromProto(proto: WeaponProto | undefined): Weapon | undefined {
    if (!proto) {
      return undefined;
    }

    return new Weapon(
      Weapon.convertProficiency(proto.getProficiency()),
      Weapon.convertStyle(proto.getStyle()),
      Weapon.convertType(proto.getType()),
      Damage.fromProto(proto.getDamage(), proto.getDamageTwoHanded()),
      proto.getRangeFeet(),
      proto.getRangeMaxFeet(),
      proto.getPropertiesList().map((p) => Weapon.convertProperty(p))
    );
  }

  static convertProficiency(proto: number): WeaponProficiency {
    switch (proto) {
      case WeaponProto.Proficiency.SIMPLE:
        return WeaponProficiency.simple;
      case WeaponProto.Proficiency.MARTIAL:
        return WeaponProficiency.martial;

      default:
        return WeaponProficiency.unknown;
    }
  }

  static convertStyle(proto: number): WeaponStyle {
    switch (proto) {
      case WeaponProto.Style.MELEE:
        return WeaponStyle.melee;
      case WeaponProto.Style.RANGED:
        return WeaponStyle.ranged;

      default:
        return WeaponStyle.unknown;
    }
  }

  static convertType(proto: number): WeaponType {
    switch (proto) {
      case WeaponProto.Type.PICK:
        return WeaponType.pick;
      case WeaponProto.Type.SWORD:
        return WeaponType.sword;
      case WeaponProto.Type.STAFF:
        return WeaponType.staff;
      case WeaponProto.Type.BOW:
        return WeaponType.bow;
      case WeaponProto.Type.POLEARM:
        return WeaponType.polearm;
      case WeaponProto.Type.WHIP:
        return WeaponType.whip;
      case WeaponProto.Type.CROSSBOW:
        return WeaponType.crossbow;
      case WeaponProto.Type.CLUB:
        return WeaponType.club;
      case WeaponProto.Type.SPEAR:
        return WeaponType.spear;
      case WeaponProto.Type.AXE:
        return WeaponType.axe;
      case WeaponProto.Type.FIREARM:
        return WeaponType.firearm;
      case WeaponProto.Type.SLING:
        return WeaponType.sling;
      case WeaponProto.Type.DART:
        return WeaponType.dart;
      case WeaponProto.Type.NET:
        return WeaponType.net;

      default:
        return WeaponType.unknown;
    }
  }

  static convertProperty(proto: number): WeaponProperty {
    switch (proto) {
      case WeaponProto.Property.AMMUNITION:
        return WeaponProperty.ammunition;
      case WeaponProto.Property.FINESSE:
        return WeaponProperty.finesse;
      case WeaponProto.Property.HEAVY:
        return WeaponProperty.heavy;
      case WeaponProto.Property.LIGHT:
        return WeaponProperty.light;
      case WeaponProto.Property.LOADING:
        return WeaponProperty.loading;
      case WeaponProto.Property.RANGE:
        return WeaponProperty.range;
      case WeaponProto.Property.REACH:
        return WeaponProperty.reach;
      case WeaponProto.Property.SPECIAL:
        return WeaponProperty.special;
      case WeaponProto.Property.THROWN:
        return WeaponProperty.thrown;
      case WeaponProto.Property.TWO_HANDED:
        return WeaponProperty.twoHanded;
      case WeaponProto.Property.VERSATILE:
        return WeaponProperty.versatile;

      default:
        return WeaponProperty.unknown;
    }
  }
}

export const EMPTY_WEAPON = new Weapon(
  WeaponProficiency.unknown,
  WeaponStyle.unknown,
  WeaponType.unknown,
  EMPTY_DAMAGE,
  0,
  0,
  []
);

enum ArmorType {
  unknown = 'Unknown',
  light = 'Light',
  medium = 'Medium',
  heavy = 'Heavy',
  shield = 'Shield',
  magic = 'Magic',
}

export class Armor {
  readonly subTitles: string[] = [];

  constructor(
    readonly type: ArmorType,
    readonly ac: number,
    readonly maxDexterity: number,
    readonly minStrength: number,
    readonly stealthDisadvantage: boolean
  ) {
    if (type !== ArmorType.unknown) {
      this.subTitles.push(type);
    }
  }
  resolve(bases: Armor[]): Armor {
    if (!bases.length) {
      return this;
    }

    return new Armor(
      Resolve.firstDefined(
        this.type,
        bases.map((a) => a.type)
      ),
      Resolve.max(
        this.ac,
        bases.map((a) => a.ac)
      ),
      Resolve.min(
        this.maxDexterity,
        bases.map((a) => a.maxDexterity)
      ),
      Resolve.max(
        this.minStrength,
        bases.map((a) => a.minStrength)
      ),
      Resolve.firstDefined(
        this.stealthDisadvantage,
        bases.map((a) => a.stealthDisadvantage)
      )
    );
  }

  static fromProto(proto: ArmorProto | undefined): Armor | undefined {
    if (!proto) {
      return undefined;
    }

    return new Armor(
      Armor.convertType(proto.getType()),
      proto.getAc(),
      proto.getMaxDexterity(),
      proto.getMinStrength(),
      proto.getStealthDisadvantage()
    );
  }

  private static convertType(proto: number): ArmorType {
    switch (proto) {
      case ArmorProto.Type.LIGHT:
        return ArmorType.light;
      case ArmorProto.Type.MEDIUM:
        return ArmorType.medium;
      case ArmorProto.Type.HEAVY:
        return ArmorType.heavy;
      case ArmorProto.Type.SHIELD:
        return ArmorType.shield;
      case ArmorProto.Type.MAGIC:
        return ArmorType.magic;

      default:
        return ArmorType.unknown;
    }
  }
}

export const EMPTY_ARMOR = new Armor(ArmorType.unknown, 0, 100, 0, false);

const PATTERN_NAME = /^\s*(?:(\d+)\s*x\s+)?(.*?)\s*(?:\[(.*)\])?\s*(?:\((.*)\))?$/;

export class Item extends Entity<Item> {
  readonly subTitles: string[] = [];
  readonly armorClass: number;
  readonly hitPoints: number;
  readonly totalWeight: Weight;
  readonly totalValue: Money;

  constructor(
    common: Common,
    readonly multiple: number,
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
    readonly probability: Rarity,
    readonly attunement: boolean,
    readonly weapon?: Weapon,
    readonly armor?: Armor
  ) {
    super(common);

    this.totalWeight = weight.multiply(multiple);
    this.totalValue = value.multiply(multiple);

    if (subtype !== ItemSubtype.UNKNOWN) {
      this.subTitles.push(subtype.name);
    }

    if (attunement) {
      this.subTitles.push('requires attunement');
    }

    if (weapon) {
      this.subTitles.push(...weapon.subTitles);
    }

    if (armor) {
      this.subTitles.push(...armor.subTitles);
    }

    this.armorClass = armor_class || substance.material.armorClass;
    this.hitPoints = hit_points || fragile ? size.hitPointsFragile : size.hitPoints;
  }

  static fromProto(proto: ItemProto): Item {
    return new Item(
      Common.fromProto(proto.getCommon()),
      1,
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
      Rarity.fromProto(proto.getRarity()),
      proto.getAttunement(),
      Weapon.fromProto(proto.getWeapon()),
      Armor.fromProto(proto.getArmor())
    );
  }

  static async fromString(itemService: ItemService, name: string): Promise<Item> {
    const match = name.match(PATTERN_NAME);
    if (match && (match[1] || match[3] || match[4])) {
      const values = Entity.splitValues(match[4]);
      values.set('multiple', match[1] || '1');
      return Item.createFromValues(match[2], itemService, match[3] ? match[3].split(/\s*,\s*/) : [], values);
    } else {
      return itemService.get(name);
    }
  }

  static create(name: string, bases: string[] = []): Item {
    return new Item(
      new Common(name + (bases.length ? '' : ' (not found)'), bases, '', '', [], REFERENCES_EMPTY, []),
      1,
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
      Rarity.UNKNOWN,
      false
    );
  }

  static async createFromValues(
    name: string,
    itemService: ItemService,
    baseNames: string[],
    values: Map<string, string>
  ): Promise<Item> {
    let item;
    if (await itemService.has(name)) {
      item = await itemService.get(name);
    } else {
      item = Item.create(name, baseNames);
    }

    const bases: Item[] = [];
    for (const baseName of baseNames) {
      bases.push(await itemService.get(baseName));
    }

    item = item.resolve(bases, values);

    return item;
  }

  resolve(bases: Item[], values: Map<string, string>): Item {
    if (bases.length === 0 && values.size === 0) {
      return this;
    }

    return new Item(
      this.common.resolve(
        bases.map((b) => b.common),
        values
      ),
      Entity.maybeOverride(
        values,
        'multiple',
        (m) => parseInt(m),
        Resolve.max(
          this.multiple,
          bases.map((i) => i.multiple)
        )
      ),
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
      this.probability.resolve(bases.map((i) => i.probability)),
      Resolve.firstDefined(
        this.attunement,
        bases.map((i) => i.attunement)
      ),
      (this.weapon || EMPTY_WEAPON).resolve(bases.map((b) => b.weapon).filter(Item.isWeapon)),
      (this.armor || EMPTY_ARMOR).resolve(bases.map((b) => b.armor).filter(Item.isArmor))
    );
  }

  private static isWeapon(weapon: Weapon | undefined): weapon is Weapon {
    return !!weapon;
  }

  private static isArmor(armor: Armor | undefined): armor is Armor {
    return !!armor;
  }
}
