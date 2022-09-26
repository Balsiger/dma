import { MonsterProto } from '../proto/generated/template_pb';

export enum ConditionType {
  unknown = 'unknown',
  blinded = 'blinded',
  charmed = 'charmed',
  deafened = 'deafened',
  frightened = 'frightened',
  grappled = 'grappled',
  incapacitated = 'incapacitated',
  invisible = 'invisible',
  paralyzed = 'paralyzed',
  petrified = 'petrified',
  poisoned = 'poisoned',
  prone = 'prone',
  restrained = 'restrained',
  stunned = 'stunned',
  unconscious = 'unconscious',
  exhaustion = 'exhaustion',
}

export class Condition {
  static convertType(proto: number): ConditionType {
    switch (proto) {
      case MonsterProto.ConditionType.BLINDED:
        return ConditionType.blinded;
      case MonsterProto.ConditionType.CHARMED:
        return ConditionType.charmed;
      case MonsterProto.ConditionType.DEAFENED:
        return ConditionType.deafened;
      case MonsterProto.ConditionType.FRIGHTENED:
        return ConditionType.frightened;
      case MonsterProto.ConditionType.GRAPPLED:
        return ConditionType.grappled;
      case MonsterProto.ConditionType.ICNAPACITATED:
        return ConditionType.incapacitated;
      case MonsterProto.ConditionType.INVISIBLE:
        return ConditionType.invisible;
      case MonsterProto.ConditionType.PARALYZED:
        return ConditionType.paralyzed;
      case MonsterProto.ConditionType.PETRIFIED:
        return ConditionType.petrified;
      case MonsterProto.ConditionType.POISONED:
        return ConditionType.poisoned;
      case MonsterProto.ConditionType.PRONE:
        return ConditionType.prone;
      case MonsterProto.ConditionType.RESTRAINED:
        return ConditionType.restrained;
      case MonsterProto.ConditionType.STUNNED:
        return ConditionType.stunned;
      case MonsterProto.ConditionType.UNCONSCIOUS:
        return ConditionType.unconscious;
      case MonsterProto.ConditionType.EXHAUSTION:
        return ConditionType.exhaustion;

      default:
        return ConditionType.unknown;
    }
  }
}
