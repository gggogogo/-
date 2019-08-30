/*
 * @Author: GuoWei
 * @LastEditors: GuoWei
 * @Description: 
 * @Date: 2019-03-17 20:47:27
 * @LastEditTime: 2019-03-17 21:24:58
 */

function reConstructBinaryTree(pre, vin) {
    let result = null;
    if (pre.length === 1) {
        result = {
            val: pre[0],
            left: null,
            right: null
        };
    } else if(pre.length>1){
        let boundary = vin.indexOf(pre[0]);
        let leftVin = vin.slice(0, boundary);
        let rightVin = vin.slice(boundary + 1);
        let leftPre = pre.slice(1, boundary + 1);
        let rightPre = pre.slice(boundary + 1);
        result = {
            val: pre[0],
            left: reConstructBinaryTree(leftPre, leftVin),
            right: reConstructBinaryTree(rightPre, rightVin)
        };
    }
    return result;
}
ary1 = [1, 2, 4, 7, 3, 5, 6, 8];
ary2 = [4, 7, 2, 1, 5, 3, 8, 6];
console.log(reConstructBinaryTree(ary1, ary2));