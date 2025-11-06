import { CharacterClass as CharacterClassProto } from '../../../../proto/generated/value_pb';
import { Enum } from './enum';

export class CharacterClass extends Enum<CharacterClass> {
  static readonly classes: CharacterClass[] = [];

  static readonly UNKNOWN = new CharacterClass('Unknown', CharacterClassProto.UNKNOWN_CHARACTER_CLASS);
  static readonly BARBARIAN = new CharacterClass('Barbarian', CharacterClassProto.BARBARIAN_CHARARCER_CLASS);
  static readonly BARD = new CharacterClass('Bard', CharacterClassProto.BARD_CHARARCER_CLASS);
  static readonly CLERIC = new CharacterClass('Cleric', CharacterClassProto.CLERIC_CHARARCER_CLASS);
  static readonly DRUID = new CharacterClass('Druid', CharacterClassProto.DRUID_CHARARCER_CLASS);
  static readonly FIGHTER = new CharacterClass('Fighter', CharacterClassProto.FIGHTER_CHARARCER_CLASS);
  static readonly MONK = new CharacterClass('Monk', CharacterClassProto.MONK_CHARARCER_CLASS);
  static readonly PALADIN = new CharacterClass('Paladin', CharacterClassProto.PALADIN_CHARARCER_CLASS);
  static readonly RANGER = new CharacterClass('Ranger', CharacterClassProto.RANGER_CHARARCER_CLASS);
  static readonly ROGUE = new CharacterClass('Rogue', CharacterClassProto.ROGUE_CHARARCER_CLASS);
  static readonly SORCERER = new CharacterClass('Sorcerer', CharacterClassProto.SORCERER_CHARARCER_CLASS);
  static readonly WARLOCK = new CharacterClass('Warlock', CharacterClassProto.WARLOCK_CHARARCER_CLASS);
  static readonly WIZARD = new CharacterClass('Wizard', CharacterClassProto.WIZARD_CHARARCER_CLASS);
  static readonly ARTIFICER = new CharacterClass('Artificer', CharacterClassProto.ARTIFICER_CHARARCER_CLASS);

  constructor(name: string, proto: number) {
    super(name, proto);
    CharacterClass.classes.push(this);
  }

  static fromString(text: string): CharacterClass {
    return Enum.fromStringValue(text, CharacterClass.classes, CharacterClass.UNKNOWN);
  }

  static fromProto(proto: number | undefined): CharacterClass {
    return Enum.fromProtoValue(proto, CharacterClass.classes, CharacterClass.UNKNOWN);
  }
}
