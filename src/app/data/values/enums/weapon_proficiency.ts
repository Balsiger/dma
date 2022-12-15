import { WeaponProto } from '../../../proto/generated/template_pb';
import { Enum } from './enum';

export class WeaponProficiency extends Enum<WeaponProficiency> {
  static readonly proficiencies: WeaponProficiency[] = [];

  static readonly UNKNOWN = new WeaponProficiency('Unknown', WeaponProto.Proficiency.UNKNOWN_PROFICIENCY);
  static readonly SIMPLE = new WeaponProficiency('Simple', WeaponProto.Proficiency.SIMPLE);
  static readonly MARTIAL = new WeaponProficiency('Martial', WeaponProto.Proficiency.MARTIAL);

  constructor(name: string, proto: number) {
    super(name, proto);
    WeaponProficiency.proficiencies.push(this);
  }

  static fromString(text: string): WeaponProficiency {
    return Enum.fromStringValue(text, WeaponProficiency.proficiencies, WeaponProficiency.UNKNOWN);
  }

  static fromProto(proto: number | undefined): WeaponProficiency {
    return Enum.fromProtoValue(proto, WeaponProficiency.proficiencies, WeaponProficiency.UNKNOWN);
  }
}
