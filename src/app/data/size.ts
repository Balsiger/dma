import { SizeProto } from '../proto/generated/value_pb';
import { Enum } from './enum';

export class Size extends Enum<Size> {
  static readonly sizes: Size[] = [];

  static readonly UNKNOWN = new Size('Unknown', 'U', SizeProto.UNKNOWN_SIZE);
  static readonly FINE = new Size('Fine', 'F', SizeProto.FINE);
  static readonly DIMINUTIVE = new Size('Diminutive', 'D', SizeProto.DIMINUTIVE);
  static readonly TINY = new Size('Tiny', 'T', SizeProto.TINY);
  static readonly SMALL = new Size('Small', 'S', SizeProto.SMALL);
  static readonly MEDIUM = new Size('Medium', 'M', SizeProto.MEDIUM);
  static readonly LARGE = new Size('Large', 'L', SizeProto.LARGE);
  static readonly HUGE = new Size('Huge', 'H', SizeProto.HUGE);
  static readonly GARGANTUAN = new Size('Gargantuan', 'G', SizeProto.GARGANTUAN);
  static readonly COLOSSAL = new Size('Colossal', 'C', SizeProto.COLOSSAL);

  constructor(name: string, public readonly short: string, proto: number) {
    super(name, proto);
    Size.sizes.push(this);
  }

  static fromString(text: string): Size {
    return Enum.fromStringValue(text, Size.sizes, Size.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Size {
    return Enum.fromProtoValue(proto, Size.sizes, Size.UNKNOWN);
  }
}
