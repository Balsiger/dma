import { MonsterProto } from '../proto/generated/template_pb';

export class Senses {
  text: string;

  constructor(
    readonly blindsight: number,
    readonly darkvision: number,
    readonly tremorsense: number,
    readonly truesight: number
  ) {
    this.text = this.asString();
  }

  toString(): string {
    return this.text;
  }

  private asString(): string {
    const parts = [
      Senses.format('blindsight', this.blindsight),
      Senses.format('darkvision', this.darkvision),
      Senses.format('tremorsense', this.tremorsense),
      Senses.format('truesight', this.truesight),
    ];

    return parts.filter((f) => !!f).join(', ');
  }

  static fromProto(proto: MonsterProto.Senses | undefined): Senses {
    if (!proto) {
      return EMPTY;
    }

    return new Senses(
      proto.getBlindsightFeet(),
      proto.getDarkvisionFeet(),
      proto.getTremorsenseFeet(),
      proto.getTruesightFeet()
    );
  }

  private static format(name: string, value: number) {
    if (value) {
      return `${name} ${value} ft.`;
    }

    return '';
  }
}

export const EMPTY = new Senses(0, 0, 0, 0);
