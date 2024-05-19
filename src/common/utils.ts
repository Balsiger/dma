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
}
