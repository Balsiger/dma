import { ItemProto } from '../../proto/generated/template_pb';
import { Enum } from '../enum';

export class Probability extends Enum<Probability> {
  static readonly probabilities: Probability[] = [];

  static readonly UNKNOWN = new Probability('Unknown', ItemProto.Probability.UNKNOWN);
  static readonly COMMON = new Probability('Common', ItemProto.Probability.COMMON);
  static readonly UNCOMMON = new Probability('Uncommon', ItemProto.Probability.UNCOMMON);
  static readonly RARE = new Probability('Rare', ItemProto.Probability.RARE);
  static readonly VERY_RARE = new Probability('Very Rare', ItemProto.Probability.VERY_RARE);
  static readonly UNIQUE = new Probability('Unique', ItemProto.Probability.UNIQUE);

  constructor(name: string, proto: number) {
    super(name, proto);
    Probability.probabilities.push(this);
  }

  static fromString(text: string): Probability {
    return Enum.fromStringValue(text, Probability.probabilities, Probability.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Probability {
    return Enum.fromProtoValue(proto, Probability.probabilities, Probability.UNKNOWN);
  }
}
