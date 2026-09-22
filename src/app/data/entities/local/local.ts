import { LocalStorageService } from '../../../services/local-storage.service';

export interface Data {
  prefix: string;
  context: string;
  name: string;
  number: number;
}

// A local is a data entity that is dynamic in the game world but not fully persistent. It is stored in the browsers
// local storage and thus survives reload of the page, but does not exist on another browser or machine.
// The main purpose of a local entity is to save write and read traffic to firestore where data changes rapidly, but
// is not terribly bad if it's lost. As an example, the state of an encounter is stored in a fluid in firestore, as
// one might want to keep that persistent. The state of individual monsters (positions, hp) on the other hand, changes
// often but if lost is not a big deal. Additional, such data is usually used only during a single game session, where
// local storage is persistent enough.
export abstract class Local<L extends Local<L, D>, D extends Data> {
  private static readonly storage = new LocalStorageService();

  public readonly uniqueName: string;

  private readonly key = Local.createKey(this.prefix, this.context, this.name, this.number);
  constructor(
    private readonly prefix: string,
    private readonly context: string,
    readonly name: string,
    readonly number: number,
  ) {
    if (number) {
      this.uniqueName = `${this.name} #${this.number}`;
    } else {
      this.uniqueName = this.name;
    }
  }

  reset() {
    Local.storage.remove(this.key);
  }

  store() {
    Local.storage.set(this.key, this.toData());
  }

  restore() {
    const data = Local.storage.get<D>(this.key);
    if (data) {
      this.update(data);
    }
  }

  protected abstract update(data: D): void;
  protected abstract toData(): D;

  protected toBaseData(): Data {
    return {
      prefix: this.prefix,
      context: this.context,
      name: this.name,
      number: this.number,
    };
  }

  //load(context: string, name: string, number: number): L {}

  private static createKey(prefix: string, context: string, name: string, number: number): string {
    return `${prefix}/${context}/${name}${number ? ' #' + number : ''}`;
  }
}
