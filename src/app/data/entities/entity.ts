import { CommonProto } from '../../proto/generated/template_pb';
import { EMPTY as REFERENCES_EMPTY, References } from '../values/references';

export class Common {
  constructor(
    readonly name: string,
    readonly bases: string[],
    readonly synonyms: string[],
    readonly description: string,
    readonly shortDescription: string,
    readonly images: string[],
    readonly references: References,
    readonly incompletes: string[]
  ) {}

  static fromProto(proto: CommonProto | undefined): Common {
    return new Common(
      proto?.getName() || '<none>',
      proto?.getBasesList() || [],
      proto?.getSynonymsList() || [],
      proto?.getDescription() || '',
      proto?.getShortDescription() || '',
      proto?.getImagesList() || [],
      References.fromProto(proto?.getReferencesList()),
      proto?.getIncompletesList() || []
    );
  }

  static create(name: string): Common {
    return new Common(name, [], [], '', '', [], REFERENCES_EMPTY, []);
  }

  resolve(bases: Common[], values: Map<string, string>) {
    if (bases.length || values.has('image')) {
      return new Common(
        this.name,
        bases.map((b) => b.name),
        this.synonyms,
        this.description,
        this.shortDescription,
        values.has('image') ? [values.get('image') || ''] : this.images,
        this.references,
        [...this.incompletes, ...bases.flatMap((m) => m.incompletes)]
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

  protected static splitValues(text: string): Map<string, string> {
    const result = new Map<string, string>();
    if (!text) {
      return result;
    }

    const lines = text.split(/\s*,\s*/);
    for (const line of lines) {
      const parts = line.split(/\s*=\s*/);
      if (parts.length == 2) {
        result.set(parts[0], parts[1]);
      } else {
        console.log('Invalid key value: ', line);
      }
    }

    return result;
  }

  protected static maybeOverride<T>(
    values: Map<string, string>,
    name: string,
    converter: (text: string) => T,
    other: T
  ): T {
    if (values.has(name)) {
      return converter(values.get(name) || '');
    } else {
      return other;
    }
  }
}
