import { Data, Local, NoLocal } from '../../data/entities/local/local';

export class LocalService<D extends Data, L extends Local<L, D>> {
  constructor(
    protected readonly prefix: string,
    protected readonly context: string,
    protected readonly factory: (name: string, id: string) => L,
  ) {}

  get(name: string, id: string): L {
    return this.factory(name, id);
  }
}

export class NoLocalService extends LocalService<Data, NoLocal> {
  constructor() {
    super('', '', (name: string, id: string) => new NoLocal());
  }
}
