import { DocumentData } from '@angular/fire/firestore';
import { FactService } from '../../services/fact/fact.service';
import { Factoid } from './factoids/factoid';

/**
 * A fact is an mutable piece of data in the game world. Facts usually exist only once per game fact
 * (eg. a specific campaign is represented by a single object throughut the whole dma app). Facts are stored
 * as a data document in firestore.
 */
export abstract class Fact<D extends DocumentData, S extends FactService<D, Fact<D, S>, S>> implements Factoid<D> {
  constructor(protected readonly service: S) {}

  abstract update(data: D): void;
  abstract toData(): D;
  abstract buildDocumentId(): string;

  protected async save() {
    await this.service.save(this);
  }
}
