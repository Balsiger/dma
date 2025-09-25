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
  static readonly HILL = new Habitat('Hill', 'Hll', MonsterProto.Habitat.HILL);
  static readonly MOUNTAIN = new Habitat('Mountain', 'Mnt', MonsterProto.Habitat.MOUNTAIN);
  static readonly SWAMP = new Habitat('Swamp', 'Swm', MonsterProto.Habitat.SWAMP);
  static readonly UNDERDRARK = new Habitat('Underdark', 'Udk', MonsterProto.Habitat.UNDERDRAK);
  static readonly UNDERWATER = new Habitat('Underwater', 'Uwt', MonsterProto.Habitat.UNDERWATER);
  static readonly URBAN = new Habitat('Urban', 'Urb', MonsterProto.Habitat.URBAN);
  static readonly PLANAR_LIMBO = new Habitat('Planar (Limbo)', 'Limbo', MonsterProto.Habitat.PLANAR_LIMBO);
  static readonly PLANAR_FEYWILD = new Habitat('Planar (Feywild)', 'Feywild', MonsterProto.Habitat.PLANAR_FEYWILD);
  static readonly PLANAR_GEHENNA = new Habitat('Planar (Gehenna)', 'Gehenna', MonsterProto.Habitat.PLANAR_GEHENNA);
  static readonly PLANAR_ABYSS = new Habitat('Planar (Abyss)', 'Abyss', MonsterProto.Habitat.PLANAR_ABYSS);
  static readonly PLANAR_ELEMENTAL_AIR = new Habitat(
    'Planar (Elemental Plane of Air)',
    'Air',
    MonsterProto.Habitat.PLANAR_ELEMENTAL_AIR,
  );
  static readonly PLANAR_ELEMENTAL_CHAOS = new Habitat(
    'Planar (Elemental Chaos)',
    'Chaos',
    MonsterProto.Habitat.PLANAR_ELEMENTAL_CHAOS,
  );
  static readonly PLANAR_BEASTLANDS = new Habitat(
    'Planar (Beastlands)',
    'Beastlands',
    MonsterProto.Habitat.PLANAR_BEASTLANDS,
  );
  static readonly PLANAR_LOWER_PLANES = new Habitat(
    'Planar (Lower Planes)',
    'Lower PLanes',
    MonsterProto.Habitat.PLANAR_LOWER_PLANES,
  );
  static readonly PLANAR_UPPER_PLANES = new Habitat(
    'Planar (Upper Planes)',
    'Upper PLanes',
    MonsterProto.Habitat.PLANAR_UPPER_PLANES,
  );
  static readonly PLANAR_ELEMENTAL_FIRE = new Habitat(
    'Planar (Elemental Plane of Fire)',
    'Fire',
    MonsterProto.Habitat.PLANAR_ELEMENTAL_FIRE,
  );
  static readonly PLANAR_ELEMENTAL_EARTH = new Habitat(
    'Planar (Elemental Plane of Earth)',
    'Earth',
    MonsterProto.Habitat.PLANAR_ELEMENTAL_EARTH,
  );
  static readonly PLANAR_ELEMENTAL_WATER = new Habitat(
    'Planar (Elemental Plane of Water)',
    'Water',
    MonsterProto.Habitat.PLANAR_ELEMENTAL_WATER,
  );
  static readonly PLANAR_NINE_HELLS = new Habitat(
    'Planar (Nine Hells)',
    'Nine Hells',
    MonsterProto.Habitat.PLANAR_NINE_HELLS,
  );
  static readonly PLANAR_ASTRAL_PLANE = new Habitat(
    'Planar (Astral Plane)',
    'Astral Plane',
    MonsterProto.Habitat.PLANAR_ASTRAL_PLANE,
  );
  static readonly PLANAR_ACHEREON = new Habitat('Planar (Acheron)', 'Acheron', MonsterProto.Habitat.PLANAR_ACHERON);
  static readonly PLANAR_SHADOFELL = new Habitat(
    'Planar (Shadowfell)',
    'Shadowfell',
    MonsterProto.Habitat.PLANAR_SHADOWFELL,
  );
  static readonly PLANAR_MECHANUS = new Habitat('Planar (Mechanus)', 'Mechanus', MonsterProto.Habitat.PLANAR_MECHANUS);
  static readonly PLANAR_ETHEREAL = new Habitat('Planar (Ethereal)', 'Ethereal', MonsterProto.Habitat.PLANAR_ETHEREAL);

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
