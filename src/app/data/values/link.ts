import { LinkProto } from '../../proto/generated/value_pb';
import { EntityType } from '../entities/entity';

const PATTERN_LINK = /^\s*(.*?)\s*\[(.*)\]\s*$/;
const PATTERN_SYRINSCAPE = /^(elements|moods)\/\d+$/;
const PATTERN_DRIVE_URL = /^https:\/\/drive.google.com\/file\/d\/([^\/]*)/;
const PATTERN_SYRINSCAPE_URL = /^https:\/\/syrinscape\.com\/online\/frontend-api\/(.*?\/\d+)/;

const BASE_DRIVE = 'https://lh3.googleusercontent.com/d/';
const BASE_SYRINSCAPE = 'https://syrinscape.com/online/frontend-api/';

export class Link {
  static EMPTY = new Link('', '');

  constructor(
    readonly label: string,
    readonly url: string,
    readonly type: EntityType = EntityType.undefined,
  ) {
    this.url = this.resolve(url, type);
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
      return new Link('(no label)', text.trim());
    } else {
      const match = text.match(PATTERN_LINK);
      if (match) {
        return new Link(match[1], match[2]);
      } else {
        return new Link('(no label)', text);
      }
    }
  }

  static fromProto(proto: LinkProto, type: EntityType): Link {
    return new Link(proto.getLabel() || '', proto.getUrl() || '', type);
  }

  private resolve(url: string, type: EntityType): string {
    if (url.startsWith('http')) {
      return url;
    }

    switch (type) {
      case EntityType.monster:
        return '/assets/monsters/' + url;
      case EntityType.npc:
        return '/assets/npcs/' + url;
      case EntityType.condition:
        return '/assets/conditions/' + url;
      case EntityType.token:
        return '/assets/tokens/' + url;
      case EntityType.spell:
        return '/assets/spells/' + url;
      case EntityType.product:
        return '/assets/products/' + url;
      case EntityType.miniature:
        return '/assets/miniatures/' + url;
      case EntityType.item:
        return '/assets/items/' + url;
      case EntityType.encounter:
        return '/assets/encounters/' + url;
      case EntityType.map:
        return '/assets/maps/' + url;

      default:
        return this.resolvePatterns(url);
    }
  }

  private resolvePatterns(url: string): string {
    if (url.match(PATTERN_SYRINSCAPE)) {
      return BASE_SYRINSCAPE + url + '/play/';
    }

    return BASE_DRIVE + url;
  }
}
