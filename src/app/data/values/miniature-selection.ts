const PATTERN_MINIATURE_LINE = /\s*(.*?)\s*:\s*(\d+)\s*x\s*(.*)\s*\((.*?)\)/;

export class MiniatureSelection {
  constructor(
    readonly monster: string,
    readonly count: number,
    readonly miniature: string,
    readonly location: string,
  ) {}

  static fromString(miniature: string): MiniatureSelection | undefined {
    const match = miniature.match(PATTERN_MINIATURE_LINE);
    if (match) {
      return new MiniatureSelection(match[1], Number(match[2]) || 0, match[3], match[4]);
    } else {
      console.error('Cannot parse miniature line: ' + miniature);
      return undefined;
    }
  }

  static parseMiniatures(miniatures: string): Map<string, MiniatureSelection[]> {
    const parts = miniatures.split(/\s*;\s*/);
    const parsed = new Map<string, MiniatureSelection[]>();

    for (const part of parts) {
      if (!part) {
        // Ignore empty strings.
        continue;
      }

      const selection = MiniatureSelection.fromString(part);
      if (selection) {
        if (parsed.has(selection.monster)) {
          parsed.get(selection.monster)?.push(selection);
        } else {
          parsed.set(selection.monster, [selection]);
        }
      }
    }

    return parsed;
  }
}
