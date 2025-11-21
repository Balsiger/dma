import { LinkProto } from '../../proto/generated/value_pb';
import { EntityType } from '../entities/entity';
import { Version } from '../entities/values/enums/version';

const PATTERN_LINK = /^\s*(.*?)\s*\[(.*)\]\s*$/;
const PATTERN_SYRINSCAPE = /^(elements|moods)\/\d+$/;
const PATTERN_DRIVE_URL = /^https:\/\/drive.google.com\/file\/d\/([^\/]*)/;
const PATTERN_SYRINSCAPE_URL = /^https:\/\/syrinscape\.com\/online\/frontend-api\/(.*?\/\d+)/;
const IMAGE_EXTENSIONS = ['.webp', '.jpg', '.jpeg', '.png'];

const BASE_DRIVE = 'https://lh3.googleusercontent.com/d/';
const BASE_SYRINSCAPE = 'https://syrinscape.com/online/frontend-api/';

const GLOSSARY = [
  // These need to be first because they overlap with things below.
  'Bonus Action',
  'Dexterity \\(Stealth\\)',
  'Short Rest',
  'Temporal Hit Points',
  'Neutral',

  'AC',
  'Action',
  'Advantage',
  'Armor Class',
  'Blinded',
  'Blindsight',
  'Bludgeoning',
  'Bright Light',
  'Chaotic Evil',
  'Chaotic Good',
  'Chaotic Neutral',
  'Charisma',
  'Charmed',
  'Constitution',
  'Construct',
  'Constructs',
  'Critical Hit',
  'D20 Test',
  'D20 Tests',
  'Darkness',
  'Darkvision',
  'Dash',
  'DC',
  'Dexterity',
  'Difficulty Class',
  'Dim Light',
  'Disadvantage',
  'Fey',
  'Grappled',
  'Hit Point',
  'Hit Points',
  'HP',
  'Immunity',
  'Intelligence',
  'Lawful Evil',
  'Lawful Good',
  'Lawful Neutral',
  'Long Rest',
  'Magic',
  'Neutral Evil',
  'Neutral Good',
  'Piercing',
  'Poison',
  'Poisoned',
  'Psychic',
  'Resistance',
  'Short',
  'Slashing',
  'Strength',
  'Study',
  'Thrown',
  'Total Cover',
  'Tremorsense',
  'Truesight',
  'Utilize',
  'Vulnerability',
  'Wisdom',
];

// https://drive.google.com/file/d/1PPtBOo1RIXUOd6eOvV2mx4wmPUQ9kbNS/view?usp=sharing

export class Link {
  static EMPTY = new Link('', '', false);
  readonly url: string;

  constructor(
    readonly label: string,
    url: string,
    readonly imageCover: boolean = false,
    readonly type: EntityType = EntityType.undefined,
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

  static fromProto(proto: LinkProto, type: EntityType, productAbbreviation: string, version: Version): Link {
    return new Link(
      proto.getLabel() || '',
      proto.getUrl() || '',
      proto.getImageCover(),
      type,
      productAbbreviation,
      version,
    );
  }

  static linkify(text: string): string {
    for (const term of GLOSSARY) {
      const regexp = new RegExp(`(^|\\s)${term}(\\s|$|!|.|,|;)`, 'g');
      text = text.replaceAll(regexp, '$1\\Glossary{' + term + '}$2');
    }

    return text;
  }

  private resolve(url: string, type: EntityType, product: string, version: Version): string {
    if (url.startsWith('http')) {
      return url;
    }

    if (this.isImage(url)) {
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
          return `/assets/items/${product}/${version.short}/${url}`;
        case EntityType.trapHazard:
          return `/assets/traps/${product}/${version.short}/${url}`;
        case EntityType.encounter:
          return '/assets/encounters/' + url;
        case EntityType.map:
          return '/assets/maps/' + url;
      }
    }

    return this.resolvePatterns(url);
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
