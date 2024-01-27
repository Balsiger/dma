export class Utils {
  static emptyToUndefined<V>(value: V, empty: V): V | undefined {
    if (value === empty) {
      return undefined;
    }

    return value;
  }
}
