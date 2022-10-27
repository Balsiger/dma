import { SizeProto } from '../proto/generated/value_pb';
import { Enum } from './enum';

export class Size extends Enum<Size> {
  static readonly sizes: Size[] = [];

  static readonly UNKNOWN = new Size('Unknown', 'U', 0, SizeProto.UNKNOWN_SIZE, 0, 0, 1);
  static readonly TINY = new Size('Tiny', 'T', 4, SizeProto.TINY, 5, 2, 1);
  static readonly SMALL = new Size('Small', 'S', 6, SizeProto.SMALL, 10, 3, 1);
  static readonly MEDIUM = new Size('Medium', 'M', 8, SizeProto.MEDIUM, 18, 4, 1);
  static readonly LARGE = new Size('Large', 'L', 10, SizeProto.LARGE, 27, 5, 2);
  static readonly HUGE = new Size('Huge', 'H', 12, SizeProto.HUGE, 0, 0, 3);
  static readonly GARGANTUAN = new Size('Gargantuan', 'G', 20, SizeProto.GARGANTUAN, 0, 0, 4);

  constructor(
    name: string,
    public readonly short: string,
    readonly hitDice: number,
    proto: number,
    readonly hitPoints: number,
    readonly hitPointsFragile: number,
    readonly damageMultiplier: number
  ) {
    super(name, proto);
    Size.sizes.push(this);
  }

  resolve(sizes: Size[]) {
    if (this !== Size.UNKNOWN) {
      return this;
    }

    return sizes.find((s) => s !== Size.UNKNOWN) || Size.UNKNOWN;
  }

  static fromString(text: string): Size {
    return Enum.fromStringValue(text, Size.sizes, Size.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Size {
    return Enum.fromProtoValue(proto, Size.sizes, Size.UNKNOWN);
  }
}
