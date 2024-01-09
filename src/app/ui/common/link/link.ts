const PATTERN_LINK = /^(.*)\s*\[(.*)\]\s*$/;
const PATTERN_SYRINSCAPE = /^(elements|moods)\/\d+$/;

const BASE_DRIVE = 'https://drive.google.com/file/d/';
const BASE_SYRINSCAPE = 'https://syrinscape.com/online/frontend-api/';

export class Link {
  constructor(readonly label: string, readonly url: string) {
    this.url = this.resolve(url);
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
