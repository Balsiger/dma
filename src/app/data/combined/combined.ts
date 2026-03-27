import { DocumentData } from '@angular/fire/firestore';
import { FactService } from '../../services/fact/fact.service';
import { Entity } from '../entities/entity';
import { Common } from '../entities/values/common';
import { Reference } from '../entities/values/reference';
import { Fact } from '../facts/fact';
import { Link } from '../values/link';

export class Combined<
  E extends Entity<E>,
  D extends DocumentData,
  S extends FactService<D, Fact<D, S>, S>,
  F extends Fact<D, S>,
> {
  constructor(
    readonly entity: E,
    readonly fact: F,
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
}
