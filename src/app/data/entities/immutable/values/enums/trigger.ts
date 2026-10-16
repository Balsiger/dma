import { FeatureProto } from '../../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Trigger extends Enum<Trigger> {
  static readonly types: Trigger[] = [];

  static readonly UNKNOWN = new Trigger('Unknown', '?', FeatureProto.Trigger.UNKNOWN_TRIGGER);
  static readonly STEALTH = new Trigger('Stealth', 'Stl', FeatureProto.Trigger.CHECK_STEALTH);
  static readonly INITIATIVE = new Trigger('Initiative', 'Ini', FeatureProto.Trigger.CHECK_INITIATIVE);
  static readonly INTIMIDATION = new Trigger('Intimidation', 'Int', FeatureProto.Trigger.CHECK_INTIMIDATION);
  static readonly PERFORMANCE = new Trigger('Performance', 'Pfm', FeatureProto.Trigger.CHECK_PERFORMANCE);
  static readonly PERSUASION = new Trigger('Persuasion', 'Prs', FeatureProto.Trigger.CHECK_PERSUASION);
  static readonly ATTACK = new Trigger('Attack', 'Atk', FeatureProto.Trigger.ATTACK);
  static readonly DAMAGED = new Trigger('Damaged', 'Dmg', FeatureProto.Trigger.DAMAGED);
  static readonly MISS = new Trigger('Miss', 'Mss', FeatureProto.Trigger.MISS);
  static readonly HIT = new Trigger('Hit', 'Hit', FeatureProto.Trigger.HIT);
  static readonly INSIGHT = new Trigger('Insight', 'Ins', FeatureProto.Trigger.CHECK_INSIGHT);
  static readonly HISTORY = new Trigger('History', 'Hst', FeatureProto.Trigger.CHECK_HISTORY);
  static readonly INVESTIGATION = new Trigger('Investigation', 'Inv', FeatureProto.Trigger.CHECK_INVESTIGATION);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    Trigger.types.push(this);
  }

  static fromString(text: string): Trigger {
    return Enum.fromStringValue(text, Trigger.types, Trigger.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Trigger {
    return Enum.fromProtoValue(proto, Trigger.types, Trigger.UNKNOWN);
  }
}
