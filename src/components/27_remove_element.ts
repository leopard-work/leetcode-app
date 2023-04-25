export const removeElementParse = (s) => {
  const elements = s.split(";");
  const arr = elements[0].split(",").map((el) => (el = +el));
  return removeElement(arr, +elements[1]);
};

export function removeElement(nums: number[], val: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
}

export const removeElementInitial = "3,2,2,3;3";
