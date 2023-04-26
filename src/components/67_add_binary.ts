export const addBinaryParse = (s) => {
  const elements = s.split(";");
  return addBinary(elements[0], elements[1]);
};

export function addBinary(a: string, b: string): string {
  let add = 0;
  const result = [];
  const count = a.length > b.length ? a.length : b.length;
  const arr1 = a.split("").reverse();
  const arr2 = b.split("").reverse();

  for (let i = 0; i < count; i++) {
    let tmp = (+arr1[i] | 0) + (+arr2[i] | 0);
    if (tmp === 2) {
      tmp = add;
      add = 1;
    } else {
      tmp += add;
      if (tmp === 2) {
        add = 1;
        tmp = 0;
      } else add = 0;
    }
    result.push(tmp);
  }
  if (add) result.push(1);

  return result.reverse().join("");
}

export const addBinaryInitial = "1010;1011";
