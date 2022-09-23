export abstract class Enum<T> {
  constructor(public readonly name: string, protected readonly proto: number) {}

  toString(): string {
    return this.name;
  }

  protected static fromStringValue<T extends Enum<T>>(text: string, values: T[], unknown: T): T {
    for (const size of values) {
      if (size.name === text) {
        return size;
      }
    }

    return unknown;
  }

  protected static fromProtoValue<T extends Enum<T>>(proto: number | undefined, values: T[], unknown: T): T {
    for (const size of values) {
      if (size.proto === proto) {
        return size;
      }
    }

    return unknown;
  }
}
