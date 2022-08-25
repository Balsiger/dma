export class Resolvers<T> {
  resolvers: ((v: T) => void)[] = [];

  create(): Promise<T> {
    return new Promise<T>((resolve) => {
      this.resolvers.push(resolve);
    }) 
  }

  resolve(value: T) {
    for (const resolver of this.resolvers) {
      resolver(value);
    }

    this.resolvers = [];
  }
}