import { ProductProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';

export class GameStyle extends Enum<GameStyle> {
  static readonly styles: GameStyle[] = [];

  static readonly UNKNOWN = new GameStyle('Unknown', '?', ProductProto.Style.UNKNOWN_STYLE);
  static readonly BOOKLET = new GameStyle('Booklet', 'BKLT', ProductProto.Style.BOOKLET);
  static readonly BOX = new GameStyle('Box', 'BX', ProductProto.Style.BOX);
  static readonly CARDS = new GameStyle('Cards', 'CRDs', ProductProto.Style.CARDS_STYLE);
  static readonly FLYER = new GameStyle('Flyer', 'FLY', ProductProto.Style.FLYER);
  static readonly FOLDER = new GameStyle('Folder', 'FLD', ProductProto.Style.FOLDER);
  static readonly HARDCOVER = new GameStyle('Hardcover', 'HC', ProductProto.Style.HARDCOVER);
  static readonly MAP = new GameStyle('Map', 'MAP', ProductProto.Style.MAP);
  static readonly MEDIUM_BOX = new GameStyle('Medium Box', 'MBX', ProductProto.Style.MEDIUM_BOX);
  static readonly PACK = new GameStyle('Pack', 'PCK', ProductProto.Style.PACK);
  static readonly PAPERBACK = new GameStyle('Paperback', 'PB', ProductProto.Style.PAPERBACK);
  static readonly POSTER = new GameStyle('Poster', 'POS', ProductProto.Style.POSTER);
  static readonly SCREEN = new GameStyle('Screen', 'SCN', ProductProto.Style.SCREEN);
  static readonly SHEETS = new GameStyle('Sheets', 'SHT', ProductProto.Style.SHEETS);
  static readonly SMALL_BOX = new GameStyle('Small Box', 'SBX', ProductProto.Style.SMALL_BOX);
  static readonly SOFT_COVER = new GameStyle('Soft Cover', 'SC', ProductProto.Style.SOFT_COVER);
  static readonly STICKER = new GameStyle('Sticker', 'STK', ProductProto.Style.STICKER);

  constructor(
    name: string,
    public readonly short: string,
    proto: number,
  ) {
    super(name, proto);
    GameStyle.styles.push(this);
  }

  static fromString(text: string): GameStyle {
    return Enum.fromStringValue(text, GameStyle.styles, GameStyle.UNKNOWN);
  }

  static fromProto(proto: number | undefined): GameStyle {
    return Enum.fromProtoValue(proto, GameStyle.styles, GameStyle.UNKNOWN);
  }
}
