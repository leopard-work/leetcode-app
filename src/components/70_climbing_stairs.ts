export function climbStairs(n: number): number {
  const temp = [1, 1];
  if (n <= 1) return 1;
  for (let i = 2; i <= n; i++) {
    temp[i] = temp[i - 1] + temp[i - 2];
  }
  return temp[n];
}

export const climbStairsInitial = 3;
