import ListNode from "../utils/list-node";

export function mergeTwoListsParse(s: string) {
  const values = s.split(";");
  const arr1 = values[0].split(",").map((string) => parseInt(string));
  const arr2 = values[1].split(",").map((string) => parseInt(string));

  const node1 = arr1.reduceRight((acc: ListNode | null, cur) => {
    acc = new ListNode(cur as number, acc);
    return acc;
  }, null);
  const node2 = arr2.reduceRight((acc: ListNode | null, cur) => {
    acc = new ListNode(cur as number, acc);
    return acc;
  }, null);

  return mergeTwoLists(node1, node2);
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  return null;
}

export const mergeTwoListsInitial = "1,2,4;1,3,4";
