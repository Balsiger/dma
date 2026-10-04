import { DocumentData } from '@angular/fire/firestore';
import { FluidService, NoFluidService } from '../../../services/fluid/fluid.service';
import { Link } from '../../values/link';
import { Fluid } from '../fluid/fluid';
import { Immutable } from '../immutable/immutable';
import { Common } from '../immutable/values/common';
import { Reference } from '../immutable/values/reference';
import { Local, LocalData } from '../local/local';

type ExtractLocalData<L> = L extends Local<any, infer D> ? D : LocalData;
type ExtractFluidData<F> = F extends Fluid<infer D, any> ? D : DocumentData;
type ExtractFluidService<F> = F extends Fluid<any, infer S> ? S : NoFluidService;

// An entity that includes immutable, fluid, and local data.
export class Combined<
  I extends Immutable<I>,
  F extends Fluid<any, any>,
  DD extends DocumentData,
  FS extends FluidService<DD, F, FS>,
  LD extends LocalData,
  L extends Local<L, LD>,
> {
  constructor(
    protected readonly immutable: I,
    readonly fluid: F,
    protected readonly fluidService: FS,
    protected readonly local: L,
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

  updateTo(changed: Combined<I, F, DD, FS, LD, L>) {
    this.fluidService.update(this.fluid, changed.fluid);
  }

  delete() {
    this.deleteFluid();
    this.local.reset();
  }

  deleteFluid() {
    this.fluidService.delete(this.fluid);
  }
}
