import { ConditionProto } from '../../proto/generated/template_pb';
import { Entity } from '../entities/entity';
import { Common } from '../entities/values/common';
import { EMPTY as REFERENCES_EMPTY } from '../entities/values/references';

export class Condition extends Entity<Condition> {
  constructor(common: Common) {
    super(common);
  }

  static create(name: string, bases: string[] = []): Condition {
    return new Condition(new Common(name, name + 's', bases, [], '', '', [], REFERENCES_EMPTY, [], false));
  }

  static fromProto(proto: ConditionProto) {
    return new Condition(Common.fromProto(proto.getCommon()));
  }

  override resolve(bases: Condition[], values: Map<string, string>): Condition {
    if (bases.length === 0) {
      return this;
    }

    return new Condition(
      this.common.resolve(
        bases.map((b) => b.common),
        values,
      ),
    );
  }
}
