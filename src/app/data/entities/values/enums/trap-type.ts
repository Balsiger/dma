import { TrapProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class TrapType extends Enum<TrapType> {
  static readonly types: TrapType[] = [];

  static readonly UNKNOWN = new TrapType('Unknown', '?', TrapProto.Type.UNKNOWN);
  static readonly TRAP = new TrapType('Trap', '', TrapProto.Type.TRAP);
  static readonly HAZARD = new TrapType('Hazard', '', TrapProto.Type.HAZARD);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
    include = true,
  ) {
    super(name, proto);
    TrapType.types.push(this);
  }

  static fromString(text: string): TrapType {
    return Enum.fromStringValue(text, TrapType.types, TrapType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): TrapType {
    return Enum.fromProtoValue(proto, TrapType.types, TrapType.UNKNOWN);
  }
}
