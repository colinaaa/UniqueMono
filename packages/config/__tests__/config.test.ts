import { ZHANG_XIAO_LONG } from '../src/const';

describe('@uniqs/config', () => {
  it('needs tests', () => {
    expect(ZHANG_XIAO_LONG.has('mother')).toBeFalsy();
    expect(ZHANG_XIAO_LONG.size).toBe(0);
  });
});
