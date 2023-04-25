export function longestCommonPrefix(strs: string[]): string {
  return strs.reduce(function (acc, cur) {
    let temp = [];
    for (let i = 0; i < acc.length; i++) {
      if (acc[i] === cur[i]) {
        temp[i] = acc[i];
      } else break;
    }
    acc = temp.join("");
    return acc;
  });
}

export const longestCommonPrefixInitial = ["flower", "flow", "flight"];
