import { MonsterProto } from '../../../proto/generated/template_pb';
import { Enum } from './enum';

export class AttackType extends Enum<AttackType> {
  static readonly types: AttackType[] = [];

  static readonly UNKNOWN = new AttackType('Unknown', MonsterProto.Attack.Type.UKNOWN_ATTACK_TYPE);
  static readonly MELEE_WEAPON = new AttackType('Melee Weapon', MonsterProto.Attack.Type.MELEE_WEAPON);
  static readonly RANGED_WEAPON = new AttackType('Ranged Weapon', MonsterProto.Attack.Type.RANGED_WEAPON);
  static readonly MELEE_SPELL = new AttackType('Melee Spell', MonsterProto.Attack.Type.MELEE_SPELL);
  static readonly RANGED_SPELL = new AttackType('Ranged Spell', MonsterProto.Attack.Type.RANGED_SPELL);
  static readonly MELEE_WEAPON_DEX = new AttackType('Melee Weapon (Dex)', MonsterProto.Attack.Type.MELEE_WEAPON_DEX);
  static readonly MELEE_WEAPON_INT = new AttackType('Melee Weapon (INt)', MonsterProto.Attack.Type.MELEE_WEAPON_INT);

  constructor(name: string, proto: number) {
    super(name, proto);
    AttackType.types.push(this);
  }

  static fromString(text: string): AttackType {
    return Enum.fromStringValue(text, AttackType.types, AttackType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): AttackType {
    return Enum.fromProtoValue(proto, AttackType.types, AttackType.UNKNOWN);
  }
}
