export function lengthOfLastWord(s: string): number {
  const arr = s.trim().split(/\s+/);
  return arr[arr.length - 1].length;
}

export const lengthOfLastWordInitial = "   fly me   to   the moon  ";
