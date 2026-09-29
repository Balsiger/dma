import { DocumentData } from '@angular/fire/firestore';
import { Combined } from '../../data/entities/combined/combined';
import { Fluid } from '../../data/entities/fluid/fluid';
import { Immutable } from '../../data/entities/immutable/immutable';
import { Immutables } from '../../data/entities/immutable/immutables';
import { Local, LocalData } from '../../data/entities/local/local';
import { FluidService } from '../fluid/fluid.service';
import { LocalService, NoLocalService } from '../local/local.service';

type ExtractLocalData<L> = L extends Local<any, infer D> ? D : LocalData;
type ExtractLocalService<L> = L extends Local<infer L, infer D> ? LocalService<D, L> : NoLocalService;

export class CombinedService<
  C extends Combined<I, F, DD, FS, LD, L>,
  I extends Immutable<I>,
  F extends Fluid<DD, FS>,
  DD extends DocumentData,
  FS extends FluidService<DD, F, FS>,
  LD extends LocalData,
  L extends Local<L, LD>,
  LS extends LocalService<LD, L>,
> {
  private readonly combineds = new Map<string, C>();

  constructor(
    protected readonly immutables: Immutables<I>,
    protected readonly fluidService: FS,
    protected readonly localService: LS,
    protected readonly combinedConstructor: (i: I, f: F, l: L) => C,
  ) {}

  async get(name: string, id: string = ''): Promise<C> {
    let combined = this.combineds.get(name);
    if (!combined) {
      combined = this.combinedConstructor(
        this.immutables.get(name),
        this.fluidService.get(name),
        this.localService.get(name, id),
      );
      this.combineds.set(name, combined);
    }

    return combined;
  }

  async getAll(names: string[]): Promise<C[]> {
    return Promise.all(names.map(async (n) => await this.get(n)));
  }

  async ensureLoaded() {
    await this.fluidService.ensureLoaded();
  }
}
