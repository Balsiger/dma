import { ProductProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Layout extends Enum<Layout> {
  static readonly layouts: Layout[] = [];

  static readonly UNKNOWN = new Layout('Unknown', '?', ProductProto.Layout.UNKNOWN_LAYOUT);
  static readonly FULL_COLOR = new Layout('Full Color', 'FC', ProductProto.Layout.FULL_COLOR);
  static readonly FOUR_COLOR = new Layout('Four Color', '4C', ProductProto.Layout.FOUR_COLOR);
  static readonly TWO_COLOR = new Layout('Two Color', '2C', ProductProto.Layout.TWO_COLOR);
  static readonly COLOR_COVER = new Layout('Color Cover', 'CC', ProductProto.Layout.COLOR_COVER);
  static readonly BLACK_AND_WHITE = new Layout('Black and White', 'B&W', ProductProto.Layout.BLACK_AND_WHITE);
  static readonly MIXED = new Layout('Mixed', 'MIX', ProductProto.Layout.MIXED);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    Layout.layouts.push(this);
  }

  static fromString(text: string): Layout {
    return Enum.fromStringValue(text, Layout.layouts, Layout.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Layout {
    return Enum.fromProtoValue(proto, Layout.layouts, Layout.UNKNOWN);
  }
}
