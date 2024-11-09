const PATTERN_FILE = /^(.*)(\..*?)$/;

export class Utils {
  static emptyToUndefined<V>(value: V, empty: V): V | undefined {
    if (value === empty) {
      return undefined;
    }

    return value;
  }

  static sum(values: number[]): number {
    return values.reduce((a, b) => a + b, 0);
  }

  static average(values: number[]): number {
    return this.sum(values) / values.length;
  }

  static last(text: string, delimiter: string): string {
    const parts = text.split(delimiter);
    return parts.pop() || text;
  }

  static selectElement<T>(array: Array<T> | undefined, index: number): T | undefined {
    if (array && array.length > index) {
      return array[index];
    } else {
      return undefined;
    }
  }

  static trimArray(array: Array<string>): Array<string> {
    return array.filter((a) => !!a.trim());
  }

  static compareIds(a: string, b: string): number {
    const [aLead, aNumber, aRest] = this.extractNextNumber(a);
    const [bLead, bNumber, bRest] = this.extractNextNumber(b);

    if (aLead !== bLead) {
      return a.localeCompare(b);
    }

    if (aNumber === undefined && bNumber == undefined) {
      return a.localeCompare(b);
    }

    if (aNumber === undefined) {
      return +1;
    }

    if (bNumber == undefined) {
      return -1;
    }

    const diff = aNumber - bNumber;
    if (diff) {
      return diff;
    }

    return Utils.compareIds(aRest, bRest);
  }

  static extractNextNumber(text: string): [string, number | undefined, string] {
    const match = text.match(/^(.*?)(\d+)(.*)$/);
    if (match) {
      return [match[1], Number(match[2]), match[3]];
    }

    return [text, undefined, ''];
  }

  static isDefined<T>(data: T | undefined): data is T {
    return !!data;
  }

  /**
   * Execute the given action delayed. This usually helps setting a signal outside of the normal signal handling to
   * prevent errors about setting a signal during an effect or compute.
   */
  static delayed(action: () => void) {
    setTimeout(action);
  }

  static extractExtension(name: string): string {
    const match = name.match(PATTERN_FILE);
    console.log('~~extension', name, match);
    if (match) {
      return match[2];
    }

    return '';
  }
}
