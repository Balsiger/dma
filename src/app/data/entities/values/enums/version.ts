import { CommonProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Version extends Enum<Version> {
  static readonly versions: Version[] = [];

  static readonly DND_5 = new Version('D&D 5', '5', CommonProto.Version.DND_5);
  static readonly DND_5_24 = new Version('D&D 5 (2024)', '5-24', CommonProto.Version.DND_5_24);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    Version.versions.push(this);
  }

  resolve(other: Version[]): Version {
    if (this !== Version.DND_5) {
      return this;
    }

    for (const version of other) {
      if (version !== Version.DND_5) {
        return version;
      }
    }

    return this;
  }

  static fromString(text: string): Version {
    return Enum.fromStringValue(text, Version.versions, Version.DND_5);
  }

  static fromProto(proto: number | undefined): Version {
    return Enum.fromProtoValue(proto, Version.versions, Version.DND_5);
  }
}
