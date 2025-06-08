import { SpellProto } from '../../../proto/generated/template_pb';
import { EMPTY as DURATION_EMPTY, Duration } from './duration';

/** Representation of the duration of a spell. */
export class SpellDuration {
  private readonly formatted: string;
  private readonly formattedShort: string;

  constructor(
    readonly time: Duration,
    readonly instantaneous: boolean,
    readonly concentration: boolean,
    readonly dispelled: boolean,
    readonly triggered: boolean,
  ) {
    this.formatted = this.asString();
    this.formattedShort = this.asString(true);
  }

  toString(): string {
    return this.formatted;
  }

  toShortString(): string {
    return this.formattedShort;
  }

  asString(short = false): string {
    const parts: string[] = [];

    if (this.instantaneous) {
      parts.push('Instantaneous');
    }
    if (this.concentration) {
      parts.push(short ? 'C' : 'Concentration');
    }
    if (this.dispelled) {
      if (this.time.isEmpty()) {
        parts.push('Until dispelled');
      } else {
        parts.push('Dispelled');
      }
    }
    if (this.triggered) {
      parts.push('Triggered');
    }

    if (parts.length) {
      if (this.time.isEmpty()) {
        return parts.join(' or ');
      } else {
        return parts.join(' or ') + ', up to ' + (short ? this.time.toShortString() : this.time.toString());
      }
    } else {
      return short ? this.time.toShortString() : this.time.toString();
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
