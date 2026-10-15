import { FeatureProto } from '../../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Blocker extends Enum<Blocker> {
  static readonly types: Blocker[] = [];

  static readonly UNKNOWN = new Blocker('Unknown', '?', FeatureProto.Blocker.UNKNOWN_BLOCKER);
  static readonly INCAPACITATED = new Blocker('Incapacitated', 'I', FeatureProto.Blocker.INCAPACITATED);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    Blocker.types.push(this);
  }

  static fromString(text: string): Blocker {
    return Enum.fromStringValue(text, Blocker.types, Blocker.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Blocker {
    return Enum.fromProtoValue(proto, Blocker.types, Blocker.UNKNOWN);
  }
}
