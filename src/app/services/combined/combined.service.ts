import { DocumentData } from '@angular/fire/firestore';
import { Synced } from '../../data/entities/combined/synced';
import { Fluid } from '../../data/entities/fluid/fluid';
import { Entities } from '../../data/entities/immutable/entities';
import { Immutable } from '../../data/entities/immutable/immutable';
import { FluidService } from '../fact/fluid.service';

export class CombinedService<
  C extends Synced<E, D, S, F>,
  E extends Immutable<E>,
  F extends Fluid<D, S>,
  D extends DocumentData,
  S extends FluidService<D, F, S>,
> {
  private readonly combineds = new Map<string, C>();

  constructor(
    private readonly entities: Entities<E>,
    private readonly factService: S,
    private readonly combinedConstructor: (e: E, f: F) => C,
  ) {}

  async get(name: string): Promise<C> {
    let combined = this.combineds.get(name);
    if (!combined) {
      combined = this.combinedConstructor(this.entities.get(name), this.factService.get(name));
      this.combineds.set(name, combined);
    }

    return combined;
  }

  async getAll(names: string[]): Promise<C[]> {
    return Promise.all(names.map(async (n) => await this.get(n)));
  }

  async ensureLoaded() {
    await this.factService.ensureLoaded();
  }
}
