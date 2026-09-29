import { LocalStorageService } from '../../../services/local-storage.service';

export interface LocalData {
  prefix: string;
  context: string;
  name: string;
  id: string;
}

// A local is a data entity that is dynamic in the game world but not fully persistent. It is stored in the browsers
// local storage and thus survives reload of the page, but does not exist on another browser or machine.
// The main purpose of a local entity is to save write and read traffic to firestore where data changes rapidly, but
// is not terribly bad if it's lost. As an example, the state of an encounter is stored in a fluid in firestore, as
// one might want to keep that persistent. The state of individual monsters (positions, hp) on the other hand, changes
// often but if lost is not a big deal. Additional, such data is usually used only during a single game session, where
// local storage is persistent enough.
export abstract class Local<L extends Local<L, D>, D extends LocalData> {
  private static readonly storage = new LocalStorageService();

  public readonly uniqueName: string;

  private readonly key = Local.createKey(this.prefix, this.context, this.name, this.id);
  constructor(
    private readonly prefix: string,
    private readonly context: string,
    readonly name: string,
    readonly id: string,
  ) {
    if (id) {
      this.uniqueName = `${this.name} #${this.id}`;
    } else {
      this.uniqueName = this.name;
    }
  }

  reset() {
    Local.storage.remove(this.key);
  }

  store() {
    Local.storage.set(this.key, this.toLocalData());
  }

  restore() {
    const data = Local.storage.get<D>(this.key);
    if (data) {
      this.localUpdate(data);
    }
  }

  protected abstract localUpdate(data: D): void;
  protected abstract toLocalData(): D;

  protected toBaseData(): LocalData {
    return {
      prefix: this.prefix,
      context: this.context,
      name: this.name,
      id: this.id,
    };
  }

  private static createKey(prefix: string, context: string, name: string, id: string): string {
    return `${prefix}/${context}/${name}${id ? ' #' + id : ''}`;
  }
}

export class NoLocal extends Local<NoLocal, LocalData> {
  constructor() {
    super('', '', '<none>', '-');
  }

  public override restore() {}

  protected override localUpdate(data: LocalData): void {
    // No update.
  }

  protected override toLocalData(): LocalData {
    return this.toBaseData();
  }
}
export const NO_LOCAL = new NoLocal();
