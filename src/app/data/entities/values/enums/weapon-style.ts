import { WeaponProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class WeaponStyle extends Enum<WeaponStyle> {
  static readonly styles: WeaponStyle[] = [];

  static readonly UNKNOWN = new WeaponStyle('Unknown', WeaponProto.Style.UNKNONW_STYLE);
  static readonly MELEE = new WeaponStyle('Simple', WeaponProto.Style.MELEE);
  static readonly RANGED = new WeaponStyle('Martial', WeaponProto.Style.RANGED);

  constructor(name: string, proto: number) {
    super(name, proto);
    WeaponStyle.styles.push(this);
  }

  static fromString(text: string): WeaponStyle {
    return Enum.fromStringValue(text, WeaponStyle.styles, WeaponStyle.UNKNOWN);
  }

  static fromProto(proto: number | undefined): WeaponStyle {
    return Enum.fromProtoValue(proto, WeaponStyle.styles, WeaponStyle.UNKNOWN);
  }
}
