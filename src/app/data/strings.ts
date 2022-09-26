const PATTERN_ID = /^(.*?)(\d+)$/;

export class Strings {
  static extract(text: string, pattern: RegExp): string[] {
    const match = text.match(pattern);
    if (match) {
      return match.slice(1);
    }

    return [];
  }

  static compareId(a: string, b: string): number {
    const aMatch = Strings.extract(a, PATTERN_ID);
    const bMatch = Strings.extract(b, PATTERN_ID);

    if (aMatch.length && bMatch.length) {
      if (aMatch[0] === bMatch[0]) {
        return Number(aMatch[1]) - Number(bMatch[1]);
      }

      return aMatch[0] < bMatch[0] ? -1 : 1;
    } else {
      return a === b ? 0 : a < b ? -1 : 1;
    }
  }
}
