import { signal } from '@angular/core';
import { Local, LocalData, NoLocal } from '../../data/entities/local/local';
import { LocalStorageService } from '../local-storage.service';

export class LocalService<D extends LocalData, L extends Local<L, D>> {
  private static readonly storage = new LocalStorageService();

  constructor(
    protected readonly type: string,
    protected readonly context: string,
    protected readonly factory: (name: string, id: string) => L,
  ) {}

  path = `${this.type}/${this.context}`;
  locals = signal<L[]>(this.load());
  localsByKeyDirty = false;
  localsByKey = signal<Map<string, L>>(new Map(), {
    equal: (a, b) => a == b && !this.isDirty(),
  });

  get(name: string, id: string): L {
    const local = this.maybeGet(name, id);
    if (local) {
      return local;
    }

    this.updateData(name, id, {} as D);
    return this.get(name, id);
  }

  maybeGet(name: string, id: string): L | undefined {
    return this.localsByKey().get(this.createKey(name, id));
  }

  // TODO: need to remove locals

  private load(): L[] {
    return LocalService.storage.getAll(this.path);
  }

  private updateData(name: string, id: string, data: D): L {
    const key = this.createKey(name, id);
    let local = this.localsByKey().get(key);
    if (local) {
      local.localUpdate((data || {}) as D);
    } else {
      local = this.factory(name, id);
      this.localsByKey().set(key, local);
    }

    return local;
  }

  private isDirty(): boolean {
    const dirty = this.localsByKeyDirty;
    this.localsByKeyDirty = false;
    return dirty;
  }

  private createKey(name: string, id: string): string {
    return `${this.path}/${name}${id ? ' #' + id : ''}`;
  }
}

export class NoLocalService extends LocalService<LocalData, NoLocal> {
  constructor() {
    super('', '', (name: string, id: string) => new NoLocal());
  }
}
