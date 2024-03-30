import { MagicProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class ValueType extends Enum<ValueType> {
  static readonly types: ValueType[] = [];

  static readonly UNKNOWN = new ValueType('Unknown', MagicProto.Type.UNKNOWN);
  static readonly ARMOR = new ValueType('Armor', MagicProto.Type.ARMOR);
  static readonly SKILL = new ValueType('Skill', MagicProto.Type.SKILL);
  static readonly ABILITY = new ValueType('Ability', MagicProto.Type.ABILITY);
  static readonly SAVE = new ValueType('Save', MagicProto.Type.SAVE);
  static readonly DAMAGE = new ValueType('Damage', MagicProto.Type.DAMAGE);
  static readonly ATTACK = new ValueType('Attack', MagicProto.Type.ATTACK);

  constructor(name: string, proto: number) {
    super(name, proto);
    ValueType.types.push(this);
  }

  static fromString(text: string): ValueType {
    return Enum.fromStringValue(text, ValueType.types, ValueType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): ValueType {
    return Enum.fromProtoValue(proto, ValueType.types, ValueType.UNKNOWN);
  }
}
