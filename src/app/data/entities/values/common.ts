import { CommonProto } from '../../../proto/generated/template_pb';
import { Resolve } from '../../resolve';
import { Link } from '../../values/link';
import { EntityType } from '../entity';
import { Version } from './enums/version';
import { EMPTY as QUOTE_EMPTY, Quote } from './quote';
import { EMPTY as REFERENCES_EMPTY, Reference } from './reference';

/** The common information of all entities. */
export class Common {
  readonly normalizedName: string;

  constructor(
    readonly name: string,
    readonly plural: string,
    readonly bases: string[],
    readonly synonyms: string[],
    readonly description: string,
    readonly quote: Quote,
    readonly shortDescription: string,
    readonly playerDescription: string,
    readonly images: Link[] = [],
    readonly reference: Reference,
    readonly incompletes: string[],
    readonly type: EntityType,
    readonly version: Version,
    readonly found = true,
    readonly tags: string[] = [],
  ) {
    this.normalizedName = name.toLocaleLowerCase();
  }

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
      Quote.fromProto(proto?.getQuote()),
      proto?.getShortDescription() || proto?.getDescription() || '',
      proto?.getPlayerDescription() || '',
      proto?.getImagesList().map((i) => Link.fromProto(i, type)) || [],
      Reference.fromProto(productName, productId, proto?.getPagesList() || []),
      proto?.getIncompletesList() || [],
      type,
      Version.fromProto(proto?.getVersion()),
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
      QUOTE_EMPTY,
      '',
      '',
      image ? [new Link(name, image, false, type)] : [],
      REFERENCES_EMPTY,
      [],
      type,
      Version.DND_5_24,
      false,
      [],
    );
  }

  resolve(bases: Common[], values: Map<string, string>, allImages = false) {
    if (bases.length || values.has('image')) {
      return new Common(
        this.name,
        this.plural,
        bases.map((b) => b.name),
        this.synonyms,
        this.description || bases.map((b) => b.description).join('\n\n'),
        Resolve.firstDefined(
          this.quote,
          bases.map((b) => b.quote),
          (q) => !!q.message,
        ),
        this.shortDescription || bases.map((b) => b.shortDescription).join('\n\n'),
        this.playerDescription || bases.map((b) => b.playerDescription).join('\n\n'),
        values.has('image')
          ? [new Link(this.name, values.get('image') || '')]
          : allImages
            ? Resolve.dedupeByKey(
                this.images,
                bases.map((b) => b.images),
                (b) => b.label,
              )
            : this.images.length
              ? this.images
              : bases.flatMap((b) => b.images),
        this.reference || bases.find((b) => b.reference.formattedPages),
        [...this.incompletes, ...bases.flatMap((m) => m.incompletes)],
        this.type,
        Resolve.firstDefined(
          this.version,
          bases.map((b) => b.version),
          (v) => v !== Version.UNDEFINED,
        ),
        this.found || !!bases.find((b) => b.found),
        this.tags,
      );
    } else {
      return this;
    }
  }
}
