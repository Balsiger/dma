import { ProductProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Audience extends Enum<Audience> {
  static readonly audiences: Audience[] = [];

  static readonly UNKNOWN = new Audience('Unknown', '?', ProductProto.Audience.UNKNOWN);
  static readonly DM = new Audience('DM', 'DM', ProductProto.Audience.DM);
  static readonly PLAYER = new Audience('Player', 'PL', ProductProto.Audience.PLAYER);
  static readonly ALL = new Audience('All', 'All', ProductProto.Audience.ALL);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
  }

  static fromString(text: string): Audience {
    return Enum.fromStringValue(text, Audience.audiences, Audience.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Audience {
    return Enum.fromProtoValue(proto, Audience.audiences, Audience.UNKNOWN);
  }
}
