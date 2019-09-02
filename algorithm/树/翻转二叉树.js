/*
 * @Author: GuoWei
 * @Date: 2019-09-01 10:16:10
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-01 13:25:03
 * @Description: 翻转二叉树（原题树是以数组形式给出的）
 */

function reversalTree(ary) {
  let len = ary.length,
    times = 1
  while (Math.pow(2, times) < len) {
    reversalSomeAry(Math.pow(2, times) - 1, Math.pow(2, times + 1) - 2, ary)
    times++
  }
  return ary
}

function reversalSomeAry(start, end, ary) {
  let temp = ary.slice(start, end + 1).reverse()
  ary.splice(start, end - start + 1, ...temp)
  return ary
}


//test
ary = [4, 2, 7, 1, 3, 6, 9]
ary2 = [4, 2, null, 1, null]

trval(ary)
trval(ary2)