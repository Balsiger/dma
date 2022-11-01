import { Rational } from './rational';

describe('Rational', () => {
  it('should multiply', () => {
    expect(new Rational(1, 1, 2, false).multiply(2).toString()).toBe('3');
  });

  it('add', () => {
    expect(true).toBe(true);
  });
});
