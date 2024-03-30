import { ArmorProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class ArmorType extends Enum<ArmorType> {
  static readonly types: ArmorType[] = [];

  static readonly UNKNOWN = new ArmorType('Unknown', ArmorProto.Type.UNKNOWN);
  static readonly LIGHT = new ArmorType('Light', ArmorProto.Type.LIGHT);
  static readonly MEDIUM = new ArmorType('Medium', ArmorProto.Type.MEDIUM);
  static readonly HEAVY = new ArmorType('Heavy', ArmorProto.Type.HEAVY);
  static readonly SHIELD = new ArmorType('Shield', ArmorProto.Type.SHIELD);
  static readonly MAGIC = new ArmorType('Magic', ArmorProto.Type.MAGIC);

  constructor(name: string, proto: number) {
    super(name, proto);
    ArmorType.types.push(this);
  }

  static fromString(text: string): ArmorType {
    return Enum.fromStringValue(text, ArmorType.types, ArmorType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): ArmorType {
    return Enum.fromProtoValue(proto, ArmorType.types, ArmorType.UNKNOWN);
  }
}
