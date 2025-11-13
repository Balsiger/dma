import { TrapProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class SeverityType extends Enum<SeverityType> {
  static readonly types: SeverityType[] = [];

  static readonly UNKNOWN = new SeverityType('Unknown', '?', TrapProto.Severity.Type.UNKNOWN);
  static readonly NUISANCE = new SeverityType('Nuisance', '👎', TrapProto.Severity.Type.NUISANCE);
  static readonly DEADLY = new SeverityType('Deadly', '💀', TrapProto.Severity.Type.DEADLY);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
    include = true,
  ) {
    super(name, proto);
    SeverityType.types.push(this);
  }

  static fromString(text: string): SeverityType {
    return Enum.fromStringValue(text, SeverityType.types, SeverityType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): SeverityType {
    return Enum.fromProtoValue(proto, SeverityType.types, SeverityType.UNKNOWN);
  }
}
