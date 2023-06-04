import { Ability as AbilityProto } from '../../../proto/generated/value_pb';
import { Enum } from './enum';

export class AbilityType extends Enum<AbilityType> {
  static readonly types: AbilityType[] = [];

  static readonly UNKNOWN = new AbilityType('Unknown', 'Ukn', AbilityProto.UNKNOWN);
  static readonly STRENGTH = new AbilityType('Strength', 'Str', AbilityProto.STRENGTH);
  static readonly DEXTERITY = new AbilityType('Dexterity', 'Dex', AbilityProto.DEXTERITY);
  static readonly CONSTITUTION = new AbilityType('Constitution', 'Con', AbilityProto.CONSTITUTION);
  static readonly INTELLIGENCE = new AbilityType('Intelligence', 'Int', AbilityProto.INTELLIGENCE);
  static readonly WISDOM = new AbilityType('Wisdom', 'Wis', AbilityProto.WISDOM);
  static readonly CHARISMA = new AbilityType('Charisma', 'Cha', AbilityProto.CHARISMA);

  constructor(name: string, public readonly short: string, proto: number, include = true) {
    super(name, proto);
    AbilityType.types.push(this);
  }

  static fromString(text: string): AbilityType {
    return Enum.fromStringValue(text, AbilityType.types, AbilityType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): AbilityType {
    return Enum.fromProtoValue(proto, AbilityType.types, AbilityType.UNKNOWN);
  }
}
