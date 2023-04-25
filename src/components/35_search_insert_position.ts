export const searchInsertParse = (s) => {
  const elements = s.split(";");
  const arr = elements[0].split(",").map((el) => (el = +el));
  return searchInsert(arr, +elements[1]);
};

export function searchInsert(nums: number[], target: number): number {
  return 0;
}

export const searchInsertInitial = "1,3,5,6;5";
