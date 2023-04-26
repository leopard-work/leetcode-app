export function mySqrt(x: number): number {
  let [start, end] = [0, x];

  if (x <= 1) return x;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === x) return mid;
    mid * mid > x ? (end = mid) : (start = mid + 1);
  }

  return start - 1;
}

export const mySqrtInitial = 8;
