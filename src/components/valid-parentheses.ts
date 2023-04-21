export function isValid(s: string): boolean {
  let lastBkt = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") lastBkt.push(s[i]);
    else {
      const l = lastBkt.length - 1;
      if (s[i] === ")" && lastBkt[l] === "(") lastBkt.pop();
      else if (s[i] === "]" && lastBkt[l] === "[") lastBkt.pop();
      else if (s[i] === "}" && lastBkt[l] === "{") lastBkt.pop();
      else return false;
    }
  }

  return !lastBkt.length;
}

export const isValidInitial = "{[]}";
