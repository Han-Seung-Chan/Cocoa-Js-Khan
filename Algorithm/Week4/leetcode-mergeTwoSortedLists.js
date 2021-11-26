class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
const list1_3 = new ListNode(4, null);
const list1_2 = new ListNode(2, list1_3);
const list1_1 = new ListNode(1, list1_2);
const list1 = list1_1;
const list2_3 = new ListNode(4, null);
const list2_2 = new ListNode(3, list2_3);
const list2_1 = new ListNode(1, list2_2);
const list2 = list2_1;

const mergeTwoLists = function (list1, list2) {
  const head = new ListNode();
  let current = head;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  if (list1) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return head.next;
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
