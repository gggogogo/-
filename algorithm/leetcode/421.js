/*
 * @Author: GuoWei
 * @Date: 2019-09-23 20:29:45
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-23 21:03:24
 * @Description: 421. 数组中两个数的最大异或值
 * 给定一个非空数组，数组中元素为 a0, a1, a2, … , an-1，其中 0 ≤ ai < 231 。
 * 找到 ai 和aj 最大的异或 (XOR) 运算结果，其中0 ≤ i,  j < n 。
 * 你能在O(n)的时间解决这个问题吗？
 * 示例:
 * 输入: [3, 10, 5, 25, 2, 8]
 * 输出: 28
 * 解释: 最大的结果是 5 ^ 25 = 28.
 */

function findMaximumXOR(nums) {
  let res = 0
  let mask = 0
  for (let i = 31; i >= 0; i--) {
    mask = mask | (1 << i)
    let set = new Set()
    // 找最高位1
    debugger
    for (let num of nums) {
      set.add(num & mask)
    }
    let temp = res | (1 << i)

    for (let item of set) {
      // debugger
      if (set.has(item ^ temp)) {
        res = temp
        break
      }
    }
  }
  return res
}
findMaximumXOR([3, 10, 5, 25, 2, 8])

