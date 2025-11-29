import { TrapProto } from '../../proto/generated/template_pb';
import { Resolve } from '../resolve';
import { Entities } from './entities';
import { Entity, EntityType } from './entity';
import { ProductContent } from './product-content';
import { Common } from './values/common';
import { Duration, EMPTY as EMPTY_DURATION } from './values/duration';
import { SeverityType } from './values/enums/severity-type';
import { TrapType } from './values/enums/trap-type';
import { Severity } from './values/severity';

/** A representation of an item concept. */
export class Trap extends Entity<Trap> {
  constructor(
    common: Common,
    product: string,
    readonly type: TrapType,
    readonly severities: Severity[],
    readonly trigger: string,
    readonly duration: Duration,
  ) {
    super(common, product);
  }

  getDeadly(): Severity | undefined {
    for (const severity of this.severities) {
      if (severity.type == SeverityType.DEADLY) {
        return severity;
      }
    }

    return undefined;
  }

  getNuisance(): Severity | undefined {
    for (const severity of this.severities) {
      if (severity.type == SeverityType.NUISANCE) {
        return severity;
      }
    }

    return undefined;
  }

  static fromProto(proto: TrapProto, productContent: ProductContent): Trap {
    return new Trap(
      Common.fromProto(proto.getCommon(), productContent, EntityType.trapHazard),
      productContent.name,
      TrapType.fromProto(proto.getType()),
      proto.getSeveritiesList().map((s) => Severity.fromProto(s)),
      proto.getTrigger(),
      Duration.fromProto(proto.getDuration()),
    );
  }

  static async fromString(traps: Entities<Trap>, name: string): Promise<Trap> {
    return traps.get(name);
  }

  static create(name: string, bases: string[] = []): Trap {
    return new Trap(Common.create(name, EntityType.trapHazard), '', TrapType.UNKNOWN, [], '', EMPTY_DURATION);
  }

  resolve(bases: Trap[], values: Map<string, string>): Trap {
    return new Trap(
      this.common.resolve(
        bases.map((b) => b.common),
        values,
      ),
      this.product,
      Resolve.firstDefined(
        this.type,
        bases.map((b) => b.type),
      ),
      Resolve.dedupe(
        this.severities,
        bases.map((b) => b.severities),
      ),
      Resolve.firstDefined(
        this.trigger,
        bases.map((b) => b.trigger),
      ),
      Resolve.firstDefined(
        this.duration,
        bases.map((b) => b.duration),
      ),
    );
  }

  override matches(selections: Map<string, any>): boolean {
    if (!super.matches(selections)) {
      return false;
    }

    return true;
  }
}
