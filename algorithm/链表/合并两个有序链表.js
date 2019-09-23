/*
 * @Author: GuoWei
 * @Date: 2019-09-23 21:30:51
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-23 21:36:31
 * @Description: 
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(-1)
  let prev = head
  while (l1 != null & l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next
  }
  prev.next = l1 == null ? l2 : l1;
  return head.next
};