import { SpellProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class School extends Enum<School> {
  static readonly schools: School[] = [];

  static readonly UNKNOWN = new School('Unknown', SpellProto.School.UNKNOWN_SCHOOL);
  static readonly ABJURATION = new School('Abjuration', SpellProto.School.ABJURATION);
  static readonly CONJURATION = new School('Conjuration', SpellProto.School.CONJURATION);
  static readonly DIVINATION = new School('Divination', SpellProto.School.DIVINATION);
  static readonly ENCHANTMENT = new School('Enchantment', SpellProto.School.ENCHANTMENT);
  static readonly EVOCATION = new School('Evocation', SpellProto.School.EVOCATION);
  static readonly ILLUSION = new School('Illusion', SpellProto.School.ILLUSION);
  static readonly NECROMANCY = new School('Necromancy', SpellProto.School.NECROMANCY);
  static readonly TRANSMUTATION = new School('Transmutation', SpellProto.School.TRANSMUTATION);

  constructor(name: string, proto: number) {
    super(name, proto);
    School.schools.push(this);
  }

  static fromString(text: string): School {
    return Enum.fromStringValue(text, School.schools, School.UNKNOWN);
  }

  static fromProto(proto: number | undefined): School {
    return Enum.fromProtoValue(proto, School.schools, School.UNKNOWN);
  }
}
