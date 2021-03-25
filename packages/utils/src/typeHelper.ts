// keys that are string
type StringKeyOf<T> = Extract<keyof T, string>;

// keys with string value
export type StringValueKeysOf<T> = {
  [K in keyof T]-?: T[K] extends string | undefined ? K : never;
}[StringKeyOf<T>];

// keys with non-string value
export type NonStringValueKeysOf<T> = {
  [K in keyof T]-?: T[K] extends string | undefined ? never : K;
}[StringKeyOf<T>];
