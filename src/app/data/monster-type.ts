import { MonsterTagProto, MonsterTypeProto } from '../proto/generated/value_pb';
import { Enum } from './enum';

export class MonsterType extends Enum<MonsterType> {
  static readonly types: MonsterType[] = [];

  static readonly UNKNOWN = new MonsterType('Unknown', MonsterTypeProto.UNKNOWN_MONSTER_TYPE);
  static readonly ABERRATION = new MonsterType('Aberration', MonsterTypeProto.ABERRATION);
  static readonly BEAST = new MonsterType('Beast', MonsterTypeProto.BEAST);
  static readonly CELESTIAL = new MonsterType('Celestial', MonsterTypeProto.CELESTIAL);
  static readonly CONSTRUCT = new MonsterType('Construct', MonsterTypeProto.CONSTRUCT);
  static readonly DRAGON = new MonsterType('Dragon', MonsterTypeProto.DRAGON);
  static readonly ELEMENTAL = new MonsterType('Elemental', MonsterTypeProto.ELEMENTAL);
  static readonly FEY = new MonsterType('Fey', MonsterTypeProto.FEY);
  static readonly FIEND = new MonsterType('Fiend', MonsterTypeProto.FIEND);
  static readonly GIANT = new MonsterType('Giant', MonsterTypeProto.GIANT);
  static readonly HUMANOID = new MonsterType('Humanoid', MonsterTypeProto.HUMANOID);
  static readonly MONSTROSITY = new MonsterType('Monstrosity', MonsterTypeProto.MONSTROSITY);
  static readonly OOZE = new MonsterType('Ooze', MonsterTypeProto.OOZE);
  static readonly PLANT = new MonsterType('Plant', MonsterTypeProto.PLANT);
  static readonly UNDEAD = new MonsterType('Undead', MonsterTypeProto.UNDEAD);

  constructor(name: string, proto: number) {
    super(name, proto);
    MonsterType.types.push(this);
  }

  resolve(types: MonsterType[]): MonsterType {
    if (this !== MonsterType.UNKNOWN) {
      this;
    }

    return types.find((t) => t !== MonsterType.UNKNOWN) || MonsterType.UNKNOWN;
  }

  static fromString(text: string): MonsterType {
    return Enum.fromStringValue(text, MonsterType.types, MonsterType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): MonsterType {
    return Enum.fromProtoValue(proto, MonsterType.types, MonsterType.UNKNOWN);
  }
}

export class MonsterTag extends Enum<MonsterTag> {
  static readonly tags: MonsterTag[] = [];

  static readonly UNKNOWN = new MonsterTag('Unknown', MonsterTagProto.UNKNOWN_MONSTER_TAG);
  static readonly SHAPECHANGER = new MonsterTag('Shapechanger', MonsterTagProto.SHAPECHANGER);
  static readonly ANY_RACE = new MonsterTag('Any Race', MonsterTagProto.ANY_RACE);
  static readonly DEVIL = new MonsterTag('Devil', MonsterTagProto.DEVIL);
  static readonly HUMAN = new MonsterTag('Human', MonsterTagProto.HUMAN);
  static readonly HALF_ELF = new MonsterTag('Half-elf', MonsterTagProto.HUMAN);
  static readonly GNOME = new MonsterTag('Gnome', MonsterTagProto.GNOME);
  static readonly HALF_ORC = new MonsterTag('Half-orc', MonsterTagProto.HALF_ORC);
  static readonly DRAGONBORN = new MonsterTag('Dragonborn', MonsterTagProto.DRAGONBORN);
  static readonly HALFLING = new MonsterTag('Halfling', MonsterTagProto.HALFLING);
  static readonly TIEFLING = new MonsterTag('Tiefling', MonsterTagProto.TIEFLING);
  static readonly ELF = new MonsterTag('Elf', MonsterTagProto.ELF);
  static readonly DWARF = new MonsterTag('Dwarf', MonsterTagProto.DWARF);
  static readonly GOBLINOID = new MonsterTag('Dwarf', MonsterTagProto.GOBLINOID);

  constructor(name: string, proto: number) {
    super(name, proto);
    MonsterTag.tags.push(this);
  }

  static fromString(text: string): MonsterTag {
    return Enum.fromStringValue(text, MonsterTag.tags, MonsterTag.UNKNOWN);
  }

  static fromProto(proto: number | undefined): MonsterTag {
    return Enum.fromProtoValue(proto, MonsterTag.tags, MonsterTag.UNKNOWN);
  }
}
