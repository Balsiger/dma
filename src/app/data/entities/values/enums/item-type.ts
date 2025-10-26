import { ItemProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class ItemType extends Enum<ItemType> {
  static readonly types: ItemType[] = [];

  static readonly UNKNOWN = new ItemType('Unknown', ItemProto.Type.UNKNOWN_TYPE);
  static readonly ADVENTURING_GEAR = new ItemType('Adventuring Gear', ItemProto.Type.ADVENTURING_GEAR);
  static readonly ARMOR = new ItemType('Armor', ItemProto.Type.ARMOR);
  static readonly ART = new ItemType('Art Object', ItemProto.Type.ART);
  static readonly CIRCLET = new ItemType('Circlet', ItemProto.Type.CIRCLET);
  static readonly DRINK = new ItemType('Drink', ItemProto.Type.DRINK);
  static readonly FOOD = new ItemType('Food', ItemProto.Type.FOOD);
  static readonly GEM = new ItemType('Gem', ItemProto.Type.GEM);
  static readonly LODGING = new ItemType('Lodging', ItemProto.Type.LODGING);
  static readonly MISC_MAGIC = new ItemType('Misc Magic', ItemProto.Type.MISC_MAGIC);
  static readonly POISON = new ItemType('Poison', ItemProto.Type.POISON);
  static readonly POTION = new ItemType('Potion', ItemProto.Type.POTION);
  static readonly RING = new ItemType('Ring', ItemProto.Type.RING);
  static readonly ROD = new ItemType('Rod', ItemProto.Type.ROD);
  static readonly SCROLL = new ItemType('Scroll', ItemProto.Type.SCROLL);
  static readonly STAFF = new ItemType('Staff', ItemProto.Type.STAFF);
  static readonly TOOL = new ItemType('Tool', ItemProto.Type.TOOL);
  static readonly TOY = new ItemType('Toy', ItemProto.Type.TOY);
  static readonly TRINKET = new ItemType('Trinket', ItemProto.Type.TRINKET);
  static readonly WAND = new ItemType('Wand', ItemProto.Type.WAND);
  static readonly WEAPON = new ItemType('Weapon', ItemProto.Type.WEAPON);
  static readonly VEHICLE = new ItemType('Vehicle', ItemProto.Type.VEHICLE);
  static readonly WONDROUS_ITEM = new ItemType('Wondrous', ItemProto.Type.WONDROUS_ITEM_TYPE);
  static readonly WONDROUS_ARTIFACT = new ItemType('Artifact', ItemProto.Type.WONDROUS_ARTIFACT_TYPE);
  static readonly MOUNT = new ItemType('Mount', ItemProto.Type.MOUNT);
  static readonly TRADE = new ItemType('Trade', ItemProto.Type.TRADE);

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
