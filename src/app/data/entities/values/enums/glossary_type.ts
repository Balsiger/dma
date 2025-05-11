import { GlossaryProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class GlossaryType extends Enum<GlossaryType> {
  static readonly types: GlossaryType[] = [];

  static readonly UNKNOWN = new GlossaryType('Unknown', '?', GlossaryProto.Type.UNKNOWN);
  static readonly NONE = new GlossaryType('None', '', GlossaryProto.Type.NONE);
  static readonly ACTION = new GlossaryType('Action', 'ACT', GlossaryProto.Type.ACTION);
  static readonly AREA_OF_EFFECT = new GlossaryType('Area of Effect', 'AoE', GlossaryProto.Type.AREA_OF_EFFECT);
  static readonly ATTITUDE = new GlossaryType('Attitude', 'Att', GlossaryProto.Type.ATTITUDE);
  static readonly CONDITION = new GlossaryType('Condition', 'Cnd', GlossaryProto.Type.CONDITION);
  static readonly HAZARD = new GlossaryType('Hazard', 'Hzd', GlossaryProto.Type.HAZARD);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    GlossaryType.types.push(this);
  }

  resolve(other: GlossaryType[]): GlossaryType {
    if (this !== GlossaryType.UNKNOWN) {
      return this;
    }

    for (const type of other) {
      if (type !== GlossaryType.UNKNOWN) {
        return type;
      }
    }

    return this;
  }

  static fromString(text: string): GlossaryType {
    return Enum.fromStringValue(text, GlossaryType.types, GlossaryType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): GlossaryType {
    return Enum.fromProtoValue(proto, GlossaryType.types, GlossaryType.UNKNOWN);
  }
}
