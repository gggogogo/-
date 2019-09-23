/*
 * @Author: GuoWei
 * @Date: 2019-09-23 21:30:51
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-23 21:39:11
 * @Description: leetcode 21. 合并两个有序链表
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
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