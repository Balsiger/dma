import { Resolvers } from './resolvers';

export abstract class Loading {
  private loading?: boolean;
  private readonly resolvers = new Resolvers<void>();

  constructor() {}

  async load() {
    if (this.loading === false) {
      return;
    }

    if (this.loading === true) {
      return this.resolvers.create();
    }

    this.loading = true;

    await this.doLoad();

    this.loading = false;
    this.resolvers.resolve();
  }

  protected abstract doLoad(): void;
}
