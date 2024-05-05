import { TokensProto } from '../../proto/generated/template_pb';
import { Entity } from './entity';
import { Common } from './values/common';
import { EMPTY as REFERENCES_EMPTY } from './values/references';

export interface Attribution {
  name: string;
  url: string;
}

export class Token extends Entity<Token> {
  static EMPTY = new Token(Common.EMPTY, 1, 1, { name: '', url: '' });

  tags: string[];

  constructor(
    common: Common,
    readonly widthSquares: number,
    readonly heightSquares: number,
    readonly attribution: Attribution,
  ) {
    super(common);

    this.tags = common.tags;
  }

  override resolve(bases: Token[], values: Map<string, string>): Token {
    return this;
  }

  static create(name: string, bases: string[] = []): Token {
    return new Token(new Common(name, '', bases, [], '', '', [], REFERENCES_EMPTY, []), 1, 1, {
      name: '',
      url: '',
    });
  }

  static fromProto(proto: TokensProto.Token): Token {
    return new Token(Common.fromProto(proto.getCommon(), true), proto.getWidthSquares(), proto.getHeightSquares(), {
      name: proto.getAttribution()?.getName() || '',
      url: proto.getAttribution()?.getUrl() || '',
    });
  }
}
