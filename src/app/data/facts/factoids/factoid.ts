/**
 * A factoid is a supporting value of a fact. It can be converted to data, but is always stored as part of a fact, not
 * individually.
 */
export interface Factoid<D> {
  toData(): D;
  update(data: D): void;
}
