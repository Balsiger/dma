import { MonsterProto } from '../../../proto/generated/template_pb';
import { Enum } from './enum';

export class ConditionType extends Enum<ConditionType> {
  static readonly types: ConditionType[] = [];

  static readonly UNKNOWN = new ConditionType('Unknown', MonsterProto.ConditionType.UNKNOWN_CONDITION);
  static readonly BLINDED = new ConditionType('blinded', MonsterProto.ConditionType.BLINDED);
  static readonly CHARMED = new ConditionType('charmed', MonsterProto.ConditionType.CHARMED);
  static readonly DEAFENED = new ConditionType('deafened', MonsterProto.ConditionType.DEAFENED);
  static readonly FRIGHTENED = new ConditionType('frightened', MonsterProto.ConditionType.FRIGHTENED);
  static readonly GRAPPLED = new ConditionType('grappled', MonsterProto.ConditionType.GRAPPLED);
  static readonly INCAPACITATED = new ConditionType('incapacitated', MonsterProto.ConditionType.ICNAPACITATED);
  static readonly INVISIBLE = new ConditionType('invisible', MonsterProto.ConditionType.INVISIBLE);
  static readonly PARALYZED = new ConditionType('paralyzed', MonsterProto.ConditionType.PARALYZED);
  static readonly PETRIFIED = new ConditionType('petrified', MonsterProto.ConditionType.PETRIFIED);
  static readonly POISONED = new ConditionType('poisoned', MonsterProto.ConditionType.POISONED);
  static readonly PRONE = new ConditionType('prone', MonsterProto.ConditionType.PRONE);
  static readonly RESTRAINED = new ConditionType('restrained', MonsterProto.ConditionType.RESTRAINED);
  static readonly STUNNED = new ConditionType('stunned', MonsterProto.ConditionType.STUNNED);
  static readonly UNCONSCIOUS = new ConditionType('unconscious', MonsterProto.ConditionType.UNCONSCIOUS);
  static readonly EXHAUSTION = new ConditionType('exhaustion', MonsterProto.ConditionType.EXHAUSTION);

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
