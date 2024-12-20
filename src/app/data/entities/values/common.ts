import { CommonProto } from '../../../proto/generated/template_pb';
import { Link } from '../../values/link';
import { EntityType } from '../entity';
import { EMPTY as REFERENCES_EMPTY, Reference } from './reference';

/** The common information of all entities. */
export class Common {
  constructor(
    readonly name: string,
    readonly plural: string,
    readonly bases: string[],
    readonly synonyms: string[],
    readonly description: string,
    readonly shortDescription: string,
    readonly images: Link[] = [],
    readonly reference: Reference,
    readonly incompletes: string[],
    readonly type: EntityType,
    readonly found = true,
    readonly tags: string[] = [],
  ) {}

  static fromProto(
    proto: CommonProto | undefined,
    productName: string,
    productId: string,
    type: EntityType,
    noPlurals = false,
    specialName: string = '',
  ): Common {
    return new Common(
      specialName || proto?.getName() || '<none>',
      noPlurals ? '' : proto?.getPlural() || proto?.getName() + 's',
      proto?.getBasesList() || [],
      proto?.getSynonymsList() || [],
      proto?.getDescription() || '',
      proto?.getShortDescription() || '',
      proto?.getImagesList().map((i) => Link.fromProto(i, type)) || [],
      Reference.fromProto(productName, productId, proto?.getPagesList() || []),
      proto?.getIncompletesList() || [],
      type,
      !!proto,
      proto?.getTagsList() || [],
    );
  }

  static create(name: string, type: EntityType, image?: string): Common {
    return new Common(
      name,
      name + 's',
      [],
      [],
      '',
      '',
      image ? [new Link(name, image, type)] : [],
      REFERENCES_EMPTY,
      [],
      type,
      false,
      [],
    );
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
          ? [new Link(this.name, values.get('image') || '')]
          : this.images.length
            ? this.images
            : bases.flatMap((b) => b.images),
        this.reference || bases.find((b) => b.reference.formattedPages),
        [...this.incompletes, ...bases.flatMap((m) => m.incompletes)],
        this.type,
        this.found || !!bases.find((b) => b.found),
        this.tags,
      );
    } else {
      return this;
    }
  }
}
