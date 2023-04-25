export const strStrParse = (s) => {
  const elements = s.split(";");
  return strStr(elements[0], elements[1]);
};

export function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

export const strStrInitial = "sadbutsad;sad";
