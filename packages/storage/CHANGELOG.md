# @uniqs/storage

## 0.1.1

### Patch Changes

- [#8](https://github.com/colinaaa/UniqueMono/pull/8) [`5c856b4`](https://github.com/colinaaa/UniqueMono/commit/5c856b47c0c452420fea613cf403fb039a67882e) Thanks [@colinaaa](https://github.com/colinaaa)! - Add test cases to `@uniqs/storage`

  Also update README badges

## 0.1.0

### Minor Changes

- [#6](https://github.com/colinaaa/UniqueMono/pull/6) [`4f62ed9`](https://github.com/colinaaa/UniqueMono/commit/4f62ed9f242e6ce2a59e4ea2becc096f69f7df0f) Thanks [@colinaaa](https://github.com/colinaaa)! - Initial release of storage package.

  - Implements a `typedStorage<T>` that can infer type according to predefined
    schema.
  - Using indexedDB for non-string value, localStorage for string value.
