import { DocumentData } from '@angular/fire/firestore';
import { FactService } from '../../../services/fact/fact.service';
import { Link } from '../../values/link';
import { Fluid } from '../fluid/fluid';
import { Immutable } from '../immutable/immutable';
import { Common } from '../immutable/values/common';
import { Reference } from '../immutable/values/reference';

export class CombinedStaticFluid<
  S extends Immutable<S>,
  D extends DocumentData,
  FS extends FactService<D, Fluid<D, FS>, FS>,
  F extends Fluid<D, FS>,
> {
  constructor(
    protected readonly immutable: S,
    protected fluid: F,
    protected readonly factService: FS,
  ) {}

  get name(): string {
    return this.immutable.name;
  }

  get common(): Common {
    return this.immutable.common;
  }

  get reference(): Reference {
    return this.immutable.reference;
  }

  get images(): Link[] {
    return this.immutable.images;
  }

  update(changed: CombinedStaticFluid<S, D, FS, F>) {
    this.factService.update(this.fluid, changed.fluid);
  }

  deleteFact() {
    this.factService.delete(this.fluid);
  }
}
