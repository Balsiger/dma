import { FeatureProto } from '../../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Trigger extends Enum<Trigger> {
  static readonly types: Trigger[] = [];

  static readonly UNKNOWN = new Trigger('Unknown', '?', FeatureProto.Trigger.UNKNOWN_TRIGGER);
  static readonly STEALTH = new Trigger('Stealth', 'D-S', FeatureProto.Trigger.CHECK_STEALTH);
  static readonly INITIATIVE = new Trigger('Initiative', 'I', FeatureProto.Trigger.CHECK_INITIATIVE);

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
