import { ItemProto } from '../../proto/generated/template_pb';
import { Enum } from '../enum';

export class ItemType extends Enum<ItemType> {
  static readonly types: ItemType[] = [];

  static readonly UNKNOWN = new ItemType('Unknown', ItemProto.Type.UNKNOWN_TYPE);
  static readonly ADVENTURING_GEAR = new ItemType('Adventuring Gear', ItemProto.Type.ADVENTURING_GEAR);
  static readonly FOOD = new ItemType('Food', ItemProto.Type.FOOD);
  static readonly DRINK = new ItemType('Drink', ItemProto.Type.DRINK);
  static readonly LODGING = new ItemType('Lodging', ItemProto.Type.LODGING);
  static readonly POTION = new ItemType('Potion', ItemProto.Type.POTION);
  static readonly WEAPON = new ItemType('Weapon', ItemProto.Type.WEAPON);
  static readonly ARMOR = new ItemType('Armor', ItemProto.Type.ARMOR);
  static readonly TOY = new ItemType('Toy', ItemProto.Type.TOY);
  static readonly WAND = new ItemType('Wand', ItemProto.Type.WAND);
  static readonly TRINKET = new ItemType('Trinket', ItemProto.Type.TRINKET);
  static readonly ROD = new ItemType('Rod', ItemProto.Type.ROD);
  static readonly RING = new ItemType('Ring', ItemProto.Type.RING);
  static readonly SCROLL = new ItemType('Scroll', ItemProto.Type.SCROLL);
  static readonly STAFF = new ItemType('Staff', ItemProto.Type.STAFF);

  constructor(name: string, proto: number) {
    super(name, proto);
    ItemType.types.push(this);
  }

  resolve(bases: ItemType[]): ItemType {
    if (this !== ItemType.UNKNOWN) {
      return this;
    }

    return bases.find((b) => b !== ItemType.UNKNOWN) || this;
  }

  static fromString(text: string): ItemType {
    return Enum.fromStringValue(text, ItemType.types, ItemType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): ItemType {
    return Enum.fromProtoValue(proto, ItemType.types, ItemType.UNKNOWN);
  }
}
