import { CommonProto } from '../../../proto/generated/template_pb';
import { Resolve } from '../../resolve';
import { Link } from '../../values/link';
import { EntityType } from '../entity';
import { ProductContent } from '../product-content';
import { Version } from './enums/version';
import { EMPTY as QUOTE_EMPTY, Quote } from './quote';
import { EMPTY as REFERENCES_EMPTY, Reference } from './reference';

const BASE_REFERENCE = '<##>';

/** The common information of all entities. */
export class Common {
  readonly normalizedName: string;

  constructor(
    readonly name: string,
    readonly plural: string,
    readonly bases: string[],
    readonly baseOnly: boolean,
    readonly synonyms: string[],
    private readonly description: string,
    readonly quote: Quote,
    readonly shortDescription: string,
    private readonly playerDescription: string,
    readonly images: Link[] = [],
    readonly reference: Reference,
    readonly incompletes: string[],
    readonly type: EntityType,
    readonly version: Version,
    readonly convertedFrom: Version,
    readonly found = true,
    readonly tags: string[] = [],
    readonly descriptions: string[] = [description],
    readonly playerDescriptions: string[] = [playerDescription || description],
  ) {
    this.normalizedName = name.toLocaleLowerCase();
  }

  static fromProto(
    proto: CommonProto | undefined,
    productContent: ProductContent,
    type: EntityType,
    noPlurals = false,
    specialName: string = '',
  ): Common {
    const version = Version.fromProto(proto?.getVersion());
    return new Common(
      specialName || proto?.getName() || '<none>',
      noPlurals ? '' : proto?.getPlural() || proto?.getName() + 's',
      proto?.getBasesList() || [],
      proto?.getBaseOnly() || false,
      proto?.getSynonymsList() || [],
      proto?.getDescription() || '',
      Quote.fromProto(proto?.getQuote()),
      proto?.getShortDescription() || '',
      proto?.getPlayerDescription() || '',
      proto?.getImagesList().map((i) => Link.fromProto(i, type, productContent.abbreviation, version)) || [],
      Reference.fromProto(
        productContent.name,
        productContent.id,
        proto?.getPagePrefix() || '',
        proto?.getPagesList() || [],
      ),
      proto?.getIncompletesList() || [],
      type,
      version,
      Version.fromProto(proto?.getConvertedFrom()),
      !!proto,
      proto?.getTagsList() || [],
    );
  }

  static create(name: string, type: EntityType, image?: string): Common {
    return new Common(
      name,
      name + 's',
      [],
      false,
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
      Version.UNDEFINED,
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
        this.baseOnly,
        this.synonyms,
        this.description,
        Resolve.firstDefined(
          this.quote,
          bases.map((b) => b.quote),
          (q) => !!q.message,
        ),
        this.resolveText(
          this.shortDescription,
          bases.map((b) => b.shortDescription),
        ),
        this.playerDescription,
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
        Resolve.firstDefined(
          this.convertedFrom,
          bases.map((b) => b.convertedFrom),
          (v) => v !== Version.UNDEFINED,
        ),
        this.found || !!bases.find((b) => b.found),
        this.tags,
        this.computeDescriptions(bases),
        this.computePlayerDescriptions(bases),
      );
    } else {
      return this;
    }
  }

  private computePlayerDescriptions(bases: Common[]): string[] {
    const baseTexts = bases.flatMap((b) => b.playerDescriptions);

    if (this.playerDescription.trim()) {
      return [this.resolveText(this.playerDescription, baseTexts)];
    } else if (this.description.trim()) {
      return [this.resolveText(this.description, baseTexts)];
    } else {
      return baseTexts;
    }
  }

  private computeDescriptions(bases: Common[]): string[] {
    const baseTexts = bases.flatMap((b) => b.description);

    if (this.description.trim()) {
      return [this.resolveText(this.description, baseTexts)];
    } else {
      return baseTexts;
    }
  }

  private resolveText(current: string, bases: string[]): string {
    const base = bases.join('\\par{}');
    if (current) {
      return current.replace(BASE_REFERENCE, base);
    } else {
      return base;
    }
  }
}
