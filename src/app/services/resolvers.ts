type Resolver<T> = ((v: T) => void);

export class Resolvers<T> {
  resolvers: Resolver<T>[] = [];
  namedResolvers = new Map<string, Resolver<T>[]>();

  create(name?: string): Promise<T> {
    return new Promise<T>((resolve) => {
      if (name) {
        if (!this.namedResolvers.has(name)) {
          this.namedResolvers.set(name, []);
        }
        this.namedResolvers.get(name)!.push(resolve);
      } else {
        this.resolvers.push(resolve);
      }
    });
  }

  resolve(value: T, name?: string) {
    if (name) {
      if (this.namedResolvers.has(name)) {
        for (const resolver of this.namedResolvers.get(name)!) {
          resolver(value);
        }
      }

      this.namedResolvers.delete(name);
    } else {
      for (const resolver of this.resolvers) {
        resolver(value);
      }

      this.resolvers = [];
    }
  }
}
