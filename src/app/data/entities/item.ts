import { Utils } from '../../../common/utils';
import { ItemProto } from '../../proto/generated/template_pb';
import { Resolve } from '../resolve';
import { Entities } from './entities';
import { Entity } from './entity';
import { Armor, EMPTY as EMPTY_ARMOR } from './values/armor';
import { Common } from './values/common';
import { ItemSubtype } from './values/enums/item-subtype';
import { ItemType } from './values/enums/item-type';
import { Rarity } from './values/enums/rarity';
import { ValueType } from './values/enums/value-type';
import { EMPTY as EMPTY_MAGIC, Magic } from './values/magic';
import { EMPTY as MONEY_EMPTY, Money } from './values/money';
import { EMPTY as REFERENCES_EMPTY } from './values/reference';
import { Size } from './values/size';
import { EMPTY as SUBSTANCE_EMPTY, Substance } from './values/substance';
import { Modifier, ModifierValue } from './values/value';
import { EMPTY as EMPTY_WEAPON, Weapon } from './values/weapon';
import { EMPTY as WEIGHT_EMPTY, Weight } from './values/weight';

const PATTERN_NAME = /^\s*(?:(\d+)\s*x\s+)?(.*?)\s*(?:\[(.*)\])?\s*(?:\((.*)\))?$/;

/** A representation of an item concept. */
export class Item extends Entity<Item> {
  readonly subTitles: string[] = [];
  readonly armorClass: number;
  readonly hitPoints: number;
  readonly totalWeight: Weight;
  readonly totalValue: Money;

  constructor(
    common: Common,
    product: string,
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
    readonly magic?: Magic,
  ) {
    super(common, product);

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

  static fromProto(proto: ItemProto, productName: string, productId: string): Item {
    return new Item(
      Common.fromProto(proto.getCommon(), productName, productId),
      productName,
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
      Magic.fromProto(proto.getMagic()),
    );
  }

  static async fromString(items: Entities<Item>, name: string): Promise<Item> {
    const match = name.match(PATTERN_NAME);
    if (match && (match[1] || match[3] || match[4])) {
      const values = Entity.splitValues(match[4]);
      values.set('multiple', match[1] || '1');
      return Item.createFromValues(match[2], items, match[3] ? match[3].split(/\s*,\s*/) : [], values);
    } else {
      return items.get(name);
    }
  }

  static create(name: string, bases: string[] = []): Item {
    return new Item(
      new Common(name, name + 's', bases, [], '', '', [], REFERENCES_EMPTY, [], false),
      '',
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
      false,
    );
  }

  static async createFromValues(
    name: string,
    items: Entities<Item>,
    baseNames: string[],
    values: Map<string, string>,
  ): Promise<Item> {
    let item;
    if (items.has(name)) {
      item = items.get(name);
    } else {
      item = Item.create(name, baseNames);
    }

    const bases: Item[] = [];
    for (const baseName of baseNames) {
      bases.push(items.get(baseName));
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
        values,
      ),
      this.product,
      Entity.maybeOverride(
        values,
        'multiple',
        (m) => parseInt(m),
        Resolve.max(
          this.multiple,
          bases.map((i) => i.multiple),
        ),
      ),
      this.type.resolve(bases.map((i) => i.type)),
      this.subtype.resolve(bases.map((i) => i.subtype)),
      this.size.resolve(bases.map((i) => i.size)),
      Entity.maybeOverride(values, 'value', Money.fromString, this.value.resolve(bases.map((i) => i.value))),
      Entity.maybeOverride(values, 'weight', Weight.fromString, this.weight.resolve(bases.map((i) => i.weight))),
      Resolve.firstDefined(
        this.monetary,
        bases.map((i) => i.monetary),
      ),
      Resolve.max(
        this.hitPoints,
        bases.map((i) => i.hitPoints),
      ),
      this.substance.resolve(bases.map((i) => i.substance)),
      Resolve.firstDefined(
        this.fragile,
        bases.map((i) => i.fragile),
      ),
      this.probability.resolve(bases.map((i) => i.probability)),
      Resolve.firstDefined(
        this.attunement,
        bases.map((i) => i.attunement),
      ),
      Item.modifyWeapon(
        this.name,
        magic,
        (this.weapon || EMPTY_WEAPON).resolve(bases.map((b) => b.weapon).filter(Item.isWeapon)),
      ),
      Utils.emptyToUndefined(
        (this.armor || EMPTY_ARMOR).resolve(bases.map((b) => b.armor).filter(Item.isArmor)),
        EMPTY_ARMOR,
      ),
      magic,
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

  override matches(selections: Map<string, any>): boolean {
    if (!super.matches(selections)) {
      return false;
    }

    for (const [label, value] of selections.entries()) {
      if (label === 'Size' && !Entity.includes(this.size, value)) {
        return false;
      }

      if (label === 'Type' && !Entity.includes(this.type, value)) {
        return false;
      }

      if (label === 'Subtype' && !Entity.includes(this.subtype, value)) {
        return false;
      }

      if (label === 'Rarity' && !Entity.includes(this.probability, value)) {
        return false;
      }
    }

    return true;
  }
}
