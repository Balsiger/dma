import { ProductProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class GameSystem extends Enum<GameSystem> {
  static readonly systems: GameSystem[] = [];

  static readonly UNKNOWN = new GameSystem('Unknown', '?', ProductProto.System.UNKNOWN_SYSTEM);
  static readonly NONE = new GameSystem('None', '-', ProductProto.System.NONE);
  static readonly CHAINMAIL = new GameSystem('Chainmail', 'CHM', ProductProto.System.CHAINMAIL);
  static readonly DND_1ST = new GameSystem('D&D 1st', 'D&D 1', ProductProto.System.DND_1ST);
  static readonly ADND_1ST = new GameSystem('AD&D 1st', 'AD&D 1', ProductProto.System.ADND_1ST);
  static readonly ADND_2ND = new GameSystem('AD&D 2nd', 'AD&D 2', ProductProto.System.ADND_2ND);
  static readonly ADND_2ND_SAGA = new GameSystem('AD&D 2nd Saga', 'AD&D 2 Saga', ProductProto.System.ADND_2ND_SAGA);
  static readonly ADND_REVISED = new GameSystem('AD&D revised', 'AD&D revised', ProductProto.System.ADND_REVISED);
  static readonly DND_3RD = new GameSystem('D&D 3rd', 'D&D 3', ProductProto.System.DND_3RD);
  static readonly DND_3_5 = new GameSystem('D&D 3.5', 'D&D 3.5', ProductProto.System.DND_3_5);
  static readonly DND_4 = new GameSystem('D&D 4', 'D&D 4', ProductProto.System.DND_4);
  static readonly DND_NEXT = new GameSystem('D&D next', 'D&D next', ProductProto.System.DND_NEXT);
  static readonly DND_5E = new GameSystem('D&D 5e', 'D&D 5e', ProductProto.System.DND_5E);
  static readonly D20_MODERN = new GameSystem('d20 modern', 'd20m', ProductProto.System.D20_MODERN);
  static readonly D20_FUTURE = new GameSystem('d20 future', 'd20f', ProductProto.System.D20_FUTUTRE);
  static readonly D20 = new GameSystem('d20', 'd20', ProductProto.System.D20);
  static readonly ALTERNITY = new GameSystem('Alternity', 'ALT', ProductProto.System.ALTERNITY);
  static readonly AMAZING_ENGINE = new GameSystem('Amazing Engine', 'AE', ProductProto.System.AMAZING_ENGINE);
  static readonly BLOOD_WARS = new GameSystem('Blood Wars', 'BW', ProductProto.System.BLOOD_WARS);
  static readonly CHAOSIUM = new GameSystem('Chaosium', 'CHA', ProductProto.System.CHAOSIUM);
  static readonly DARK_HEAVEN = new GameSystem('Dark Heaven', 'DH', ProductProto.System.DARK_HEAVEN);
  static readonly DRAGON_DICE = new GameSystem('Dragon Dice', 'DD', ProductProto.System.DRAGON_DICE);
  static readonly DRAGON_STRIKE = new GameSystem('Dragon Strice', 'DS', ProductProto.System.DRAGON_STRIKE);
  static readonly DUEL_MASTER = new GameSystem('Duel Mater', 'DM', ProductProto.System.DUEL_MASTER);
  static readonly ENDLESS_QUEST = new GameSystem('Endless Quest', 'EQ', ProductProto.System.ENDLESS_QUEST);
  static readonly FIRST_QUEST = new GameSystem('First Quewt', 'FQ', ProductProto.System.FIRST_QUEST);
  static readonly GAMMA_WORLD = new GameSystem('Gamma World', 'GW', ProductProto.System.GAMMA_WORLD);
  static readonly GANGBUSTERS = new GameSystem('Gangbusters', 'GB', ProductProto.System.GANGBUSTERS);
  static readonly LEGEND_OF_THE_FIVE_RINGS = new GameSystem(
    'Legend of the Five Rings',
    'LoFR',
    ProductProto.System.LEGEND_OF_THE_FIVE_RINGS,
  );
  static readonly MAGIC_THE_GATHERING = new GameSystem(
    'Magic the Gathering',
    'MtG',
    ProductProto.System.MAGIC_THE_GATHERING,
  );
  static readonly MARVEL_SUPER_DICE = new GameSystem('Marvel Super Dice', 'MSD', ProductProto.System.MARVEL_SUPER_DICE);
  static readonly MLB_SHOWDOWN_2002 = new GameSystem(
    'MLB Showdown 2002',
    'MLB2002',
    ProductProto.System.MLB_SHOWDOWN_2002,
  );
  static readonly MLB_SHOWDOWN_2003 = new GameSystem(
    'MLB Showdown 2003',
    'MLB2003',
    ProductProto.System.MLB_SHOWDOWN_2003,
  );
  static readonly MLB_SHOWDOWN = new GameSystem('MLB Showdown', 'MLB', ProductProto.System.MLB_SHOWDOWN);
  static readonly NEOPETS = new GameSystem('Neopets', 'NEO', ProductProto.System.NEOPETS);
  static readonly ONE_ON_ONE = new GameSystem('One on One', 'OoO', ProductProto.System.ONE_ON_ONE);
  static readonly POKEMON = new GameSystem('Pokemon', 'POK', ProductProto.System.POKEMON);
  static readonly SAGA = new GameSystem('Saga', 'SGA', ProductProto.System.SAGA);
  static readonly SPECIAL = new GameSystem('Special', 'SPE', ProductProto.System.SPECIAL);
  static readonly SPELLFIRE = new GameSystem('Spellfire', 'SF', ProductProto.System.SPELLFIRE);
  static readonly STAR_WARS_TCG = new GameSystem('Star Wars TCG', 'SWTCG', ProductProto.System.STAR_WARS_TCG);
  static readonly STAR_WARS = new GameSystem('Star Wars', 'SW', ProductProto.System.STAR_WARS);
  static readonly SUPER_ENDLESS_QUEST = new GameSystem(
    'Super Endless Quest',
    'SEQ',
    ProductProto.System.SUPER_ENDLESS_QUEST,
  );
  static readonly SWORD_AND_SORCERY = new GameSystem('Sword and Sorcery', 'S&S', ProductProto.System.SWORD_AND_SORCERY);
  static readonly TERROR_TRACKS = new GameSystem('Terror Tracks', 'TT', ProductProto.System.TERROR_TRACKS);
  static readonly TERROR_TRAX = new GameSystem('Terror Trax', 'TTX', ProductProto.System.TERROR_TRAX);
  static readonly WILD_SPACE = new GameSystem('Wild Space', 'WS', ProductProto.System.WILD_SPACE);
  static readonly WORLD_WAR_II = new GameSystem('World War II', 'WWII', ProductProto.System.WORLD_WAR_II);
  static readonly XXVC = new GameSystem('XXVC', 'XXVC', ProductProto.System.XXVC);
  static readonly MARVEL_SUPER_HEROES = new GameSystem(
    'Marvel Super Heroes',
    'MSH',
    ProductProto.System.MARVEL_SUPER_HEROES,
  );

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    GameSystem.systems.push(this);
  }

  static fromString(text: string): GameSystem {
    return Enum.fromStringValue(text, GameSystem.systems, GameSystem.UNKNOWN);
  }

  static fromProto(proto: number | undefined): GameSystem {
    return Enum.fromProtoValue(proto, GameSystem.systems, GameSystem.UNKNOWN);
  }
}
