import { TokensProto } from '../../proto/generated/template_pb';
import { Entity, EntityType } from './entity';
import { Common } from './values/common';
import { Version } from './values/enums/version';
import { EMPTY as REFERENCES_EMPTY } from './values/reference';

export interface Attribution {
  name: string;
  url: string;
}

export class Token extends Entity<Token> {
  static EMPTY = new Token(Common.create('', EntityType.token), '', 1, 1, { name: '', url: '' });

  tags: string[];
  image: string;

  constructor(
    common: Common,
    product: string,
    readonly widthSquares: number,
    readonly heightSquares: number,
    readonly attribution: Attribution,
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
      new Common(name, '', bases, [], '', '', [], REFERENCES_EMPTY, [], EntityType.token, Version.DND_5_24),
      '',
      1,
      1,
      {
        name: '',
        url: '',
      },
    );
  }

  static fromProto(proto: TokensProto.Token, productName: string, productId: string): Token {
    return new Token(
      Common.fromProto(proto.getCommon(), productName, productId, EntityType.token, true),
      productName,
      proto.getWidthSquares(),
      proto.getHeightSquares(),
      {
        name: proto.getAttribution()?.getName() || '',
        url: proto.getAttribution()?.getUrl() || '',
      },
    );
  }
}
