import { FeatureProto } from '../../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class FeatureType extends Enum<FeatureType> {
  static readonly types: FeatureType[] = [];

  static readonly UNKNOWN = new FeatureType('Unknown', '?', FeatureProto.Type.UNKNOWN_FEATURE);
  static readonly TRAP = new FeatureType('Maneuver', 'M', FeatureProto.Type.MANEUVER);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    FeatureType.types.push(this);
  }

  static fromString(text: string): FeatureType {
    return Enum.fromStringValue(text, FeatureType.types, FeatureType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): FeatureType {
    return Enum.fromProtoValue(proto, FeatureType.types, FeatureType.UNKNOWN);
  }
}
