export class Modifier<T> {
  constructor(public readonly value: T, public readonly source: string) {}
}

export abstract class Value<T> {
  readonly formattedTotal: string;
  readonly formattedInline: string;
  readonly total: T;

  constructor(public readonly base: T, public readonly source: string, public readonly modifiers: Modifier<T>[]) {
    this.total = this.computeTotal();
    this.formattedInline = this.computeInline();
    this.formattedTotal = this.formatTotal(this.total);
  }

  protected formatTotal(total: T): string {
    return `${total}`;
  }

  protected abstract computeTotal(): T;
  protected abstract computeInline(): string;
  abstract add(modifier: Modifier<T>[]): Value<T>;
}

export class NumberValue extends Value<number> {
  override readonly formattedTotal: string;

  constructor(base: number, source: string, modifiers: Modifier<number>[]) {
    super(base, source, modifiers);
    
    this.formattedTotal = this.formatTotal(this.total);
  }

  protected computeTotal(): number {
    let total = this.base;
    for (const modifier of this.modifiers) {
      total += modifier.value;
    }

    return total;
  }

  protected computeInline(): string {
    return this.modifiers
      .filter((m) => m.value != 0)
      .map((m) => m.source)
      .join(', ');
  }

  add(modifiers: Modifier<number>[]): NumberValue {
    return new NumberValue(this.base, this.source, [...this.modifiers, ...modifiers]);
  }
}

export class ModifierValue extends NumberValue {
  override readonly formattedTotal: string;

  constructor(base: number, source: string, modifiers: Modifier<number>[]) {
    super(base, source,modifiers);

      this.formattedTotal = this.formatTotal(this.total);
  }

  override add(modifiers: Modifier<number>[]): ModifierValue {
    return new ModifierValue(this.base, this.source, [...this.modifiers, ...modifiers]);
  }

  protected override formatTotal(total: number): string {
    if (total >= 0) {
      return `+${total}`;
    }

    return super.formatTotal(total);
  }

  merge(other?: ModifierValue): ModifierValue {
    if (other) {
      return new ModifierValue(this.base + other.base, this.source + '/'+ other.source, [...this.modifiers, ...other.modifiers]);
    }

    return this;
  }
}

export const EMPTY_MODIFIER_VALUE = new ModifierValue(0, "", []);
