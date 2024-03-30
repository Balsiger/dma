import { ProductProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Part extends Enum<Part> {
  static readonly parts: Part[] = [];

  static readonly UNKNOWN = new Part('Unknown', '?', ProductProto.Content.Part.UNKNOWN_PART);
  static readonly BOARD = new Part('Board', 'BRD', ProductProto.Content.Part.BOARD);
  static readonly BOOK = new Part('Book', 'BK', ProductProto.Content.Part.BOOK);
  static readonly BOOKLET = new Part('Booklet', 'BLT', ProductProto.Content.Part.BOOKLET);
  static readonly BOX = new Part('Box', 'BOX', ProductProto.Content.Part.BOX);
  static readonly CARD = new Part('Card', 'CRD', ProductProto.Content.Part.CARD);
  static readonly CD = new Part('CD', 'CD', ProductProto.Content.Part.CD);
  static readonly COUNTER = new Part('Counter', 'CNT', ProductProto.Content.Part.COUNTER);
  static readonly COVER = new Part('Cover', 'COV', ProductProto.Content.Part.COVER);
  static readonly DICE = new Part('DICE', 'DIC', ProductProto.Content.Part.DICE);
  static readonly FLYER = new Part('Flyer', 'FLY', ProductProto.Content.Part.FLYER);
  static readonly FOLDER = new Part('Folder', 'FLD', ProductProto.Content.Part.FOLDER);
  static readonly GATEFOLD = new Part('Gatefold', 'GFL', ProductProto.Content.Part.GATEFOLD);
  static readonly MAGNET = new Part('Magnet', 'MAG', ProductProto.Content.Part.MAGNET);
  static readonly MAP = new Part('Map', 'MAP', ProductProto.Content.Part.MAP);
  static readonly MINIATURE = new Part('Miniature', 'MIN', ProductProto.Content.Part.MINIATURE);
  static readonly MISC = new Part('Misc', 'MSC', ProductProto.Content.Part.MISC);
  static readonly OVERLAY = new Part('Overlay', 'OVL', ProductProto.Content.Part.OVERLAY);
  static readonly PACK = new Part('Pack', 'PCK', ProductProto.Content.Part.PACK);
  static readonly PAGE = new Part('Page', 'PGE', ProductProto.Content.Part.PAGE);
  static readonly PLAYING_PIECE = new Part('Playing Piece', 'PP', ProductProto.Content.Part.PLAYING_PIECE);
  static readonly POSTER = new Part('Poster', 'POS', ProductProto.Content.Part.POSTER);
  static readonly SCREEN = new Part('Screen', 'SCR', ProductProto.Content.Part.SCREEN);
  static readonly SHEET = new Part('Sheet', 'SHT', ProductProto.Content.Part.SHEET);
  static readonly STICKER = new Part('Sticker', 'STK', ProductProto.Content.Part.STICKER);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    Part.parts.push(this);
  }

  static fromString(text: string): Part {
    return Enum.fromStringValue(text, Part.parts, Part.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Part {
    return Enum.fromProtoValue(proto, Part.parts, Part.UNKNOWN);
  }
}
