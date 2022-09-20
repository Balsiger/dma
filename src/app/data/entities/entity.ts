import { CommonProto } from '../../proto/generated/template_pb';
import { EMPTY as REFERENCES_EMPTY, References } from '../references';

export class Common {
  constructor(
    readonly name: string,
    readonly bases: string[],
    readonly description: string,
    readonly shortDescription: string,
    readonly image: string,
    readonly references: References
  ) {}

  static fromProto(proto: CommonProto | undefined): Common {
    return new Common(
      proto?.getName() || '<none>',
      proto?.getBasesList() || [],
      proto?.getDescription() || '',
      proto?.getShortDescription() || '',
      proto?.getImage() || '',
      References.fromProto(proto?.getReferencesList())
    );
  }

  static create(name: string): Common {
    return new Common(name, [], '', '', '', REFERENCES_EMPTY);
  }
}

export abstract class Entity<T extends Entity<T>> {
  get name() {
    return this.common.name;
  }

  get description() {
    return this.common.description;
  }

  get shortDescription() {
    return this.common.shortDescription;
  }

  get references() {
    return this.common.references;
  }

  constructor(readonly common: Common) {}
}
