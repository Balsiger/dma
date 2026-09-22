import { TokensProto } from '../../../proto/generated/template_pb';
import { ProductContent } from './product-content';
import { Static, StaticType } from './static';
import { Common } from './values/common';

export interface Attribution {
  name: string;
  url: string;
}

export class Token extends Static<Token> {
  static EMPTY = new Token(Common.create('', StaticType.token), '', 1, 1, { name: '', url: '' }, 0, 0);

  tags: string[];
  image: string;

  constructor(
    common: Common,
    product: string,
    readonly widthSquares: number,
    readonly heightSquares: number,
    readonly attribution: Attribution,
    readonly originX: number,
    readonly originY: number,
  ) {
    super(common, product);

    this.tags = common.tags;
    this.image = common.images[0]?.url || '';
  }

  override resolve(bases: Token[], values: Map<string, string>): Token {
    return this;
  }

  static create(name: string, bases: string[] = []): Token {
    return new Token(
      Common.create(name, StaticType.token),
      '',
      1,
      1,
      {
        name: '',
        url: '',
      },
      0,
      0,
    );
  }

  static fromProto(proto: TokensProto.Token, productContent: ProductContent): Token {
    return new Token(
      Common.fromProto(proto.getCommon(), productContent, StaticType.token, true),
      productContent.name,
      proto.getWidthSquares(),
      proto.getHeightSquares(),
      {
        name: proto.getAttribution()?.getName() || '',
        url: proto.getAttribution()?.getUrl() || '',
      },
      proto.getOriginX(),
      proto.getOriginY(),
    );
  }
}
