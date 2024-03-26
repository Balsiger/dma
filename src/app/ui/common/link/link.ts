const PATTERN_LINK = /^\s*(.*?)\s*\[(.*)\]\s*$/;
const PATTERN_SYRINSCAPE = /^(elements|moods)\/\d+$/;
const PATTERN_DRIVE_URL = /^https:\/\/drive.google.com\/file\/d\/([^\/]*)/;
const PATTERN_SYRINSCAPE_URL = /^https:\/\/syrinscape\.com\/online\/frontend-api\/(.*?\/\d+)/;

const BASE_DRIVE = 'https://drive.google.com/file/d/';
const BASE_SYRINSCAPE = 'https://syrinscape.com/online/frontend-api/';

export class Link {
  constructor(
    readonly label: string,
    readonly url: string,
  ) {
    this.url = this.resolve(url);
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
      return Link.format(this.label, drive[1]);
    } else {
      const syrinscape = this.url.match(PATTERN_SYRINSCAPE_URL);
      console.log('~~syrinscape', this.url, syrinscape);
      if (syrinscape) {
        return Link.format(this.label, syrinscape[1]);
      } else {
        return this.toString();
      }
    }
  }

  static parse(text: string): Link {
    if (text.startsWith('http:') || text.startsWith('https:')) {
      return new Link(text, text);
    } else {
      const match = text.match(PATTERN_LINK);
      if (match) {
        return new Link(match[1], match[2]);
      } else {
        return new Link('(no label)', text);
      }
    }
  }

  private resolve(url: string): string {
    if (url.startsWith('http')) {
      return url;
    }

    if (url.match(PATTERN_SYRINSCAPE)) {
      return BASE_SYRINSCAPE + url + '/play/';
    }

    return BASE_DRIVE + url;
  }
}
