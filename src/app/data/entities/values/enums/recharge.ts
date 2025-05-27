import { MonsterProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Recharge extends Enum<Recharge> {
  static readonly recharges: Recharge[] = [];

  static readonly UNKNOWN = new Recharge('Unknown', 'Ukn', MonsterProto.Action.Recharge.UNKNOWN);
  static readonly LONG_REST = new Recharge('Long Rest', 'LR', MonsterProto.Action.Recharge.LONG_REST);
  static readonly SHORT_REST = new Recharge('Short Rest', 'SR', MonsterProto.Action.Recharge.SHORT_REST);
  static readonly RANDOM_6 = new Recharge('6', '6', MonsterProto.Action.Recharge.RANDOM_6);
  static readonly RANDOM_5_6 = new Recharge('5-6', '5-6', MonsterProto.Action.Recharge.RANDOM_5_6);
  static readonly RANDOM_4_6 = new Recharge('4-6', '4-6', MonsterProto.Action.Recharge.RANDOM_4_6);
  static readonly RANDOM_3_6 = new Recharge('3-6', '3-6', MonsterProto.Action.Recharge.RANDOM_3_6);
  static readonly RANDOM_2_6 = new Recharge('2-6', '2-6', MonsterProto.Action.Recharge.RANDOM_2_6);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);

    Recharge.recharges.push(this);
  }

  static fromString(text: string): Recharge {
    return Enum.fromStringValue(text, Recharge.recharges, Recharge.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Recharge {
    return Enum.fromProtoValue(proto, Recharge.recharges, Recharge.UNKNOWN);
  }
}
