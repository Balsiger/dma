export class Multimap<K, V> {
  private readonly map = new Map<K, V[]>();

  constructor(iterable: Iterable<readonly [K, V]> = []) {
    for (const entry of iterable) {
      this.set(entry[0], entry[1]);
    }
  }

  set(key: K, value: V) {
    let values = this.map.get(key);
    if (!values) {
      values = [];
      this.map.set(key, values);
    }

    values.push(value);
  }

  get(key: K): V[] | undefined {
    return this.map.get(key);
  }

  getFirst(key: K): V | undefined {
    const values = this.map.get(key);
    return values ? values[0] : undefined;
  }

  delete(key: K, value: V) {
    const values = this.map.get(key);
    if (!values) {
      return false;
    }

    const index = values.findIndex((v) => v === value);
    if (index < 0) {
      return false;
    }

    values.splice(index, 1);
    return true;
  }

  has(key: K): boolean {
    return this.map.has(key);
  }

  get size() {
    return this.map.size;
  }

  entries(): { key: K; value: V }[] {
    return [...this.map.entries()].flatMap((e) => e[1].map((v) => ({ key: e[0], value: v })));
  }

  keys(): K[] {
    return [...this.map.keys()];
  }

  values(): V[] {
    return [...this.map.entries()].flatMap((e) => e[1].map((v) => v));
  }
}
