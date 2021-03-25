import { compareTitle, convertTitle } from '../src/title';

describe('@uniqs/utils/title', () => {
  describe('compareTitle', () => {
    const spring = ['2020S', '2021S'];
    const camp = ['2020C', '2021C'];
    const autumn = ['2020A', '2021A'];
    it('should get zero for same title', () => {
      expect(compareTitle('2020A', '2020A')).toBe(0);
    });
    it('should compare autumn, camp and spring in same year', () => {
      // 2020A > 2020S
      expect(compareTitle(autumn[0], spring[0])).toBe(1);

      // 2020A > 2020C
      expect(compareTitle(autumn[0], camp[0])).toBe(1);

      // 2020S < 2020C
      expect(compareTitle(spring[0], camp[0])).toBe(-1);
    });
    it('should compare autumn, camp and spring in different year', () => {
      // 2021A > 2020S
      expect(compareTitle(autumn[1], spring[0])).toBe(1);

      // 2020A < 2021S
      expect(compareTitle(autumn[0], spring[1])).toBe(-1);

      // 2021C > 2020A
      expect(compareTitle(camp[1], autumn[0])).toBe(1);
    });
  });

  describe('convertTitle', () => {
    it('should convert autumn', () => {
      expect(convertTitle('2020A')).toBe('2020秋招');
      expect(convertTitle('2020秋招')).toBe('2020A');
    });

    it('should convert spring', () => {
      expect(convertTitle('2020S')).toBe('2020春招');
      expect(convertTitle('2020春招')).toBe('2020S');
    });

    it('should convert camp', () => {
      expect(convertTitle('2020C')).toBe('2020夏令营');
      expect(convertTitle('2020夏令营')).toBe('2020C');
    });

    it('should deal with invalid inputs', () => {
      expect(convertTitle('foo')).toBe('');
      expect(convertTitle('202夏令营')).toBe('');
      expect(convertTitle('2020春')).toBe('');
    });
  });
});
