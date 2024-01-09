import { EMPTY as RATIONAL_EMPTY, Rational } from './values/rational';

export class Resolve {
  static dedupe<V>(base: V[], other: V[][]): V[] {
    const result = new Set<V>(base);
    for (const values of other) {
      for (const value of values) {
        result.add(value);
      }
    }

    return Array.from(result);
  }

  static dedupeByKey<V, W>(base: V[], other: V[][], mapKey: (v: V) => W): V[] {
    const result = new Set<V>(base);
    const seen = new Set<W>(base.map(mapKey));
    for (const values of other) {
      for (const value of values) {
        const key = mapKey(value);
        if (!seen.has(key)) {
          seen.add(key);
          result.add(value);
        }
      }
    }

    return Array.from(result);
  }

  static firstDefined<V>(base: V, other: V[], defined: (v: V) => boolean = (v) => !!v): V {
    if (defined(base)) {
      return base;
    }

    return other.find((v) => defined(v)) || base;
  }

  static max(base: number, other: number[]): number {
    if (base || other.length === 0) {
      return base;
    }

    return Math.max(...other);
  }

  static min(base: number, other: number[]): number {
    if (base || other.length === 0) {
      return base;
    }

    return Math.min(...other);
  }

  static sum(base: number, other: number[]): number {
    if (base || other.length === 0) {
      return base;
    }

    let sum = 0;
    for (const value of other) {
      sum += value;
    }

    return sum;
  }

  static maxRational(base: Rational, other: Rational[]): Rational {
    if (!base.isEmpty()) {
      return base;
    }

    let max = RATIONAL_EMPTY;
    for (const rational of other) {
      if (max.value < rational.value) {
        max = rational;
      }
    }

    return max;
  }
}
