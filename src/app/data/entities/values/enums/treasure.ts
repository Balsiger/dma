import { MonsterProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Treasure extends Enum<Treasure> {
  static readonly treasures: Treasure[] = [];

  static readonly UNDEFINED = new Treasure('Undefined', '?', MonsterProto.TreasureType.UNDEFINED_TREASURE);
  static readonly NONE = new Treasure('None', '-', MonsterProto.TreasureType.NONE);
  static readonly ANY = new Treasure('Any', 'Any', MonsterProto.TreasureType.ANY_TREASURE);
  static readonly INDIVIDUAL = new Treasure('Individual', 'Idv', MonsterProto.TreasureType.INDIVIDUAL);
  static readonly ARCANA = new Treasure('Arcana', 'Aca', MonsterProto.TreasureType.ARCANA_TREASURE);
  static readonly ARMAMENTS = new Treasure('Armaments', 'Arm', MonsterProto.TreasureType.ARMAMENTS);
  static readonly IMPLEMENTS = new Treasure('Implements', 'Imp', MonsterProto.TreasureType.IMPLEMENTS);
  static readonly RELICS = new Treasure('Relics', 'Rlc', MonsterProto.TreasureType.RELICS);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    Treasure.treasures.push(this);
  }

  resolve(other: Treasure[]): Treasure {
    if (this !== Treasure.UNDEFINED) {
      return this;
    }

    for (const treasure of other) {
      if (treasure !== Treasure.UNDEFINED) {
        return treasure;
      }
    }

    return this;
  }

  static fromString(text: string): Treasure {
    return Enum.fromStringValue(text, Treasure.treasures, Treasure.UNDEFINED);
  }

  static fromProto(proto: number | undefined): Treasure {
    return Enum.fromProtoValue(proto, Treasure.treasures, Treasure.UNDEFINED);
  }
}
