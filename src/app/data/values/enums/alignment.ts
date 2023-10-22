import { AlignmentProto } from '../../../proto/generated/value_pb';
import { Enum } from './enum';

export class Alignment extends Enum<Alignment> {
  static readonly alignments: Alignment[] = [];

  static readonly UNKNOWN = new Alignment('Unknown', '?', AlignmentProto.UNKNOWN_ALIGNMENT);
  static readonly LAWFUL_GOOD = new Alignment('Lawful Good', 'LG', AlignmentProto.LAWFUL_GOOD);
  static readonly NEUTRAL_GOOD = new Alignment('Neutral Good', 'NG', AlignmentProto.NEUTRAL_GOOD);
  static readonly CHAOTIC_GOOD = new Alignment('Chaotic Good', 'CG', AlignmentProto.CHAOTIC_GOOD);
  static readonly LAWFUL_NEUTRAL = new Alignment('Lawful Neutral', 'LN', AlignmentProto.LAWFUL_NEUTRAL);
  static readonly TRUE_NEUTRAL = new Alignment('Neutral', 'N', AlignmentProto.TRUE_NEUTRAL);
  static readonly CHAOTIC_NEUTRAL = new Alignment('Chaotic Neutral', 'CN', AlignmentProto.CHAOTIC_NEUTRAL);
  static readonly LAWFUL_EVIL = new Alignment('Lawful Evil', 'LE', AlignmentProto.LAWFUL_EVIL);
  static readonly NEUTRAL_EVIL = new Alignment('Neutral Evil', 'NE', AlignmentProto.NEUTRAL_EVIL);
  static readonly CHAOTIC_EVIL = new Alignment('Chaotic Evil', 'CE', AlignmentProto.CHAOTIC_EVIL);
  static readonly ANY_CHAOTIC = new Alignment('Any Chaotic', 'C', AlignmentProto.ANY_CHAOTIC);
  static readonly ANY_EVIL = new Alignment('Any Evil', 'E', AlignmentProto.ANY_EVIL);
  static readonly ANY_GOOD = new Alignment('Any Good', 'G', AlignmentProto.ANY_GOOD);
  static readonly ANY_LAWFUL = new Alignment('Any Lawful', 'L', AlignmentProto.ANY_LAWFUL);
  static readonly ANY = new Alignment('Any', 'A', AlignmentProto.ANY_ALIGNMENT);
  static readonly UNALIGNED = new Alignment('Unaligned', 'U', AlignmentProto.UNALIGNED);
  static readonly ANY_NON_LAWFUL = new Alignment('Any non-lawful', 'ANL', AlignmentProto.UNALIGNED);

  constructor(name: string, public readonly short: string, proto: number) {
    super(name, proto);
    Alignment.alignments.push(this);
  }

  resolve(other: Alignment[]): Alignment {
    if (this !== Alignment.UNKNOWN) {
      return this;
    }

    for (const alignment of other) {
      if (alignment !== Alignment.UNKNOWN) {
        return alignment;
      }
    }

    return this;
  }

  static fromString(text: string): Alignment {
    return Enum.fromStringValue(text, Alignment.alignments, Alignment.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Alignment {
    return Enum.fromProtoValue(proto, Alignment.alignments, Alignment.UNKNOWN);
  }
}
