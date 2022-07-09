import { MiniatureTemplateProto } from '../proto/generated/template_pb';

export enum Rarity {
  Unknown = "Unknown",
  Undefined = "Undefined",
  Common = "Common",
  Uncommon = "Uncommon",
  Rare = "Rare",
  UltraRare = "Ultra Rare",
  Unique = "Unique",
  Special = "Special",
}

export class Miniature {

  constructor(readonly name: string, readonly rarity: Rarity) {
  }

  static fromProto(proto: MiniatureTemplateProto) {
    return new Miniature(proto.getTemplate()?.getName() || "<no name>",
      convertRarity(proto.getRarity()));
  }
}

function convertRarity(rarity: number): Rarity {
  switch (rarity) {
    case MiniatureTemplateProto.Rarity.COMMON: return Rarity.Common;
    case MiniatureTemplateProto.Rarity.UNCOMMON: return Rarity.Uncommon;
    case MiniatureTemplateProto.Rarity.RARE: return Rarity.Rare;
    case MiniatureTemplateProto.Rarity.ULTRA_RARE: return Rarity.UltraRare;
    case MiniatureTemplateProto.Rarity.UNIQUE: return Rarity.Unique;
    case MiniatureTemplateProto.Rarity.SPECIAL: return Rarity.Special;
    case MiniatureTemplateProto.Rarity.UNDEFINED: return Rarity.Undefined;
  }

  return Rarity.Unknown;
}
