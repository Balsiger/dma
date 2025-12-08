export class Multimap<K, V> {
  private readonly map = new Map<K, V[]>();

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
