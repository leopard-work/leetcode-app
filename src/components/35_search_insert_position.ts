export const searchInsertParse = (s) => {
  const elements = s.split(";");
  const arr = elements[0].split(",").map((el) => (el = +el));
  return searchInsert(arr, +elements[1]);
};

export function searchInsert(nums: number[], target: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
    if (target > nums[i]) count++;
  }
  return count;
}

export const searchInsertInitial = "1,3,5,6;5";
