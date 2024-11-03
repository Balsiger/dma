import { CommonProto } from '../../../proto/generated/template_pb';
import { EMPTY as REFERENCES_EMPTY, Reference } from './reference';

/** The common information of all entities. */
export class Common {
  static EMPTY = Common.create('');

  constructor(
    readonly name: string,
    readonly plural: string,
    readonly bases: string[],
    readonly synonyms: string[],
    readonly description: string,
    readonly shortDescription: string,
    readonly images: string[],
    readonly reference: Reference,
    readonly incompletes: string[],
    readonly found = true,
    readonly tags: string[] = [],
  ) {}

  static fromProto(proto: CommonProto | undefined, productName: string, productId: string, noPlurals = false): Common {
    return new Common(
      proto?.getName() || '<none>',
      noPlurals ? '' : proto?.getPlural() || proto?.getName() + 's',
      proto?.getBasesList() || [],
      proto?.getSynonymsList() || [],
      proto?.getDescription() || '',
      proto?.getShortDescription() || '',
      proto?.getImagesList() || [],
      Reference.fromProto(productName, productId, proto?.getPagesList() || []),
      proto?.getIncompletesList() || [],
      !!proto,
      proto?.getTagsList() || [],
    );
  }

  static create(name: string, image?: string): Common {
    return new Common(name, name + 's', [], [], '', '', image ? [image] : [], REFERENCES_EMPTY, [], false, []);
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
        this.reference || bases.find((b) => b.reference.formattedPages),
        [...this.incompletes, ...bases.flatMap((m) => m.incompletes)],
        this.found || !!bases.find((b) => b.found),
        this.tags,
      );
    } else {
      return this;
    }
  }
}
