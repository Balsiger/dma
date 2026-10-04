class Segment {
  constructor(
    readonly type: string,
    readonly path: string,
  ) {}

  complete(path: string) {
    if (this.path) {
      throw new Error(`Cannot complete a context that is already complete: '${this.path}'`);
    }

    return new Segment(this.type, path);
  }
}

export class Context {
  private constructor(private readonly segments: Segment[]) {}

  extend(type: string, path: string): Context {
    return new Context([...this.segments, new Segment(type, path)]);
  }

  extendTerminal(type: string): Context {
    return this.extend(type, '');
  }

  complete(path: string): Context {
    const last = this.segments.at(-1);
    if (!last) {
      throw new Error('Context is empty and cannot be completed!');
    }

    return new Context([...this.segments.slice(0, -1), last.complete(path)]);
  }

  toPath(): string {
    return this.segments.map((s) => (s.path ? `${s.type}/${s.path}` : s.type)).join('/');
  }

  static create(type: string, path: string): Context {
    return new Context([new Segment(type, path)]);
  }

  static createTerminal(type: string) {
    return Context.create(type, '');
  }

  static empty(): Context {
    return Context.createTerminal('-');
  }
}
