import { ItemProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class ItemSubtype extends Enum<ItemSubtype> {
  static readonly types: ItemSubtype[] = [];

  static readonly UNKNOWN = new ItemSubtype('Unknown', ItemProto.Subtype.UNKNOWN_SUBTYPE);
  static readonly WONDROUS_ITEM = new ItemSubtype('Wondrous Item', ItemProto.Subtype.WONDROUS_ITEM);

  constructor(name: string, proto: number) {
    super(name, proto);
    ItemSubtype.types.push(this);
  }

  resolve(bases: ItemSubtype[]): ItemSubtype {
    if (this !== ItemSubtype.UNKNOWN) {
      return this;
    }

    return bases.find((b) => b !== ItemSubtype.UNKNOWN) || this;
  }

  static fromString(text: string): ItemSubtype {
    return Enum.fromStringValue(text, ItemSubtype.types, ItemSubtype.UNKNOWN);
  }

  static fromProto(proto: number | undefined): ItemSubtype {
    return Enum.fromProtoValue(proto, ItemSubtype.types, ItemSubtype.UNKNOWN);
  }
}
