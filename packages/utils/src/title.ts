export const compareTitle = (prev: string, next: string): 0 | -1 | 1 => {
  if (prev.slice(0, 4) < next.slice(0, 4)) {
    return -1;
  }
  if (prev.slice(0, 4) > next.slice(0, 4)) {
    return 1;
  }
  if (prev.slice(4) > next.slice(4)) {
    // 'S' > 'C' > 'A'
    return -1;
  }
  if (prev.slice(4) < next.slice(4)) {
    // 'S' > 'C' > 'A'
    return 1;
  }
  return 0;
};

const convertMap: Readonly<Record<string, string>> = {
  S: '春季招新',
  C: '夏令营招新',
  A: '秋季招新',
  春季招新: 'S',
  夏令营招新: 'C',
  秋季招新: 'A',
  春招: 'S',
  夏令营: 'C',
  秋招: 'A',
};

export const convertTitle = (title: string): string => {
  const suffix = convertMap[title.slice(4)];
  return suffix ? title.slice(0, 4) + suffix : '';
};
