import { CommonProto } from '../../../proto/generated/template_pb';

export interface Data {
  message?: string;
  source?: string;
}

export class Quote {
  constructor(
    readonly message: string,
    readonly source: string,
  ) {}

  static fromProto(proto?: CommonProto.Quote): Quote {
    if (!proto) {
      return EMPTY;
    }

    return new Quote(proto.getMessage() || '', proto.getSource() || '');
  }

  static fromData(data?: Data): Quote | undefined {
    if (!data) {
      return undefined;
    }

    return new Quote(data.message || '', data.source || '');
  }

  toData(): Data {
    return { message: this.message, source: this.source };
  }
}

export const EMPTY = new Quote('', '');
