import { MagicProto } from '../../../proto/generated/template_pb';
import { ValueType } from './enums/value_type';

export class Modificator {
  constructor(
    readonly type: ValueType,
    readonly name: string,
    readonly value: number,
  ) {}

  public static fromProto(proto: MagicProto.Modifier): Modificator {
    return new Modificator(ValueType.fromProto(proto.getType()), proto.getName(), proto.getValue());
  }
}
