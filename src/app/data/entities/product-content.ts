import { ProductContentProto } from '../../proto/generated/template_pb';

export class ProductContent {
  constructor(
    readonly name: string,
    readonly id: string,
    readonly abbreviation: string,
  ) {}

  static fromProto(proto?: ProductContentProto) {
    if (!proto) {
      return EMPTY;
    }

    return new ProductContent(proto.getName(), proto.getId(), proto.getAbbreviation());
  }
}

export const EMPTY = new ProductContent('', '', '');
