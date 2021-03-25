import { clear, get, set } from 'idb-keyval';

// keys that are string
type StringKeyOf<T> = Extract<keyof T, string>;

// keys with string value
type StringValueKeysOf<T> = {
  [K in keyof T]-?: T[K] extends string | undefined ? K : never;
}[StringKeyOf<T>];

// keys with non-string value
type NonStringValueKeysOf<T> = {
  [K in keyof T]-?: T[K] extends string | undefined ? never : K;
}[StringKeyOf<T>];

/**
 * @example
 * interface Data {
 *    a: string;
 *    b: string;
 *    c: number;
 *    candidate: Record<string, number>;
 * }
 *
 * const storage = new TypedStorage<Data>();
 * const num = storage.get('c'); // infer number
 * const b = storage.getSync('a'); // infer string
 */
export class TypedStorage<T> {
  private readonly localStorage: Storage;

  constructor(storage?: Storage) {
    this.localStorage = storage ?? globalThis.localStorage;
  }

  get length(): number {
    return this.localStorage.length;
  }

  get<K extends NonStringValueKeysOf<T>>(key: K): Promise<T[K] | undefined> {
    return get<T[K]>(key);
  }

  getSync<K extends StringValueKeysOf<T>>(key: K): string | null {
    return this.localStorage.getItem(key);
  }

  set<K extends NonStringValueKeysOf<T>>(key: K, value: T[K]): Promise<void> {
    return set(key, value);
  }

  setSync<K extends StringValueKeysOf<T>>(key: K, value: string): void {
    this.localStorage.setItem(key, value);
  }

  clearSync(): void {
    const token = this.localStorage.getItem('token');
    this.localStorage.clear();
    token && this.localStorage.setItem('token', token);
  }

  clear(): void {
    void clear();
  }

  clearAll(): void {
    this.clear();
    this.clearSync();
  }

  key(index: number): StringValueKeysOf<T> | null {
    return this.localStorage.key(index) as StringValueKeysOf<T> | null;
  }
}

export default TypedStorage;
