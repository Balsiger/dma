import { NPCProto } from '../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Gender extends Enum<Gender> {
  static readonly genders: Gender[] = [];

  static readonly UNKNOWN = new Gender('Unknown', '?', NPCProto.Gender.UNKNOWN_GENDER);
  static readonly FEMALE = new Gender('Female', 'F', NPCProto.Gender.FEMALE);
  static readonly MALE = new Gender('Male', 'M', NPCProto.Gender.MALE);
  static readonly SPECIAL = new Gender('Special', 'S', NPCProto.Gender.SPECIAL);

  constructor(name: string, public readonly short: string, proto: number) {
    super(name, proto);
    Gender.genders.push(this);
  }

  resolve(other: Gender[]): Gender {
    if (this !== Gender.UNKNOWN) {
      return this;
    }

    for (const alignment of other) {
      if (alignment !== Gender.UNKNOWN) {
        return alignment;
      }
    }

    return this;
  }

  static fromString(text: string): Gender {
    return Enum.fromStringValue(text, Gender.genders, Gender.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Gender {
    return Enum.fromProtoValue(proto, Gender.genders, Gender.UNKNOWN);
  }
}
