import { TrapProto } from '../../../proto/generated/template_pb';
import { SeverityType } from './enums/severity-type';

export class Severity {
  readonly text: string;

  constructor(
    readonly type: SeverityType,
    readonly levelLow: number,
    readonly levelHigh: number,
  ) {
    this.text = this.asString();
  }

  toString(): string {
    return this.text;
  }

  static fromProto(proto: TrapProto.Severity | undefined): Severity {
    if (!proto) {
      return EMPTY;
    }

    return new Severity(SeverityType.fromProto(proto.getType()), proto.getLevelLow(), proto.getLevelHigh());
  }

  private asString(): string {
    return `${this.type} (Levels ${this.levelLow} - ${this.levelHigh})`;
  }
}

export const EMPTY = new Severity(SeverityType.UNKNOWN, 0, 0);
