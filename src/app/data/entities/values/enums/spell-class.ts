import { SpellClass as SpellClassProto } from '../../../../proto/generated/value_pb';
import { Enum } from './enum';

export class SpellClass extends Enum<SpellClass> {
  static readonly classes: SpellClass[] = [];

  static readonly UNKNOWN = new SpellClass('Unknown', SpellClassProto.UNKNOWN_SPELL_CLASS);
  static readonly BARD = new SpellClass('Bard', SpellClassProto.BARD);
  static readonly CLERIC = new SpellClass('Cleric', SpellClassProto.CLERIC);
  static readonly DRUID = new SpellClass('Druid', SpellClassProto.DRUID);
  static readonly PALADIN = new SpellClass('Paladin', SpellClassProto.PALADIN);
  static readonly RANGER = new SpellClass('Ranger', SpellClassProto.RANGER);
  static readonly SORCERER = new SpellClass('Sorcerer', SpellClassProto.SORCERER);
  static readonly WARLOCK = new SpellClass('Warlock', SpellClassProto.WARLOCK);
  static readonly WIZARD = new SpellClass('Wizard', SpellClassProto.WIZARD);

  constructor(name: string, proto: number) {
    super(name, proto);
    SpellClass.classes.push(this);
  }

  static fromString(text: string): SpellClass {
    return Enum.fromStringValue(text, SpellClass.classes, SpellClass.UNKNOWN);
  }

  static fromProto(proto: number | undefined): SpellClass {
    return Enum.fromProtoValue(proto, SpellClass.classes, SpellClass.UNKNOWN);
  }
}
