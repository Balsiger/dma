import { ArmorProto, ItemProto, MagicProto, WeaponProto } from '../../proto/generated/template_pb';
import { ItemService } from '../../services/item.service';
import { Common, Entity } from '../entities/entity';
import { Resolve } from '../resolve';
import { Damage, EMPTY as EMPTY_DAMAGE } from '../values/damage';
import { ArmorType } from '../values/enums/armor_type';
import { ItemSubtype } from '../values/enums/item-subtype';
import { ItemType } from '../values/enums/item-type';
import { Rarity } from '../values/enums/rarity';
import { ValueType } from '../values/enums/value_type';
import { WeaponProficiency } from '../values/enums/weapon_proficiency';
import { WeaponProperty } from '../values/enums/weapon_property';
import { WeaponStyle } from '../values/enums/weapon_style';
import { WeaponType } from '../values/enums/weapon_type';
import { EMPTY as MONEY_EMPTY, Money } from '../values/money';
import { EMPTY as REFERENCES_EMPTY } from '../values/references';
import { Size } from '../values/size';
import { EMPTY as SUBSTANCE_EMPTY, Substance } from '../values/substance';
import { Modifier, ModifierValue } from '../values/value';
import { EMPTY as WEIGHT_EMPTY, Weight } from '../values/weight';

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
      this.properties
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
        (p) => !!p && p !== WeaponProficiency.UNKNOWN
      ),
      Resolve.firstDefined(
        this.style,
        bases.map((w) => w.style),
        (s) => !!s && s !== WeaponStyle.UNKNOWN
      ),
      Resolve.firstDefined(
        this.type,
        bases.map((w) => w.type),
        (t) => !!t && t !== WeaponType.UNKNOWN
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
      WeaponProficiency.fromProto(proto.getProficiency()),
      WeaponStyle.fromProto(proto.getStyle()),
      WeaponType.fromProto(proto.getType()),
      Damage.fromProto(proto.getDamage(), proto.getDamageTwoHanded()),
      proto.getRangeFeet(),
      proto.getRangeMaxFeet(),
      proto.getPropertiesList().map((p) => WeaponProperty.fromProto(p))
    );
  }
}

export const EMPTY_WEAPON = new Weapon(
  WeaponProficiency.UNKNOWN,
  WeaponStyle.UNKNOWN,
  WeaponType.UNKNOWN,
  EMPTY_DAMAGE,
  0,
  0,
  []
);

export class Armor {
  readonly subTitles: string[] = [];

  constructor(
    readonly type: ArmorType,
    readonly ac: number,
    readonly maxDexterity: number,
    readonly minStrength: number,
    readonly stealthDisadvantage: boolean
  ) {
    if (type !== ArmorType.UNKNOWN) {
      this.subTitles.push(type.name);
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
      Resolve.sum(
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
      ArmorType.fromProto(proto.getType()),
      proto.getAc(),
      proto.getMaxDexterity(),
      proto.getMinStrength(),
      proto.getStealthDisadvantage()
    );
  }
}

export const EMPTY_ARMOR = new Armor(ArmorType.UNKNOWN, 0, 100, 0, false);

export class Modificator {
  constructor(readonly type: ValueType, readonly name: string, readonly value: number) {}

  public static fromProto(proto: MagicProto.Modifier): Modificator {
    return new Modificator(ValueType.fromProto(proto.getType()), proto.getName(), proto.getValue());
  }
}

export class Magic {
  constructor(readonly modificators: Modificator[], readonly attackOptions: string[]) {}

  public static fromProto(proto: MagicProto | undefined): Magic | undefined {
    if (!proto) {
      return undefined;
    }

    return new Magic(
      proto.getModifierList().map((m) => Modificator.fromProto(m)),
      proto.getAttackOptionsList()
    );
  }

  resolve(bases: Magic[]): Magic {
    if (!bases.length) {
      return this;
    }

    const modificators = [...this.modificators];
    for (const base of bases) {
      modificators.push(...base.modificators);
    }

    return new Magic(
      modificators,
      Resolve.dedupe(
        this.attackOptions,
        bases.map((b) => b.attackOptions)
      )
    );
  }
}

export const EMPTY_MAGIC = new Magic([], []);

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
    hit_points: number,
    readonly substance: Substance,
    readonly fragile: boolean,
    readonly probability: Rarity,
    readonly attunement: boolean,
    readonly weapon?: Weapon,
    readonly armor?: Armor,
    readonly magic?: Magic
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

    this.armorClass = armor?.ac || substance.material.armorClass;
    this.hitPoints = hit_points || fragile ? size.hitPointsFragile : size.hitPoints;
  }

  modifiers(type: ValueType, name: string): Modifier<number>[] {
    if (this.armor && type === ValueType.ARMOR) {
      return [new Modifier<number>(this.armor.ac, this.name)];
    }

    return [];
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
      proto.getHitPoints(),
      Substance.fromProto(proto.getSubstance()),
      proto.getFragile(),
      Rarity.fromProto(proto.getRarity()),
      proto.getAttunement(),
      Weapon.fromProto(proto.getWeapon()),
      Armor.fromProto(proto.getArmor()),
      Magic.fromProto(proto.getMagic())
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
      new Common(name + (bases.length ? '' : ' (not found)'), name + 's', bases, [], '', '', [], REFERENCES_EMPTY, []),
      1,
      ItemType.UNKNOWN,
      ItemSubtype.UNKNOWN,
      Size.UNKNOWN,
      MONEY_EMPTY,
      WEIGHT_EMPTY,
      false,
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
    const magic = (this.magic || EMPTY_MAGIC).resolve(bases.map((b) => b.magic).filter(Item.isMagic));

    if (bases.length === 0 && values.size === 0 && magic.modificators.length == 0) {
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
      Item.modifyWeapon(
        this.name,
        magic,
        (this.weapon || EMPTY_WEAPON).resolve(bases.map((b) => b.weapon).filter(Item.isWeapon))
      ),
      (this.armor || EMPTY_ARMOR).resolve(bases.map((b) => b.armor).filter(Item.isArmor)),
      magic
    );
  }

  private static modifyWeapon(name: string, magic: Magic, weapon: Weapon): Weapon | undefined {
    if (weapon === EMPTY_WEAPON) {
      return undefined;
    }

    const modifiers: Modifier<number>[] = [];
    for (const modificator of magic.modificators) {
      if (modificator.type === ValueType.DAMAGE) {
        modifiers.push(new Modifier<number>(modificator.value, name));
      }
    }

    if (modifiers.length) {
      return weapon.withDamageModifier(new ModifierValue(0, name, modifiers));
    }

    return weapon;
  }

  private static isWeapon(weapon: Weapon | undefined): weapon is Weapon {
    return !!weapon;
  }

  private static isArmor(armor: Armor | undefined): armor is Armor {
    return !!armor;
  }

  private static isMagic(magic: Magic | undefined): magic is Magic {
    return !!magic;
  }
}
