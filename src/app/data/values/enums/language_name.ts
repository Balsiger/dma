import { MonsterProto } from '../../../proto/generated/template_pb';
import { Enum } from './enum';

export class LanguageName extends Enum<LanguageName> {
  static readonly names: LanguageName[] = [];

  static readonly UNKNOWN = new LanguageName('Unknown', MonsterProto.Languages.Name.UNKNOWN_LANGUAGE);
  static readonly COMMON = new LanguageName('Common', MonsterProto.Languages.Name.COMMON);
  static readonly DWARVISH = new LanguageName('Dwarvish', MonsterProto.Languages.Name.DWARVISH);
  static readonly ELVISH = new LanguageName('Elvish', MonsterProto.Languages.Name.ELVISH);
  static readonly GIANT = new LanguageName('Giant', MonsterProto.Languages.Name.GIANT);
  static readonly GNOMISH = new LanguageName('Gnomish', MonsterProto.Languages.Name.GNOMISH);
  static readonly GOBLIN = new LanguageName('Goblin', MonsterProto.Languages.Name.GOBLIN);
  static readonly HALFLING = new LanguageName('Halfling', MonsterProto.Languages.Name.HALFLING);
  static readonly ORC = new LanguageName('Orc', MonsterProto.Languages.Name.ORC);
  static readonly ABYSSAL = new LanguageName('Abyssal', MonsterProto.Languages.Name.ABYSSAL);
  static readonly CELESTIAL = new LanguageName('Celestial', MonsterProto.Languages.Name.CELESTIAL);
  static readonly DRACONIC = new LanguageName('Draconic', MonsterProto.Languages.Name.DRACONIC);
  static readonly DEEP_SPEECH = new LanguageName('Deep Speech', MonsterProto.Languages.Name.DEEP_SPEECH);
  static readonly INFERNAL = new LanguageName('Infernal', MonsterProto.Languages.Name.INFERNAL);
  static readonly PRIMORDIAL = new LanguageName('Primordial', MonsterProto.Languages.Name.PRIMORDIAL);
  static readonly SYLVAN = new LanguageName('Sylvan', MonsterProto.Languages.Name.SYLVAN);
  static readonly THIEVES_CANT = new LanguageName("Thieve's Cant", MonsterProto.Languages.Name.THIEVES_CANT);
  static readonly DROW_SIGN = new LanguageName('Drown Sign', MonsterProto.Languages.Name.DROW_SIGN_LANGUAGE);
  static readonly UNDERCOMMON = new LanguageName('Undercommon', MonsterProto.Languages.Name.UNDERCOMMON);
  static readonly TERRAN = new LanguageName('Terran', MonsterProto.Languages.Name.TERRAN);
  static readonly TROGLODYTE = new LanguageName('Troglodyte', MonsterProto.Languages.Name.TROGLODYTE);
  static readonly GRELL = new LanguageName('Grell', MonsterProto.Languages.Name.GRELL);
  static readonly SLAAD = new LanguageName('Slaad', MonsterProto.Languages.Name.SLAAD);
  static readonly DRUIDIC = new LanguageName('Druidic', MonsterProto.Languages.Name.DRUIDIC);
  static readonly AURAN = new LanguageName('Auran', MonsterProto.Languages.Name.AURAN);
  static readonly AQUAN = new LanguageName('Aquan', MonsterProto.Languages.Name.AQUAN);
  static readonly MODRON = new LanguageName('Modron', MonsterProto.Languages.Name.MODRON);
  static readonly BULLYWUG = new LanguageName('Bullywug', MonsterProto.Languages.Name.BULLYWUG);
  static readonly OTYUGH = new LanguageName('Otyugh', MonsterProto.Languages.Name.OTYUGH);
  static readonly WORG = new LanguageName('Worg', MonsterProto.Languages.Name.WORG);
  static readonly HOOK_HORROR = new LanguageName('Hook Horror', MonsterProto.Languages.Name.HOOK_HORROR);
  static readonly SAHUAGIN = new LanguageName('Sahuagin', MonsterProto.Languages.Name.SAHUAGIN);
  static readonly IGNAN = new LanguageName('Ignan', MonsterProto.Languages.Name.IGNAN);
  static readonly GNOLL = new LanguageName('Gnoll', MonsterProto.Languages.Name.GNOLL);

  constructor(name: string, proto: number) {
    super(name, proto);
    LanguageName.names.push(this);
  }

  static fromString(text: string): LanguageName {
    return Enum.fromStringValue(text, LanguageName.names, LanguageName.UNKNOWN);
  }

  static fromProto(proto: number | undefined): LanguageName {
    return Enum.fromProtoValue(proto, LanguageName.names, LanguageName.UNKNOWN);
  }
}
