import { ItemProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class ItemCategory extends Enum<ItemCategory> {
  static readonly categories: ItemCategory[] = [];

  static readonly UNKNOWN = new ItemCategory('Unknown', ItemProto.Category.UNKONWN_CATEGORY);
  static readonly AMMUNITION = new ItemCategory('Ammunition', ItemProto.Category.AMMUNITION);
  static readonly BATTLEAXE = new ItemCategory('Battleaxe', ItemProto.Category.BATTLEAXE);
  static readonly CHAIN_MAIL = new ItemCategory('Chain Mail', ItemProto.Category.CHAIN_MAIL);
  static readonly CHAIN_SHIRT = new ItemCategory('Chain Shirt', ItemProto.Category.CHAIN_SHIRT);
  static readonly GREATAXE = new ItemCategory('Greataxe', ItemProto.Category.GREATAXE);
  static readonly GREATSWORD = new ItemCategory('Greatsword', ItemProto.Category.GREATSWORD);
  static readonly HALBERD = new ItemCategory('Halberd', ItemProto.Category.HALBERD);
  static readonly HALF_PLATE = new ItemCategory('Half Plate', ItemProto.Category.HALF_PLATE);
  static readonly HANDXAE = new ItemCategory('Handaxe', ItemProto.Category.HANDAXE);
  static readonly HEAVY_ARMOR = new ItemCategory('Heavy Armor', ItemProto.Category.HEAVY_ARMOR);
  static readonly LIGHT_ARMOR = new ItemCategory('Light Armor', ItemProto.Category.LIGHT_ARMOR);
  static readonly LONGSBOW = new ItemCategory('Longbow', ItemProto.Category.LONGBOW);
  static readonly LONGSWORD = new ItemCategory('Longsword', ItemProto.Category.LONGSWORD);
  static readonly MARTIAL_WEAPON = new ItemCategory('Martial Weapon', ItemProto.Category.MARTIAL_WEAPON);
  static readonly MEDIUM_ARMOR = new ItemCategory('Medium Armor', ItemProto.Category.MEDIUM_ARMOR);
  static readonly MELEE_WEAPON = new ItemCategory('Melee Weapon', ItemProto.Category.MELEE_WEAPON);
  static readonly PLATE_ARMOR = new ItemCategory('Plate Armor', ItemProto.Category.PLATE_ARMOR);
  static readonly RAPIER = new ItemCategory('Rapier', ItemProto.Category.RAPIER);
  static readonly SCIMITAR = new ItemCategory('Scimitar', ItemProto.Category.SCIMITAR);
  static readonly SHORTBOW = new ItemCategory('Shortbow', ItemProto.Category.SHORTBOW);
  static readonly SHORTSWORD = new ItemCategory('Shortsword', ItemProto.Category.SHORTSWORD);
  static readonly SIMPLE_WEAPON = new ItemCategory('Simple Weapon', ItemProto.Category.SIMPLE_WEAPON);

  constructor(name: string, proto: number) {
    super(name, proto);
    ItemCategory.categories.push(this);
  }

  resolve(bases: ItemCategory[]): ItemCategory {
    if (this !== ItemCategory.UNKNOWN) {
      return this;
    }

    return bases.find((b) => b !== ItemCategory.UNKNOWN) || this;
  }

  static fromString(text: string): ItemCategory {
    return Enum.fromStringValue(text, ItemCategory.categories, ItemCategory.UNKNOWN);
  }

  static fromProto(proto: number | undefined): ItemCategory {
    return Enum.fromProtoValue(proto, ItemCategory.categories, ItemCategory.UNKNOWN);
  }
}
