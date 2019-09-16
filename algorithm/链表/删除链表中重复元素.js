/*
 * @Author: GuoWei
 * @Date: 2019-09-15 16:20:03
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-15 16:50:54
 * @Description: 
 */
function deleteDuplication(pHead) {
  if (!pHead || !pHead.next) {
    return pHead;
  }
  else if (pHead.val === pHead.next.val) {
    let tempNode = pHead.next;
    while (tempNode && pHead.val === tempNode.val) {
      tempNode = tempNode.next;
    }
    return deleteDuplication(tempNode);
  }
  else {
    pHead.next = deleteDuplication(pHead.next)
    return pHead;
  }
}

//test
function ListNode(x) {
  this.val = x;
  this.next = null;
}
let head = new ListNode(1)
let list2 = new ListNode(2)
let list3 = new ListNode(2)
let list4 = new ListNode(3)
let list5 = new ListNode(3)
let list6 = new ListNode(4)
let list7 = new ListNode(4)
let list8 = new ListNode(5)
let list9 = new ListNode(6)
head.next = list2
list2.next = list3
list3.next = list4
list4.next = list5
list5.next = list6
list6.next = list7
list7.next = list8
list8.next = list9

deleteDuplication(head)