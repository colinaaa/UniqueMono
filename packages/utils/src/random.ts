export const randomRange = (min: number, max: number): number =>
  // '~~' (double NOT bitwise) operator is faster than Math.floor() in JavaScript
  ~~(Math.random() * (max - min) + min);
