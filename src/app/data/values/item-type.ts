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

  constructor(name: string, proto: number) {
    super(name, proto);
    ItemType.types.push(this);
  }

  static fromString(text: string): ItemType {
    return Enum.fromStringValue(text, ItemType.types, ItemType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): ItemType {
    return Enum.fromProtoValue(proto, ItemType.types, ItemType.UNKNOWN);
  }
}
