import { LocalStorageService } from '../../services/local-storage.service';

export interface Data {
  prefix: string;
  context: string;
  name: string;
  number: number;
}

export abstract class Local<L extends Local<L, D>, D extends Data> {
  private static readonly storage = new LocalStorageService();

  private readonly key = Local.createKey(this.prefix, this.context, this.name, this.number);
  constructor(
    private readonly prefix: string,
    private readonly context: string,
    readonly name: string,
    private readonly number: number,
  ) {}

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
