import {
  isNumber,
  isString,
  isArray,
  isDate,
  isMap,
  isObject,
  isSet,
  EMPTY_OBJ,
  EMPTY_ARR,
  NOOP,
  hasOwn,
} from '../src/utils';

describe('@uniqs/utils', () => {
  const str = '123';
  const num = 123;
  const bool = false;
  const obj = {
    foo: 'unique studio',
  };
  const func = () => 1;
  const sym = Symbol.for('number');
  const bigint = BigInt(123);
  const arr = [str, num];
  const date = new Date();
  const map = new Map();
  const set = new Set();

  describe('Noop', () => {
    NOOP();
  });

  describe('hasOwn', () => {
    it('should own', () => {
      expect(hasOwn(obj, 'foo')).toBe(true);
      if (hasOwn(obj, 'foo')) {
        // can infer foo in obj
        // eslint-disable-next-line jest/no-conditional-expect
        expect(obj.foo).toBe('unique studio');
      }
      expect(hasOwn({}, '')).toBe(false);
      expect(hasOwn({}, 'foo')).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('should can infer number', () => {
      expect(isNumber(num)).toBe(true);
    });

    it('should not be number', () => {
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber(str)).toBe(false);
      expect(isNumber(bool)).toBe(false);
      expect(isNumber(obj)).toBe(false);
      expect(isNumber(func)).toBe(false);
      expect(isNumber(sym)).toBe(false);
      expect(isNumber(bigint)).toBe(false);
      expect(isNumber(arr)).toBe(false);
      expect(isNumber(date)).toBe(false);
      expect(isNumber(map)).toBe(false);
      expect(isNumber(set)).toBe(false);
    });
  });

  describe('isString', () => {
    it('should can infer string', () => {
      expect(isString(str)).toBe(true);
    });

    it('should not be string', () => {
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString(num)).toBe(false);
      expect(isString(bool)).toBe(false);
      expect(isString(obj)).toBe(false);
      expect(isString(func)).toBe(false);
      expect(isString(sym)).toBe(false);
      expect(isString(bigint)).toBe(false);
      expect(isString(arr)).toBe(false);
      expect(isString(date)).toBe(false);
      expect(isString(map)).toBe(false);
      expect(isString(set)).toBe(false);
    });
  });
  describe('isObject', () => {
    it('should can infer object', () => {
      expect(isObject(EMPTY_OBJ)).toBe(true);
      expect(isObject(obj)).toBe(true);
      expect(isObject(arr)).toBe(true);
      expect(isObject(date)).toBe(true);
      expect(isObject(map)).toBe(true);
      expect(isObject(set)).toBe(true);
    });

    it('should not be object', () => {
      expect(isObject(null)).toBe(false);
      expect(isObject(undefined)).toBe(false);
      expect(isObject(num)).toBe(false);
      expect(isObject(bool)).toBe(false);
      expect(isObject(str)).toBe(false);
      expect(isObject(func)).toBe(false);
      expect(isObject(sym)).toBe(false);
      expect(isObject(bigint)).toBe(false);
    });
  });

  describe('isArray', () => {
    it('should can infer array', () => {
      expect(isArray(arr)).toBe(true);
      expect(isArray(EMPTY_ARR)).toBe(true);
    });

    it('should not be array', () => {
      expect(isArray(null)).toBe(false);
      expect(isArray(undefined)).toBe(false);
      expect(isArray(num)).toBe(false);
      expect(isArray(bool)).toBe(false);
      expect(isArray(str)).toBe(false);
      expect(isArray(func)).toBe(false);
      expect(isArray(sym)).toBe(false);
      expect(isArray(bigint)).toBe(false);
      expect(isArray(obj)).toBe(false);
      expect(isArray(date)).toBe(false);
      expect(isArray(map)).toBe(false);
      expect(isArray(set)).toBe(false);
    });
  });

  describe('isDate', () => {
    it('should can infer date', () => {
      expect(isDate(date)).toBe(true);
    });

    it('should not be date', () => {
      expect(isDate(null)).toBe(false);
      expect(isDate(undefined)).toBe(false);
      expect(isDate(num)).toBe(false);
      expect(isDate(bool)).toBe(false);
      expect(isDate(str)).toBe(false);
      expect(isDate(func)).toBe(false);
      expect(isDate(sym)).toBe(false);
      expect(isDate(bigint)).toBe(false);
      expect(isDate(obj)).toBe(false);
      expect(isDate(arr)).toBe(false);
      expect(isDate(map)).toBe(false);
      expect(isDate(set)).toBe(false);
    });
  });

  describe('isMap', () => {
    it('should can infer map', () => {
      expect(isMap(map)).toBe(true);
    });

    it('should not be map', () => {
      expect(isMap(null)).toBe(false);
      expect(isMap(undefined)).toBe(false);
      expect(isMap(num)).toBe(false);
      expect(isMap(bool)).toBe(false);
      expect(isMap(str)).toBe(false);
      expect(isMap(func)).toBe(false);
      expect(isMap(sym)).toBe(false);
      expect(isMap(bigint)).toBe(false);
      expect(isMap(obj)).toBe(false);
      expect(isMap(arr)).toBe(false);
      expect(isMap(date)).toBe(false);
      expect(isMap(set)).toBe(false);
    });
  });

  describe('isSet', () => {
    it('should can infer set', () => {
      expect(isSet(set)).toBe(true);
    });

    it('should not be set', () => {
      expect(isSet(null)).toBe(false);
      expect(isSet(undefined)).toBe(false);
      expect(isSet(num)).toBe(false);
      expect(isSet(bool)).toBe(false);
      expect(isSet(str)).toBe(false);
      expect(isSet(func)).toBe(false);
      expect(isSet(sym)).toBe(false);
      expect(isSet(bigint)).toBe(false);
      expect(isSet(obj)).toBe(false);
      expect(isSet(arr)).toBe(false);
      expect(isSet(date)).toBe(false);
      expect(isSet(map)).toBe(false);
    });
  });
});
