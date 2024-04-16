import { Loading } from '../../services/loading';

/**
 * A fact is an mutable piece of data in the game world. Facts usually exist only once per game fact
 * (eg. a specific campaign is represented by a single object throughut the whole dma app). Facts are stored
 * as a data document in firestore.
 */
export abstract class Fact<T> extends Loading implements Factoid<T> {
  abstract update(data: T): void;
  abstract toData(): T;
  protected abstract save(): void;
}

/**
 * A factoid is a supporting value of a fact. It can be converted to data, but is always stored as part of a fact, not
 * individually.
 */
export interface Factoid<T> {
  toData(): T;
}
