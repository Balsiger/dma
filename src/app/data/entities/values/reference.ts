import { RangeProto } from '../../../proto/generated/value_pb';

export class Reference {
  readonly formattedPages: string;
  readonly text: string;

  constructor(
    readonly name: string,
    readonly id: string,
    readonly pages: [number, number][],
  ) {
    this.formattedPages = this.pages.map((p) => p[0] + (p[0] === p[1] ? '' : '-' + p[1])).join('/');
    this.text = this.asString();
  }

  toString(): string {
    return this.text;
  }

  private asString(): string {
    return this.name + ' ' + this.formattedPages;
  }

  static fromProto(name: string, id: string, pages: RangeProto[]): Reference {
    return new Reference(
      name,
      id,
      pages.map((p) => [p.getLow(), p.getHigh()]),
    );
  }
}

export const EMPTY = new Reference('', '', []);
