import { DamageProto } from '../../../../proto/generated/value_pb';
import { Enum } from './enum';

export class DamageType extends Enum<DamageType> {
  static readonly types: DamageType[] = [];

  static readonly UNKNOWN = new DamageType('Unknown', DamageProto.DamageType.UNKNOWN_DAMAGE_TYPE, false);
  static readonly ACID = new DamageType('Acid', DamageProto.DamageType.ACID, false);
  static readonly BLUDGEONING = new DamageType('Bludgeoning', DamageProto.DamageType.BLUDGEONING, true);
  static readonly COLD = new DamageType('Cold', DamageProto.DamageType.COLD, false);
  static readonly FIRE = new DamageType('Fire', DamageProto.DamageType.FIRE, false);
  static readonly FORCE = new DamageType('Force', DamageProto.DamageType.FORCE, false);
  static readonly LIGHTNING = new DamageType('Lightning', DamageProto.DamageType.LIGHTNING, false);
  static readonly NECROTIC = new DamageType('Necrotic', DamageProto.DamageType.NECROTIC, false);
  static readonly PIERCING = new DamageType('Piercing', DamageProto.DamageType.PIERCING, true);
  static readonly POISON = new DamageType('Poison', DamageProto.DamageType.POISON, false);
  static readonly PSYCHIC = new DamageType('Psychic', DamageProto.DamageType.PSYCHIC, true);
  static readonly RADIANT = new DamageType('Radiant', DamageProto.DamageType.RADIANT, false);
  static readonly SLASHING = new DamageType('Slashing', DamageProto.DamageType.SLASHING, false);
  static readonly THUNDER = new DamageType('Thunder', DamageProto.DamageType.THUNDER, false);
  static readonly BLUDGEONING_NON_MAGICAL = new DamageType(
    'bludgeoning from nonmagical weapon',
    DamageProto.DamageType.BLUDGEONING_NON_MAGICAL,
    false,
  );
  static readonly PIERCING_NON_MAGICAL = new DamageType(
    'piercing from nonmagical weapon',
    DamageProto.DamageType.PIERCING_NON_MAGICAL,
    false,
  );
  static readonly SLASHING_NON_MAGICAL = new DamageType(
    'slashing from nonmagical weapon',
    DamageProto.DamageType.SLASHING_NON_MAGICAL,
    false,
  );
  static readonly BLUDGEONING_NON_MAGICAL_NON_SILVER = new DamageType(
    "bludgeoning from nonmagical weapon that aren't silvered",
    DamageProto.DamageType.BLUDGEONING_NON_MAGICAL_NON_SILVER,
    false,
  );
  static readonly PIERCING_NON_MAGICAL_NON_SILVER = new DamageType(
    "piercing from nonmagical weapon that aren't silvered",
    DamageProto.DamageType.PIERCING_NON_MAGICAL_NON_SILVER,
    false,
  );
  static readonly SLASHING_NON_MAGICAL_NON_SILVER = new DamageType(
    "slashing from nonmagical weapon that aren't silvered",
    DamageProto.DamageType.SLASHING_NON_MAGICAL_NON_SILVER,
    false,
  );
  static readonly BLUDGEONING_NON_MAGICAL_NON_ADAMANTINE = new DamageType(
    "bludgeoning from nonmagical weapon that aren't adamantine",
    DamageProto.DamageType.BLUDGEONING_NON_MAGICAL_NON_ADAMANTINE,
    false,
  );
  static readonly PIERCING_NON_MAGICAL_NON_ADAMANTINE = new DamageType(
    "piercing from nonmagical weapon that aren't adamantine",
    DamageProto.DamageType.PIERCING_NON_MAGICAL_NON_ADAMANTINE,
    false,
  );
  static readonly SLASHING_NON_MAGICAL_NON_ADAMANTINE = new DamageType(
    "slashing from nonmagical weapon that aren't adamantine",
    DamageProto.DamageType.SLASHING_NON_MAGICAL_NON_ADAMANTINE,
    false,
  );
  static readonly DAMAGE_FROM_SPELLS = new DamageType(
    'Damage from spells',
    DamageProto.DamageType.DAMAGE_FROM_SPELLS,
    false,
  );

  constructor(
    name: string,
    proto: number,
    readonly isBasic: boolean,
  ) {
    super(name, proto);
    DamageType.types.push(this);
  }

  static fromString(text: string): DamageType {
    return Enum.fromStringValue(text, DamageType.types, DamageType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): DamageType {
    return Enum.fromProtoValue(proto, DamageType.types, DamageType.UNKNOWN);
  }
}
