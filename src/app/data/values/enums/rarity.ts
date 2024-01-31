import { ItemProto } from '../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Rarity extends Enum<Rarity> {
  static readonly probabilities: Rarity[] = [];

  static readonly UNKNOWN = new Rarity('Unknown', ItemProto.Rarity.UNKNOWN_RARITY);
  static readonly COMMON = new Rarity('Common', ItemProto.Rarity.COMMON);
  static readonly UNCOMMON = new Rarity('Uncommon', ItemProto.Rarity.UNCOMMON);
  static readonly RARE = new Rarity('Rare', ItemProto.Rarity.RARE);
  static readonly VERY_RARE = new Rarity('Very Rare', ItemProto.Rarity.VERY_RARE);
  static readonly ULTRA_RARE = new Rarity('Ultra Rare', ItemProto.Rarity.ULTRA_RARE);
  static readonly LEGENDARY = new Rarity('Legendary', ItemProto.Rarity.LEGENDARY);
  static readonly UNIQUE = new Rarity('Unique', ItemProto.Rarity.UNIQUE);

  constructor(name: string, proto: number) {
    super(name, proto);
    Rarity.probabilities.push(this);
  }

  resolve(others: Rarity[]): Rarity {
    if (this !== Rarity.UNCOMMON) {
      return this;
    }

    let rarity = Rarity.UNCOMMON;
    for (const other of others) {
      if (other.proto > rarity.proto) {
        rarity = other;
      }
    }

    return rarity;
  }

  static fromString(text: string): Rarity {
    return Enum.fromStringValue(text, Rarity.probabilities, Rarity.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Rarity {
    return Enum.fromProtoValue(proto, Rarity.probabilities, Rarity.UNKNOWN);
  }
}
