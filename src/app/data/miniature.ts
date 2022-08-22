import { MiniatureTemplateProto } from '../proto/generated/template_pb';
import { SizeProto } from '../proto/generated/value_pb';
import { FilterData } from "./FilterData";

export enum Rarity {
  Common = "Common",
  Uncommon = "Uncommon",
  Rare = "Rare",
  UltraRare = "Ultra Rare",
  Unique = "Unique",
  Special = "Special",
  Unknown = "Unknown",
  Undefined = "Undefined",
}

export enum Size {
  Fine = "Fine",
  Diminutive = "Diminutive",
  Tiny = "Tiny",
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  Huge = "Huge",
  Gargantuan = "Gargantuan",
  Colossal = "Colossal",
  Unknown = "Unknown",
}

export class Miniature {

  owned = 0;
  location = '';
  locationStyle = '';

  constructor(readonly name: string, readonly rarity: Rarity, readonly size: Size, readonly type: string,
    readonly subtypes: string[], readonly race: string, readonly classes: string[], readonly set: string,
    readonly number: number, readonly numberAffix: string) {
  }

  matches(filter?: FilterData, debug = false): boolean {
    if (!filter) {
      return true;
    }

    const result =  (!filter.name || this.name.toLocaleLowerCase().includes(filter.name)) &&
        (!filter.rarities.length || filter.rarities.indexOf(this.rarity) >= 0) &&
        (!filter.sizes.length || filter.sizes.indexOf(this.size) >= 0) &&
        (!filter.types.length || filter.types.indexOf(this.type) >= 0) &&
        // The filters from firestore store types and subtypes all in types!
        this.matchesTypes(filter.types) && this.matchesTypes(filter.subtypes) &&
        (!filter.races.length || filter.races.indexOf(this.race) >= 0) &&
        this.matchesClasses(filter.classes) &&
        (!filter.locations.length || filter.locations.indexOf(this.location) >= 0) &&
        (!filter.sets.length || filter.sets.indexOf(this.set) >= 0);

    return result;
  }

  private matchesTypes(types: string[]) {
    if (!types.length) {
      return true;
    }

    // Each of the types has to match either the miniature type or one of it's subtypes.
    for (const type of types) {
      if (type !== this.type) {
        if (this.subtypes.indexOf(type) < 0) {
          return false;
        }
      }
    }

    return true;
  }

  private matchesClasses(classes: string[]) {
    if (!classes.length) {
      return true;
    }
    
    for (const c of classes) {
      if (this.classes.indexOf(c) >= 0) {
        return true;
      }
    }

    return false;
  }

  static fromProto(proto: MiniatureTemplateProto) {
    return new Miniature(proto.getTemplate()?.getName() || "<no name>",
      Miniature.convertRarity(proto.getRarity()),
      Miniature.convertSize(proto.getSize()),
      proto.getType(), proto.getSubtypeList(), proto.getRace(), proto.getClassList(), proto.getSet(),
      proto.getNumber(), proto.getNumberAffix());
  }

  static convertRarity(rarity: number): Rarity {
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

  static convertSize(size: number): Size {
    switch (size) {
      case SizeProto.Size.FINE: return Size.Fine;
      case SizeProto.Size.DIMINUTIVE: return Size.Diminutive;
      case SizeProto.Size.TINY: return Size.Tiny;
      case SizeProto.Size.SMALL: return Size.Small;
      case SizeProto.Size.MEDIUM: return Size.Medium;
      case SizeProto.Size.LARGE: return Size.Large;
      case SizeProto.Size.HUGE: return Size.Huge;
      case SizeProto.Size.GARGANTUAN: return Size.Gargantuan;
      case SizeProto.Size.COLOSSAL: return Size.Colossal;
    }

    return Size.Unknown;
  }  
}

