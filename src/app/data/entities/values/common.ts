import { CommonProto } from '../../../proto/generated/template_pb';
import { EMPTY as REFERENCES_EMPTY, References } from './references';

/** The common information of all entities. */
export class Common {
  constructor(
    readonly name: string,
    readonly plural: string,
    readonly bases: string[],
    readonly synonyms: string[],
    readonly description: string,
    readonly shortDescription: string,
    readonly images: string[],
    readonly references: References,
    readonly incompletes: string[],
    readonly found = true,
  ) {}

  static fromProto(proto: CommonProto | undefined, noPlurals = false): Common {
    return new Common(
      proto?.getName() || '<none>',
      noPlurals ? '' : proto?.getPlural() || proto?.getName() + 's',
      proto?.getBasesList() || [],
      proto?.getSynonymsList() || [],
      proto?.getDescription() || '',
      proto?.getShortDescription() || '',
      proto?.getImagesList() || [],
      References.fromProto(proto?.getReferencesList()),
      proto?.getIncompletesList() || [],
      !!proto,
    );
  }

  static create(name: string, image?: string): Common {
    return new Common(name, name + 's', [], [], '', '', image ? [image] : [], REFERENCES_EMPTY, [], false);
  }

  resolve(bases: Common[], values: Map<string, string>) {
    if (bases.length || values.has('image')) {
      return new Common(
        this.name,
        this.plural,
        bases.map((b) => b.name),
        this.synonyms,
        this.description || bases.map((b) => b.description).join('\n\n'),
        this.shortDescription || bases.map((b) => b.shortDescription).join('\n\n'),
        values.has('image')
          ? [values.get('image') || '']
          : this.images.length
            ? this.images
            : bases.flatMap((b) => b.images),
        this.references || bases.flatMap((b) => b.references),
        [...this.incompletes, ...bases.flatMap((m) => m.incompletes)],
      );
    } else {
      return this;
    }
  }
}
