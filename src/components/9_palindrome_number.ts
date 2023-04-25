export function isPalindrome(x: number): boolean {
  let rev = 0;
  let tmp = x;

  while (tmp > 0) {
    rev = rev * 10 + (tmp % 10);
    tmp = Math.floor(tmp / 10);
  }

  return rev === x;
}

export const isPalindromeInitial = 11;
