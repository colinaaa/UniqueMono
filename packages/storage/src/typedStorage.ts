import { clear, get, set } from 'idb-keyval';

// keys that has string value
type StringValueKeysOf<T> = {
  [Key in keyof T]-?: T[Key] extends string | undefined ? Key : never;
}[keyof T];

// keys that has't string value
type NonStringValueKeysOf<T> = {
  [Key in keyof T]-?: T[Key] extends string | undefined ? never : Key;
}[keyof T];

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
    // TODO: remove as string
    return get<T[K]>(key as string);
  }

  getSync<K extends StringValueKeysOf<T>>(key: K): string | null {
    // TODO: remove as string
    return this.localStorage.getItem(key as string);
  }

  set<K extends NonStringValueKeysOf<T>>(key: K, value: T[K]): Promise<void> {
    // TODO: remove as string
    return set(key as string, value);
  }

  setSync<K extends StringValueKeysOf<T>>(key: K, value: string): void {
    // TODO: remove as string
    this.localStorage.setItem(key as string, value);
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
