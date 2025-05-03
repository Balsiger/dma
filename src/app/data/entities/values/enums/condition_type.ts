import { MonsterProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class ConditionType extends Enum<ConditionType> {
  static readonly types: ConditionType[] = [];

  static readonly UNKNOWN = new ConditionType('Unknown', MonsterProto.ConditionType.UNKNOWN_CONDITION);
  static readonly BLINDED = new ConditionType('Blinded', MonsterProto.ConditionType.BLINDED);
  static readonly CHARMED = new ConditionType('Charmed', MonsterProto.ConditionType.CHARMED);
  static readonly DEAFENED = new ConditionType('Deafened', MonsterProto.ConditionType.DEAFENED);
  static readonly FRIGHTENED = new ConditionType('Frightened', MonsterProto.ConditionType.FRIGHTENED);
  static readonly GRAPPLED = new ConditionType('Grappled', MonsterProto.ConditionType.GRAPPLED);
  static readonly INCAPACITATED = new ConditionType('Incapacitated', MonsterProto.ConditionType.ICNAPACITATED);
  static readonly INVISIBLE = new ConditionType('Invisible', MonsterProto.ConditionType.INVISIBLE);
  static readonly PARALYZED = new ConditionType('Paralyzed', MonsterProto.ConditionType.PARALYZED);
  static readonly PETRIFIED = new ConditionType('Petrified', MonsterProto.ConditionType.PETRIFIED);
  static readonly POISONED = new ConditionType('Poisoned', MonsterProto.ConditionType.POISONED);
  static readonly PRONE = new ConditionType('Prone', MonsterProto.ConditionType.PRONE);
  static readonly RESTRAINED = new ConditionType('Restrained', MonsterProto.ConditionType.RESTRAINED);
  static readonly STUNNED = new ConditionType('Stunned', MonsterProto.ConditionType.STUNNED);
  static readonly UNCONSCIOUS = new ConditionType('Unconscious', MonsterProto.ConditionType.UNCONSCIOUS);
  static readonly EXHAUSTION = new ConditionType('Exhaustion', MonsterProto.ConditionType.EXHAUSTION);

  constructor(name: string, proto: number) {
    super(name, proto);
    ConditionType.types.push(this);
  }

  static fromString(text: string): ConditionType {
    return Enum.fromStringValue(text, ConditionType.types, ConditionType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): ConditionType {
    return Enum.fromProtoValue(proto, ConditionType.types, ConditionType.UNKNOWN);
  }
}
