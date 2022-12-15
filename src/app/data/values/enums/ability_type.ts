import { Ability as AbilityProto } from '../../../proto/generated/value_pb';
import { Enum } from './enum';

export class AbilityType extends Enum<AbilityType> {
  static readonly types: AbilityType[] = [];

  static readonly UNKNOWN = new AbilityType('Unknown', 'UKN', AbilityProto.UNKNOWN);
  static readonly STRENGTH = new AbilityType('Strength', 'STR', AbilityProto.STRENGTH);
  static readonly DEXTERITY = new AbilityType('Dexterity', 'DEX', AbilityProto.DEXTERITY);
  static readonly CONSTITUTION = new AbilityType('Constitution', 'CON', AbilityProto.CONSTITUTION);
  static readonly INTELLIGENCE = new AbilityType('Intelligence', 'INT', AbilityProto.INTELLIGENCE);
  static readonly WISDOM = new AbilityType('Wisdom', 'WIS', AbilityProto.WISDOM);
  static readonly CHARISMA = new AbilityType('Charisma', 'CHA', AbilityProto.CHARISMA);

  constructor(name: string, public readonly short: string, proto: number) {
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
