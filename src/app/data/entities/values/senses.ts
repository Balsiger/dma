import { MonsterProto } from '../../../proto/generated/template_pb';
import { Resolve } from '../../resolve';

export class Senses {
  text: string;

  constructor(
    readonly blindsight: number,
    readonly darkvision: number,
    readonly tremorsense: number,
    readonly truesight: number,
  ) {
    this.text = this.asString();
  }

  toString(): string {
    return this.text;
  }

  resolve(other: Senses[]) {
    return new Senses(
      Resolve.max(
        this.blindsight,
        other.map((s) => s.blindsight),
      ),
      Resolve.max(
        this.darkvision,
        other.map((s) => s.darkvision),
      ),
      Resolve.max(
        this.tremorsense,
        other.map((s) => s.tremorsense),
      ),
      Resolve.max(
        this.truesight,
        other.map((s) => s.truesight),
      ),
    );
  }

  private asString(): string {
    const parts = [
      Senses.format('Blindsight', this.blindsight),
      Senses.format('Darkvision', this.darkvision),
      Senses.format('Tremorsense', this.tremorsense),
      Senses.format('Truesight', this.truesight),
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
      proto.getTruesightFeet(),
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
