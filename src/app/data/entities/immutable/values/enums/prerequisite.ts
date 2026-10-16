import { FeatureProto } from '../../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Prerequisite extends Enum<Prerequisite> {
  static readonly types: Prerequisite[] = [];

  static readonly UNKNOWN = new Prerequisite('Unknown', '?', FeatureProto.Prerequisites.UNKNOWN_PREREQUISITES);
  static readonly WILLING = new Prerequisite('Willing', 'W', FeatureProto.Prerequisites.WILLING);
  static readonly WITHIN_5_FEET = new Prerequisite('Within 5ft', '5"', FeatureProto.Prerequisites.WITHIN_5_FEET);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    Prerequisite.types.push(this);
  }

  static fromString(text: string): Prerequisite {
    return Enum.fromStringValue(text, Prerequisite.types, Prerequisite.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Prerequisite {
    return Enum.fromProtoValue(proto, Prerequisite.types, Prerequisite.UNKNOWN);
  }
}
