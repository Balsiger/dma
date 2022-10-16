import { CommonProto } from '../../proto/generated/template_pb';
import { EMPTY as REFERENCES_EMPTY, References } from '../references';

export class Common {
  constructor(
    readonly name: string,
    readonly bases: string[],
    readonly description: string,
    readonly shortDescription: string,
    readonly images: string[],
    readonly references: References
  ) {}

  static fromProto(proto: CommonProto | undefined): Common {
    return new Common(
      proto?.getName() || '<none>',
      proto?.getBasesList() || [],
      proto?.getDescription() || '',
      proto?.getShortDescription() || '',
      proto?.getImagesList() || [],
      References.fromProto(proto?.getReferencesList())
    );
  }

  static create(name: string): Common {
    return new Common(name, [], '', '', [], REFERENCES_EMPTY);
  }

  resolve(values: Map<string, string>) {
    if (values.has('image')) {
      return new Common(
        this.name,
        this.bases,
        this.description,
        this.shortDescription,
        [values.get('image') || ''],
        this.references
      );
    } else {
      return this;
    }
  }
}

export abstract class Entity<T extends Entity<T>> {
  get name(): string {
    return this.common.name;
  }

  get description(): string {
    return this.common.description;
  }

  get shortDescription(): string {
    return this.common.shortDescription;
  }

  get references(): References {
    return this.common.references;
  }

  get images(): string[] {
    return this.common.images;
  }

  constructor(readonly common: Common) {}

  toString() {
    return this.name;
  }

  abstract resolve(bases: T[], values: Map<string, string>): T;
}
