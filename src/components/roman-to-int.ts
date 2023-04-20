function romanToInt(s: string): number {
  const initial: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const digits = Object.keys(initial);
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (digits.indexOf(s[i]) < digits.indexOf(s[i + 1]))
      result -= initial[s[i]];
    else result += initial[s[i]];
  }

  return result;
}

export default romanToInt;
