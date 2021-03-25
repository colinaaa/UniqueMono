import { randomRange } from '../src/random';

describe('@uniqs/utils/random', () => {
  describe('randomRange', () => {
    const from = 1000;
    const to = 10000;
    it('should get number in range', () => {
      expect(randomRange(from, to)).toBeGreaterThan(from);
      expect(randomRange(from, to)).toBeLessThan(to);
    });

    it('should get a integer', () => {
      const r = randomRange(from, to);
      expect(r.toString()).toMatch(/\d{4}/);
    });
  });
});
