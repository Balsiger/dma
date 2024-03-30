import { MonsterTagProto, MonsterTypeProto } from '../../../../proto/generated/value_pb';
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
  static readonly ANY_RACE = new MonsterTag('Any Race', MonsterTagProto.ANY_RACE);
  static readonly BULLYWUG = new MonsterTag('Bullywug', MonsterTagProto.BULLYWUG);
  static readonly DEMON = new MonsterTag('Demon', MonsterTagProto.DEMON);
  static readonly DEVIL = new MonsterTag('Devil', MonsterTagProto.DEVIL);
  static readonly DRAGONBORN = new MonsterTag('Dragonborn', MonsterTagProto.DRAGONBORN);
  static readonly DROW = new MonsterTag('Drow', MonsterTagProto.DROW);
  static readonly DWARF = new MonsterTag('Dwarf', MonsterTagProto.DWARF);
  static readonly ELF = new MonsterTag('Elf', MonsterTagProto.ELF);
  static readonly GENASI = new MonsterTag('Genasi', MonsterTagProto.GENASI);
  static readonly GNOLL = new MonsterTag('Gnoll', MonsterTagProto.GNOLL);
  static readonly GNOME = new MonsterTag('Gnome', MonsterTagProto.GNOME);
  static readonly GOBLINOID = new MonsterTag('Goblin', MonsterTagProto.GOBLINOID);
  static readonly GOLEM = new MonsterTag('Golem', MonsterTagProto.GOLEM);
  static readonly GOLIATH = new MonsterTag('Goliath', MonsterTagProto.GOLIATH);
  static readonly HALF_ELF = new MonsterTag('Half-elf', MonsterTagProto.HUMAN);
  static readonly HALF_ORC = new MonsterTag('Half-orc', MonsterTagProto.HALF_ORC);
  static readonly HALFLING = new MonsterTag('Halfling', MonsterTagProto.HALFLING);
  static readonly HUMAN = new MonsterTag('Human', MonsterTagProto.HUMAN);
  static readonly KENKU = new MonsterTag('Bullywug', MonsterTagProto.KENKU);
  static readonly KOBOLD = new MonsterTag('Kobold', MonsterTagProto.KOBOLD);
  static readonly KUO_TOA = new MonsterTag('Kuo-toa', MonsterTagProto.KUO_TOA);
  static readonly LIZARDFOLK = new MonsterTag('Lizardfolk', MonsterTagProto.LIZARDFOLK);
  static readonly ORC = new MonsterTag('Orc', MonsterTagProto.ORC);
  static readonly QUAGGOTH = new MonsterTag('Quaggoth', MonsterTagProto.QUAGGOTH);
  static readonly SAHUAGIN = new MonsterTag('Sahuagin', MonsterTagProto.SAHUAGIN);
  static readonly SHADOW = new MonsterTag('Shadow', MonsterTagProto.SHADOW);
  static readonly SHAPECHANGER = new MonsterTag('Shapechanger', MonsterTagProto.SHAPECHANGER);
  static readonly SWARM = new MonsterTag('Swarm', MonsterTagProto.SWARM);
  static readonly TIEFLING = new MonsterTag('Tiefling', MonsterTagProto.TIEFLING);
  static readonly TROGLODYTE = new MonsterTag('Troglodyte', MonsterTagProto.TROGLODYTE);
  static readonly YUAN_TI = new MonsterTag('Yuan-ti', MonsterTagProto.YUAN_TI);

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
