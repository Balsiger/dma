import { DocumentData } from '@angular/fire/firestore';
import { FluidService, NoFluidService } from '../../../services/fluid/fluid.service';
import { NestedFluid } from './factoids/nested';

/**
 * A fluid is an mutable piece of data in the game world. Fluids usually exist only once per game entity
 * (eg. a specific campaign is represented by a single object throughout the whole dma app). Fluids are stored
 * as a data document in firestore.
 */
export abstract class Fluid<
  D extends DocumentData,
  S extends FluidService<D, Fluid<D, S>, S>,
> implements NestedFluid<D> {
  constructor(protected readonly service: S) {}

  abstract update(data: D): void;
  abstract toData(): D;
  abstract buildDocumentId(): string;

  protected async save() {
    await this.service.save(this);
  }
}

export class NoFluid extends Fluid<DocumentData, NoFluidService> {
  constructor() {
    super(new NoFluidService());
  }

  update(data: DocumentData) {}

  toData() {
    return {};
  }

  buildDocumentId(): string {
    return '';
  }
}
export const NO_FLUID = new NoFluid();
