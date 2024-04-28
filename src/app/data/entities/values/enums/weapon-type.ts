import { WeaponProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class WeaponType extends Enum<WeaponType> {
  static readonly types: WeaponType[] = [];

  static readonly UNKNOWN = new WeaponType('Unknown', WeaponProto.Style.UNKNONW_STYLE);
  static readonly SWORD = new WeaponType('Sword', WeaponProto.Type.SWORD);
  static readonly PICK = new WeaponType('Pick', WeaponProto.Type.PICK);
  static readonly STAFF = new WeaponType('Staff', WeaponProto.Type.STAFF);
  static readonly BOW = new WeaponType('Bow', WeaponProto.Type.BOW);
  static readonly POLEARM = new WeaponType('Polearm', WeaponProto.Type.POLEARM);
  static readonly WHIP = new WeaponType('Whip', WeaponProto.Type.WHIP);
  static readonly CROSSBOW = new WeaponType('Crossbow', WeaponProto.Type.CROSSBOW);
  static readonly CLUB = new WeaponType('Club', WeaponProto.Type.CLUB);
  static readonly SPEAR = new WeaponType('Spear', WeaponProto.Type.SPEAR);
  static readonly AXE = new WeaponType('Axe', WeaponProto.Type.AXE);
  static readonly FIREARM = new WeaponType('Firearm', WeaponProto.Type.FIREARM);
  static readonly SLING = new WeaponType('Sling', WeaponProto.Type.SLING);
  static readonly DART = new WeaponType('Dart', WeaponProto.Type.DART);
  static readonly NET = new WeaponType('Net', WeaponProto.Type.NET);

  constructor(name: string, proto: number) {
    super(name, proto);
    WeaponType.types.push(this);
  }

  static fromString(text: string): WeaponType {
    return Enum.fromStringValue(text, WeaponType.types, WeaponType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): WeaponType {
    return Enum.fromProtoValue(proto, WeaponType.types, WeaponType.UNKNOWN);
  }
}
