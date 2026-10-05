import { computed, signal } from '@angular/core';
import { Local, LocalData, NoLocal } from '../../data/entities/local/local';
import { Context } from '../context';
import { LocalStorageService } from '../local-storage.service';

export class LocalService<D extends LocalData, L extends Local<L, D>> {
  private static readonly storage = new LocalStorageService();

  constructor(
    protected readonly context: Context,
    protected readonly factory: (name: string, id: string) => L,
  ) {
    this.load();
  }

  path = this.context.toPath();
  locals = computed(() => this.localsByKey().values());
  localsByKeyDirty = false;
  localsByKey = signal<Map<string, L>>(new Map(), {
    equal: (a, b) => a == b && !this.isDirty(),
  });

  get(name: string, id: string, data: D = {} as D): L {
    const local = this.maybeGet(name, id);
    if (local) {
      return local;
    }

    return this.updateData(name, id, data);
  }

  maybeGet(name: string, id: string): L | undefined {
    return this.localsByKey().get(this.createKey(name, id));
  }

  // TODO: need to remove locals

  private load(): L[] {
    const data: D[] = LocalService.storage.getAll(this.path);
    this.localsByKeyDirty = true;
    const locals = data.map((d) => this.get(d.name, d.id, d));
    return locals;
  }

  private updateData(name: string, id: string, data: D): L {
    const key = this.createKey(name, id);
    let local = this.localsByKey().get(key);
    if (!local) {
      local = this.factory(name, id);
      this.localsByKey().set(key, local);
    }

    // Only update if we have data, to prevent updating values with empty data and trigger errors about
    // updating a signal in a computed.
    if (data.name) {
      local.localUpdate((data || { name, id }) as D);
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
    super(Context.empty(), (name: string, id: string) => new NoLocal());
  }
}
