import { ProductProto } from '../../../proto/generated/template_pb';
import { Enum } from './enum';

export class GameType extends Enum<GameType> {
  static readonly types: GameType[] = [];

  static readonly UNKNOWN = new GameType('Unknown', '?', ProductProto.Type.UNKNOWN_TYPE);
  static readonly ACCESSORY = new GameType('Accessory', 'ACC', ProductProto.Type.ACCESSORY);
  static readonly ADVENTURE = new GameType('Adenture', 'ADV', ProductProto.Type.ADVENTURE);
  static readonly BOARD_GAME = new GameType('Board Game', 'BRD', ProductProto.Type.BOARD_GAME);
  static readonly BOOSTER_PACK = new GameType('Booster Pack', 'BST', ProductProto.Type.BOOSTER_PACK);
  static readonly CALENDAR = new GameType('Calendar', 'CAL', ProductProto.Type.CALENDAR);
  static readonly CAMPAIGN_EXPANSION = new GameType('Campaign Expansion', 'CE', ProductProto.Type.CAMPAIGN_EXPANSION);
  static readonly CARD_GAME = new GameType('Card Game', 'CRD', ProductProto.Type.CARD_GAME);
  static readonly CARDS = new GameType('Cards', 'CRDs', ProductProto.Type.CARDS_TYPE);
  static readonly CATALOG = new GameType('Catalog', 'CTG', ProductProto.Type.CATALOG);
  static readonly COLLECTION = new GameType('Collection', 'COL', ProductProto.Type.COLLECTION);
  static readonly COMICS = new GameType('Comics', 'CMS', ProductProto.Type.COMICS);
  static readonly COOKBOOK = new GameType('Cookbook', 'CBK', ProductProto.Type.COOKBOOK);
  static readonly DICE = new GameType('Dice', 'D', ProductProto.Type.DICE);
  static readonly ELECTRONIC_ACCESSORY = new GameType(
    'Electronic Accessory',
    'EACC',
    ProductProto.Type.ELECTRONIC_ACCESSORY,
  );
  static readonly GUIDE = new GameType('GUIDE', 'GD', ProductProto.Type.GUIDE);
  static readonly MAGAZINE = new GameType('Magazine', 'MAG', ProductProto.Type.MAGAZINE);
  static readonly MINIATURE = new GameType('Miniature', 'MINI', ProductProto.Type.MINIATURE);
  static readonly MONSTER_COMPENDIUM = new GameType('Monster Compendium', 'MC', ProductProto.Type.MONSTER_COMPENDIUM);
  static readonly NOVEL = new GameType('Novel', 'NVL', ProductProto.Type.NOVEL);
  static readonly PROMOTION = new GameType('Promotion', 'PROMO', ProductProto.Type.PROMOTION);
  static readonly RULEBOOK = new GameType('Rulebook', 'RBK', ProductProto.Type.RULEBOOK);
  static readonly RULES_SUPPLEMENT = new GameType('Rules Supplement', 'RSUP', ProductProto.Type.RULES_SUPPLEMENT);
  static readonly SOFTWARE = new GameType('Software', 'SW', ProductProto.Type.SOFTWARE);
  static readonly SOURCEBOOK = new GameType('Source Book', 'SBK', ProductProto.Type.SOURCEBOOK);
  static readonly SPECIAL_BOOK = new GameType('Special Book', 'SPBK', ProductProto.Type.SPECIAL_BOOK);
  static readonly SUPPLEMENT = new GameType('Supplement', 'SUP', ProductProto.Type.SUPPLEMENT);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    GameType.types.push(this);
  }

  static fromString(text: string): GameType {
    return Enum.fromStringValue(text, GameType.types, GameType.UNKNOWN);
  }

  static fromProto(proto: number | undefined): GameType {
    return Enum.fromProtoValue(proto, GameType.types, GameType.UNKNOWN);
  }
}
