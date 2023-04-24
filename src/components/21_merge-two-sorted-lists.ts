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
  if (!list1) return list2;
  if (!list2) return list1;

  let [head, tmp] = [null, null];

  if (list1.val < list2.val) {
    tmp = head = new ListNode(list1.val);
    list1 = list1.next;
  } else {
    tmp = head = new ListNode(list2.val);
    list2 = list2.next;
  }

  while (list1 && list2) {
    if (list1.val >= list2.val) {
      tmp.next = new ListNode(list2.val);
      list2 = list2.next;
    } else {
      tmp.next = new ListNode(list1.val);
      list1 = list1.next;
    }
    tmp = tmp.next;
  }

  while (list1) {
    tmp.next = new ListNode(list1.val);
    list1 = list1.next;
    tmp = tmp.next;
  }

  while (list2) {
    tmp.next = new ListNode(list2.val);
    list2 = list2.next;
    tmp = tmp.next;
  }

  return head;
}

export const mergeTwoListsInitial = "1,2,4;1,2,4";
