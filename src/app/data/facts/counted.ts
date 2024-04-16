import { Factoid } from './fact';

export const VALIDATE = /^(?:(\d+)\s*x)?\s*(.+?)\s*$/;

export interface Data {
  count: number;
  name: string;
}

export class Counted implements Factoid<Data> {
  constructor(
    readonly name: string,
    readonly count = 1,
  ) {}

  toData(): Data {
    return {
      count: this.count,
      name: this.name,
    };
  }

  toString(): string {
    if (this.count) {
      return this.count + 'x ' + this.name;
    }

    return this.name;
  }

  static fromData(data: Data): Counted {
    return new Counted(data.name, data.count);
  }

  static fromString(text: string): Counted {
    const match = text.match(VALIDATE);
    if (match) {
      return new Counted(match[2], Number(match[1]) || 1);
    }

    return new Counted(text);
  }
}
