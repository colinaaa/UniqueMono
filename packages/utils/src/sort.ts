export const stableSort = <T>(array: T[], comparator: (a: T, b: T) => number): T[] => {
  return array
    .map<[T, number]>((el, index) => [el, index])
    .sort(([a, i], [b, j]) => {
      const order = comparator(a, b);
      if (order !== 0) {
        // respect comparator first
        return order;
      }
      // if comp returns equal, use index for stable
      return i - j;
    })
    .map<T>(([elem]) => elem);
};
