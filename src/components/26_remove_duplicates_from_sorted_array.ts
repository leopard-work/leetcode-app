export function removeDuplicates(nums: number[]): number {
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
}

export const removeDuplicatesInitial = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
