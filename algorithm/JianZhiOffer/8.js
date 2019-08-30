/*
 * @Author: GuoWei
 * @LastEditors: GuoWei
 * @Description:  给定二叉树的子节点，寻找中序遍历的下一个节点
 * @Date: 2019-03-30 20:49:10
 * @LastEditTime: 2019-04-01 20:25:49
 */

function inOrderNextNode(pNode) {
    if (!pNode) {
        return;
    }
    if (pNode.right) {
        pNode = pNode.right;
        while (pNode.left) {
            pNode = pNode.left;
        }
        return pNode;
    }
    while (pNode.parent){
        if(pNode.parent.left == pNode){
            return pNode.parent;
        }
        pNode = pNode.parent;
    }
}






