import { DocumentData } from '@angular/fire/firestore';
import { FactService } from '../../services/fact/fact.service';
import { Fluid } from '../entities/fluid/fluid';
import { Static } from '../entities/static/static';
import { Common } from '../entities/static/values/common';
import { Reference } from '../entities/static/values/reference';
import { Link } from '../values/link';

export class Combined<
  E extends Static<E>,
  D extends DocumentData,
  S extends FactService<D, Fluid<D, S>, S>,
  F extends Fluid<D, S>,
> {
  constructor(
    protected readonly entity: E,
    protected fact: F,
    protected readonly factService: S,
  ) {}

  get name(): string {
    return this.entity.name;
  }

  get common(): Common {
    return this.entity.common;
  }

  get reference(): Reference {
    return this.entity.reference;
  }

  get images(): Link[] {
    return this.entity.images;
  }

  update(changed: Combined<E, D, S, F>) {
    this.factService.update(this.fact, changed.fact);
  }

  deleteFact() {
    this.factService.delete(this.fact);
  }
}
