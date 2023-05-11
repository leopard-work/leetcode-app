import ListNode from "../utils/list-node";

export function deleteDuplicatesParse(s: string) {
  const arr = s.split(",").map((string) => parseInt(string));

  const node = arr.reduceRight((acc: ListNode | null, cur) => {
    acc = new ListNode(cur as number, acc);
    return acc;
  }, null);

  return deleteDuplicates(node);
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val !== cur.next.val) cur = cur.next;
    else cur.next = cur.next.next;
  }
  return head;
}

export const deleteDuplicatesInitial = "1,1,2,3,3";
