import { MonsterProto } from '../proto/generated/template_pb';

export enum DamageType {
  unknown = 'unknown',
  acid = 'acid',
  bludgeoning = 'bludgeoning',
  cold = 'cold',
  fire = 'fire',
  force = 'force',
  lightning = 'lightning',
  necrotic = 'necrotic',
  piercing = 'piercing',
  poison = 'poison',
  psychic = 'psychich',
  radiant = 'radiant',
  slashing = 'slashing',
  thunder = 'thunder',
}

export class Damage {
  static convertType(proto: number): DamageType {
    switch (proto) {
      case MonsterProto.DamageType.ACID:
        return DamageType.acid;
      case MonsterProto.DamageType.BLUDGEONING:
        return DamageType.bludgeoning;
      case MonsterProto.DamageType.COLD:
        return DamageType.cold;
      case MonsterProto.DamageType.FIRE:
        return DamageType.fire;
      case MonsterProto.DamageType.FORCE:
        return DamageType.force;
      case MonsterProto.DamageType.LIGHTNING:
        return DamageType.lightning;
      case MonsterProto.DamageType.NECROTIC:
        return DamageType.necrotic;
      case MonsterProto.DamageType.PIERCING:
        return DamageType.piercing;
      case MonsterProto.DamageType.POISON:
        return DamageType.poison;
      case MonsterProto.DamageType.PSYCHIC:
        return DamageType.psychic;
      case MonsterProto.DamageType.RADIANT:
        return DamageType.radiant;
      case MonsterProto.DamageType.SLASHING:
        return DamageType.slashing;
      case MonsterProto.DamageType.THUNDER:
        return DamageType.thunder;

      default:
        return DamageType.unknown;
    }
  }
}
