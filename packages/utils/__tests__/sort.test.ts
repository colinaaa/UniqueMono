import { stableSort } from '../src/sort';

describe('@uniqs/utils/sort', () => {
  describe('stableSort', () => {
    it('should sort plain number array', () => {
      const original = [4, 3, 2, 1];
      const sorted = stableSort(original, (x, y) => x - y);
      expect(sorted).toEqual(expect.arrayContaining([1, 2, 3, 4]));
      expect(sorted).toMatchObject<number[]>([1, 2, 3, 4]);
    });

    it('should sort array of objects', () => {
      interface Item {
        id: number;
        name: string;
        first?: boolean;
        second?: boolean;
      }
      const original: Item[] = [
        { id: 10, name: '10' },
        { id: 3, name: '3' },
        { id: 5, name: '5', first: true },
        { id: 7, name: '7' },
        { id: 9, name: '9' },
        { id: 4, name: '4' },
        { id: 6, name: '6' },
        { id: 5, name: '5', second: true },
      ];

      const sorted = stableSort(original, ({ id }, { id: id2 }) => id - id2);

      expect(original).toEqual(expect.arrayContaining(sorted));
      sorted.forEach(({ id, name }) => {
        expect(id.toString()).toBe(name);
      });

      // test if it's stable
      expect(sorted.findIndex(({ first }) => first)).toBeLessThan(sorted.findIndex(({ second }) => second));
    });
  });
});
