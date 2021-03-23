export type { NonStringValueKeysOf, StringValueKeysOf } from './typeHelper';

export type UnknownObject = Record<string | symbol, unknown>;

export const EMPTY_OBJ: { readonly [key: string]: unknown } = Object.freeze({});
export const EMPTY_ARR = Object.freeze([]);
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const NOOP = (): void => {};

export const isString = (v: unknown): v is string => typeof v === 'string';
export const isNumber = (v: unknown): v is number => typeof v === 'number';
export const isObject = (val: unknown): val is UnknownObject => val !== null && typeof val === 'object';
export const isDate = (val: unknown): val is Date => val instanceof Date;
export const isArray = Array.isArray;
export const isMap = (val: unknown): val is Map<unknown, unknown> =>
  Object.prototype.toString.call(val) === '[object Map]';
export const isSet = (val: unknown): val is Set<unknown> => Object.prototype.toString.call(val) === '[object Set]';

export const hasOwn = (val: UnknownObject, key: string | symbol): key is keyof typeof val =>
  Object.prototype.hasOwnProperty.call(val, key);
