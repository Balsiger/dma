import { SpellProto } from '../../../proto/generated/template_pb';
import { EMPTY as DURATION_EMPTY, Duration } from './duration';

/** Representation of the duration of a spell. */
export class SpellDuration {
  private readonly formatted: string;

  constructor(
    readonly time: Duration,
    readonly instantaneous: boolean,
    readonly concentration: boolean,
    readonly dispelled: boolean,
    readonly triggered: boolean,
  ) {
    this.formatted = this.asString();
  }

  toString(): string {
    return this.formatted;
  }

  asString(): string {
    const parts: string[] = [];

    if (this.instantaneous) {
      parts.push('Instantaneous');
    }
    if (this.concentration) {
      parts.push('Concentration');
    }
    if (this.dispelled) {
      parts.push('Dispelled');
    }
    if (this.triggered) {
      parts.push('Triggered');
    }

    if (parts.length) {
      return parts.join(' or ') + ', up to ' + this.time.toString();
    } else {
      return this.time.toString();
    }
  }

  static fromProto(proto: SpellProto.Duration | undefined): SpellDuration {
    if (!proto) {
      return EMPTY;
    }

    return new SpellDuration(
      Duration.fromProto(proto.getTime()),
      proto.getInstantaneous(),
      proto.getConcentration(),
      proto.getDispelled(),
      proto.getTriggered(),
    );
  }
}

export const EMPTY: SpellDuration = new SpellDuration(DURATION_EMPTY, false, false, false, false);
