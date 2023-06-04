export class CollapsibleValue<T> {
  constructor(readonly value: T, public collapsed = true) {}

  collapse() {
    this.collapsed = true;
  }

  expand() {
    this.collapsed = false;
  }
}

export class CountedValue<T> {
  constructor(readonly value: T, readonly count: number) {}
}
