import { getMidnight } from '../src/time';

describe('@uniqs/utils/time', () => {
  describe('getMidnight', () => {
    it('should return mid night', () => {
      const date = getMidnight(new Date());
      expect(date).toBeInstanceOf(Date);
      expect(date.getHours()).toBe(0);
      expect(date.getMinutes()).toBe(0);
      expect(date.getSeconds()).toBe(0);
      expect(date.getMilliseconds()).toBe(0);
    });

    it('should receive both number and Date', () => {
      const t = getMidnight(new Date());
      const tt = getMidnight(3892);
      expect(t).toBeInstanceOf(Date);
      expect(tt).toBeInstanceOf(Date);
    });

    it('should not throw error on invalid input', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(getMidnight('foo')).toBeInstanceOf(Date);
      expect(getMidnight(11111111111111111111111111111111111).toString()).toBe('Invalid Date');
    });
  });
});
