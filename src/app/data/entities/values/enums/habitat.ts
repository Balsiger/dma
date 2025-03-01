import { MonsterProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Habitat extends Enum<Habitat> {
  static readonly habitats: Habitat[] = [];

  static readonly UNDEFINED = new Habitat('Undefined', '?', MonsterProto.Habitat.UNDEFINED_HABITAT);
  static readonly ARCTIC = new Habitat('Arctic', 'Arc', MonsterProto.Habitat.ARCTIC);
  static readonly COASTAL = new Habitat('Coastal', 'Cst', MonsterProto.Habitat.COASTAL);
  static readonly DESERT = new Habitat('Desert', 'Drt', MonsterProto.Habitat.DESERT);
  static readonly FOREST = new Habitat('Forest', 'Fst', MonsterProto.Habitat.FOREST);
  static readonly GRASSLAND = new Habitat('Grassland', 'Grs', MonsterProto.Habitat.GRASSLAND);
  static readonly MOUNTAIN = new Habitat('Mountain', 'Mnt', MonsterProto.Habitat.MOUNTAIN);
  static readonly SWAMP = new Habitat('Swamp', 'Swm', MonsterProto.Habitat.SWAMP);
  static readonly UNDERDRARK = new Habitat('Underdark', 'Udk', MonsterProto.Habitat.UNDERDRAK);
  static readonly UNDERWATER = new Habitat('Underwater', 'Uwt', MonsterProto.Habitat.UNDERWATER);
  static readonly URBAN = new Habitat('Urban', 'Urb', MonsterProto.Habitat.URBAN);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    Habitat.habitats.push(this);
  }

  resolve(other: Habitat[]): Habitat {
    if (this !== Habitat.UNDEFINED) {
      return this;
    }

    for (const version of other) {
      if (version !== Habitat.UNDEFINED) {
        return version;
      }
    }

    return this;
  }

  static fromString(text: string): Habitat {
    return Enum.fromStringValue(text, Habitat.habitats, Habitat.UNDEFINED);
  }

  static fromProto(proto: number | undefined): Habitat {
    return Enum.fromProtoValue(proto, Habitat.habitats, Habitat.UNDEFINED);
  }
}
