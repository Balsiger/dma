/**
 * A nested fluid is a supporting value of a fact. It can be converted to data, but is always stored as part of a fluid,
 * not individually.
 */
export interface NestedFluid<D> {
  toData(): D;
  update(data: D): void;
}
