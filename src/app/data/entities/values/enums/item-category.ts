import { ItemProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class ItemCategory extends Enum<ItemCategory> {
  static readonly categories: ItemCategory[] = [];

  static readonly UNKNOWN = new ItemCategory('Unknown', ItemProto.Category.UNKONWN_CATEGORY);
  static readonly LIGHT_ARMOR = new ItemCategory('Light Armor', ItemProto.Category.LIGHT_ARMOR);
  static readonly MEDIUM_ARMOR = new ItemCategory('Medium Armor', ItemProto.Category.MEDIUM_ARMOR);
  static readonly HEAVY_ARMOR = new ItemCategory('Heavy Armor', ItemProto.Category.HEAVY_ARMOR);
  static readonly AMMUNITION = new ItemCategory('Ammunition', ItemProto.Category.AMMUNITION);
  static readonly MELEE_WEAPON = new ItemCategory('Melee Weapon', ItemProto.Category.MELEE_WEAPON);

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
