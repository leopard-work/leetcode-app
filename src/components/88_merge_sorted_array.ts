export const mergeParse = (s: string) => {
  const values = s.split(";");
  return merge(
    values[0].split(",").map((el) => +el),
    +values[1],
    values[2].split(",").map((el) => +el),
    +values[3]
  );
};

export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  for (let i = m - 1, j = n - 1, k = m + n - 1; j >= 0; --k) {
    nums1[k] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }
  return nums1;
}

export const mergeInitial = "1,2,3,0,0,0;3;2,5,6;3";
