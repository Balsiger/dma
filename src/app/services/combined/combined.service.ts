import { DocumentData } from '@angular/fire/firestore';
import { Combined } from '../../data/combined/combined';
import { Entities } from '../../data/entities/entities';
import { Entity } from '../../data/entities/entity';
import { Fact } from '../../data/facts/fact';
import { FactService } from '../fact/fact.service';

export class CombinedService<
  C extends Combined<E, D, S, F>,
  E extends Entity<E>,
  F extends Fact<D, S>,
  D extends DocumentData,
  S extends FactService<D, F, S>,
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
}
