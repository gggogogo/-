/*
 * @Author: GuoWei
 * @Date: 2019-09-15 16:02:28
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-15 16:16:10
 * @Description: 此方法不用遍历所有节点，算法复杂度O（1）
 */

function deleteNode(head, node) {

  /**
   * 正常删除节点，需要遍历找到要删除的节点
   * 但是可以把下一个节点的值 覆盖 要删除节点的值，并改变指针
   * 只要o1复杂度
   */
  if (node.next !== null) {
    node.value = node.next.value
    node.next = node.next.next
  }
  // 链表只有一个节点
  else if (head === node) {
    head = node = null
  }
  // 删除尾节点 ，只能遍历到这个节点，再删除
  else {
    let cur = head
    while (cur.next != node) {
      cur = head.next
    }
    cur.next = null
  }
}