import { MiniatureProto } from '../../proto/generated/template_pb';
import { FilterData } from '../filter_data';
import { EMPTY as REFERENCES_EMPTY } from '../values/references';
import { Size } from '../values/size';
import { Common, Entity } from './entity';

export enum Rarity {
  Common = 'Common',
  Uncommon = 'Uncommon',
  Rare = 'Rare',
  UltraRare = 'Ultra Rare',
  Unique = 'Unique',
  Special = 'Special',
  Unknown = 'Unknown',
  Undefined = 'Undefined',
}

export class Miniature extends Entity<Miniature> {
  owned = 0;
  location = '';
  locationStyle = '';

  constructor(
    name: string,
    readonly rarity: Rarity,
    readonly size: Size,
    readonly type: string,
    readonly subtypes: string[],
    readonly race: string,
    readonly classes: string[],
    readonly set: string,
    readonly number: number,
    readonly numberAffix: string
  ) {
    super(new Common(name, [], '', '', [], REFERENCES_EMPTY, []));
  }

  matches(filter?: FilterData): boolean {
    if (!filter) {
      return true;
    }

    const result =
      (!filter.name || this.name.toLocaleLowerCase().includes(filter.name)) &&
      (!filter.rarities.length || filter.rarities.indexOf(this.rarity) >= 0) &&
      (!filter.sizes.length || filter.sizes.indexOf(this.size) >= 0) &&
      (!filter.types.length || filter.types.indexOf(this.type) >= 0) &&
      // The filters from firestore store types and subtypes all in types!
      this.matchesTypes(filter.types) &&
      this.matchesTypes(filter.subtypes) &&
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

  static create(name: string): Miniature {
    return new Miniature(name, Rarity.Unknown, Size.UNKNOWN, '', [], '', [], '', 0, '');
  }

  resolve(bases: Miniature[]): Miniature {
    return this;
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

  static fromProto(proto: MiniatureProto) {
    return new Miniature(
      proto.getTemplate()?.getName() || '<no name>',
      Miniature.convertRarity(proto.getRarity()),
      Size.fromProto(proto.getSize()),
      proto.getType(),
      proto.getSubtypeList(),
      proto.getRace(),
      proto.getClassList(),
      proto.getSet(),
      proto.getNumber(),
      proto.getNumberAffix()
    );
  }

  static convertRarity(rarity: number): Rarity {
    switch (rarity) {
      case MiniatureProto.Rarity.COMMON:
        return Rarity.Common;
      case MiniatureProto.Rarity.UNCOMMON:
        return Rarity.Uncommon;
      case MiniatureProto.Rarity.RARE:
        return Rarity.Rare;
      case MiniatureProto.Rarity.ULTRA_RARE:
        return Rarity.UltraRare;
      case MiniatureProto.Rarity.UNIQUE:
        return Rarity.Unique;
      case MiniatureProto.Rarity.SPECIAL:
        return Rarity.Special;
      case MiniatureProto.Rarity.UNDEFINED:
        return Rarity.Undefined;
    }

    return Rarity.Unknown;
  }
}
