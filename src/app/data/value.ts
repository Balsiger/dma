export class Modifier<T> {
  constructor(readonly value: T, readonly source: string) {}
}

export abstract class Value<T> {
  readonly formatted: string;
  readonly total: T;

  constructor(readonly base: T, readonly source: string, readonly modifiers: Modifier<T>[]) {
    this.total = this.computeTotal();
    this.formatted = `${this.total}`;
  }

  protected abstract computeTotal(): T;
}

export class NumberValue extends Value<number> {
  constructor(base: number, source: string, modifiers: Modifier<number>[]) {
    super(base, source, modifiers);
  }

  protected computeTotal(): number {
    let total = this.base;
    for (const modifier of this.modifiers) {
      total += modifier.value;
    }

    return total;
  }
}
