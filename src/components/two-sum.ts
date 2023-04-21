export const twoSumParse = (s: string) => {
  const values = s.split(";");
  const nums = values[0].split(",").map((string) => parseInt(string));
  const target = parseInt(values[1]);
  return twoSum(nums, target);
};

export function twoSum(nums: number[], target: number): number[] {
  const hash: number[][] = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const f = hash.find((el) => el[0] === target - nums[i]);
    if (!f) hash.push([nums[i], i]);
    else {
      result.push(f[1]);
      result.push(i);
      break;
    }
  }
  return result;
}

export const twoSumInitial = "2,11,7,15;9";
