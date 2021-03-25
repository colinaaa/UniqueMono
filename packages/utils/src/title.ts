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

export const convertTitle = (title: string): string => {
  const last = title.slice(4);
  const abbr = ['S', 'C', 'A'];
  const full = ['春招', '夏令营', '秋招'];
  const i = abbr.indexOf(last);
  if (i >= 0) {
    return title.slice(0, 4) + full[i];
  }
  const j = full.indexOf(last);
  if (j >= 0) {
    return title.slice(0, 4) + abbr[j];
  }
  return '';
};
