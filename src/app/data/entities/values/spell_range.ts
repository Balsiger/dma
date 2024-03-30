import { SpellProto } from '../../../proto/generated/template_pb';
import { EMPTY as DISTANCE_EMPTY, Distance } from './distance';
import { Shape } from './enums/shape';

/** Representation of the range of a spell. */
export class SpellRange {
  private readonly text: string;

  constructor(
    readonly distance: Distance,
    readonly self: boolean,
    readonly touch: boolean,
    readonly unlimited: boolean,
    readonly shape: Shape,
  ) {
    this.text = this.asString();
  }

  toString(): string {
    return this.text;
  }

  private asString(): string {
    const parts: string[] = [];
    parts.push(this.distance.toString());
    if (this.self) {
      parts.push('Self');
    }
    if (this.touch) {
      parts.push('Touch');
    }
    if (this.unlimited) {
      parts.push('Unlimited');
    }
    if (this.shape !== Shape.UNKNOWN) {
      parts.push(this.shape.toString());
    }

    return parts.filter((d) => !!d).join(' ');
  }

  static fromProto(proto: SpellProto.Range | undefined): SpellRange {
    if (!proto) {
      return EMPTY;
    }

    return new SpellRange(
      Distance.fromProto(proto.getDistance()),
      proto.getSelf(),
      proto.getTouch(),
      proto.getUnlimited(),
      Shape.fromProto(proto.getShape()),
    );
  }
}

export const EMPTY = new SpellRange(DISTANCE_EMPTY, false, false, false, Shape.UNKNOWN);
