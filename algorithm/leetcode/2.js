/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0),
    cur = head,
    isCarry = 0
  while (l1 != null || l2 != null || isCarry) {
    // debugger
    if (!l1) l1 = new ListNode(0)
    if (!l2) l2 = new ListNode(0)
    if (l1.val + l2.val + isCarry > 9) {
      cur.next = new ListNode((l1.val + l2.val + isCarry) % 10)
      isCarry = 1
    } else {
      cur.next = new ListNode(l1.val + l2.val + isCarry)
      isCarry = 0
    }
    l1 = l1.next
    l2 = l2.next
    cur = cur.next
  }
  return head.next
};
l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}
l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
}

addTwoNumbers(l1, l2)