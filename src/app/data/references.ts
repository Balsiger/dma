import { ReferenceProto } from '../proto/generated/value_pb';

export class Reference {
  private text: string;

  constructor(readonly name: string, readonly id: string, readonly pages: [number, number][]) {
    this.text = this.asString();
  }

  toString(): string {
    return this.text;
  }

  private asString(): string {
    return this.name + ' ' + this.pages.map((p) => p[0] + (p[0] === p[1] ? '' : '-' + p[1])).join('/');
  }

  static fromProto(reference: ReferenceProto): Reference {
    return new Reference(
      reference.getName(),
      reference.getId(),
      reference.getPagesList().map((p) => [p.getLow(), p.getHigh()])
    );
  }
}

export class References {
  text: string;

  constructor(readonly references: Reference[]) {
    this.text = this.asString();
  }

  toString(): string {
    return this.text;
  }

  private asString(): string {
    return this.references.map((r) => r.toString()).join(', ');
  }

  static fromProto(references: ReferenceProto[] | undefined): References {
    if (!references) {
      return new References([]);
    }

    return new References(references.map((r) => Reference.fromProto(r)));
  }
}
