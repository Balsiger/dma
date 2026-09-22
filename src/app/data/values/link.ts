import { LinkProto } from '../../proto/generated/value_pb';
import { StaticType } from '../entities/static/static';
import { Version } from '../entities/static/values/enums/version';

const PATTERN_LINK = /^\s*(.*?)\s*\[(.*)\]\s*$/;
const PATTERN_SYRINSCAPE = /^(elements|moods)\/\d+$/;
const PATTERN_DRIVE_URL = /^https:\/\/drive.google.com\/file\/d\/([^\/]*)/;
const PATTERN_SYRINSCAPE_URL = /^https:\/\/syrinscape\.com\/online\/frontend-api\/(.*?\/\d+)/;
const IMAGE_EXTENSIONS = ['.webp', '.jpg', '.jpeg', '.png', '.mp3', '.mp4'];

const BASE_DRIVE = 'https://lh3.googleusercontent.com/d/';
const BASE_SYRINSCAPE = 'https://syrinscape.com/online/frontend-api/';
// https://drive.google.com/file/d/1PPtBOo1RIXUOd6eOvV2mx4wmPUQ9kbNS/view?usp=sharing

export enum LabelType {
  rest = 'at rest',
  oficial = 'official',
  portrait = 'portrait',
}

export function isLabelType(value: any): value is LabelType {
  return Object.values(LabelType).includes(value);
}

export class Link {
  static EMPTY = new Link('', '', false);
  readonly url: string;

  constructor(
    readonly label: string | LabelType,
    url: string,
    readonly imageCover: boolean = false,
    readonly type: StaticType = StaticType.undefined,
    readonly product: string = 'DMA',
    readonly version: Version = Version.DND_5_24,
  ) {
    this.url = this.resolve(url, type, product, version);
  }

  toString(): string {
    return Link.format(this.label, this.url);
  }

  static format(label: string, url: string): string {
    return `${label} [${url}]`;
  }

  toSimpleString(): string {
    const drive = this.url.match(PATTERN_DRIVE_URL);
    if (drive) {
      return Link.format(this.label === this.url ? '' : this.label, drive[1]);
    } else {
      const syrinscape = this.url.match(PATTERN_SYRINSCAPE_URL);
      if (syrinscape) {
        return Link.format(this.label, syrinscape[1]);
      } else {
        return this.toString();
      }
    }
  }

  static parse(text: string): Link {
    if (text.startsWith('http:') || text.startsWith('https:')) {
      return new Link('(no label)', text.trim(), false);
    } else {
      const match = text.match(PATTERN_LINK);
      if (match) {
        return new Link(match[1], match[2], false);
      } else {
        return new Link('(no label)', text, false);
      }
    }
  }

  static fromProto(proto: LinkProto, type: StaticType, productAbbreviation: string, version: Version): Link {
    return new Link(
      proto.getLabel() || '',
      proto.getUrl() || '',
      proto.getImageCover(),
      type,
      productAbbreviation,
      version,
    );
  }

  private resolve(url: string, type: StaticType, product: string, version: Version): string {
    const drive = url.match(PATTERN_DRIVE_URL);
    if (drive) {
      url = drive[1];
    }

    if (url.startsWith('http')) {
      return url;
    }

    if (this.isImage(url)) {
      switch (type) {
        case StaticType.monster:
          return '/assets/monsters/' + url;
        case StaticType.npc:
          return '/assets/npcs/' + url;
        case StaticType.condition:
          return '/assets/conditions/' + url;
        case StaticType.token:
          return '/assets/tokens/' + url;
        case StaticType.spell:
          return '/assets/spells/' + url;
        case StaticType.product:
          return '/assets/products/' + url;
        case StaticType.miniature:
          return '/assets/miniatures/' + url;
        case StaticType.item:
          return `/assets/items/${product}/${version.short}/${url}`;
        case StaticType.trapHazard:
          return `/assets/traps/${product}/${version.short}/${url}`;
        case StaticType.encounter:
          return `/assets/encounters/${product}/${url}`;
        case StaticType.map:
          return '/assets/maps/' + url;
        case StaticType.adventure:
          return '/assets/adventures/' + url;
      }
    }

    return this.resolvePatterns(url);
  }

  private formatLabel(label: string | LabelType): string {
    return label.toString();
  }

  private isImage(url: string): boolean {
    for (const extension of IMAGE_EXTENSIONS) {
      if (url.endsWith(extension)) {
        return true;
      }
    }

    return false;
  }

  private resolvePatterns(url: string): string {
    if (url.match(PATTERN_SYRINSCAPE)) {
      return BASE_SYRINSCAPE + url + '/play/';
    }

    return BASE_DRIVE + url;
  }
}
