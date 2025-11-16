import { WearableTemplateProto } from '../../../proto/generated/template_pb';
import { Resolve } from '../../resolve';
import { Duration, EMPTY as DURATION_EMPTY } from './duration';
import { Slot } from './enums/slot';

export class Wearable {
  constructor(
    readonly slot: Slot,
    readonly don: Duration,
    readonly doff: Duration,
  ) {}

  resolve(bases: Wearable[]): Wearable {
    if (!bases.length) {
      return this;
    }

    return new Wearable(
      Resolve.firstDefined(
        this.slot,
        bases.map((a) => a.slot),
        (v) => v !== Slot.UNKNOWN,
      ),
      Resolve.firstDefined(
        this.don,
        bases.map((a) => a.don),
        (d) => d.isEmpty(),
      ),
      Resolve.firstDefined(
        this.doff,
        bases.map((a) => a.doff),
        (d) => d.isEmpty(),
      ),
    );
  }

  static fromProto(proto: WearableTemplateProto | undefined): Wearable | undefined {
    if (!proto || proto.getSlot() === 0) {
      return undefined;
    }

    return new Wearable(
      Slot.fromProto(proto.getSlot()),
      Duration.fromProto(proto.getDon()),
      Duration.fromProto(proto.getDoff()),
    );
  }
}

export const EMPTY = new Wearable(Slot.UNKNOWN, DURATION_EMPTY, DURATION_EMPTY);
