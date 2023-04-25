export function plusOne(digits: number[]): number[] {
  let add = 0;
  digits = digits.reverse().map((el, i) => {
    if (!i || add) {
      el = el + 1;
      if (el >= 10) {
        add = 1;
        el = el % 10;
      } else add = 0;
    }
    return el;
  });
  if (add) digits.push(1);

  return digits.reverse();
}

export const plusOneInitial = [9, 9, 9];
