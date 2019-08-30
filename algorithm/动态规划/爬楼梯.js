/*
 * @Author: GuoWei
 * @Date: 2019-08-29 20:34:56
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-08-29 21:43:09
 * @Description: leetcode 70
 */
var climbStairs = function (n) {
  let first = 1,
    second = 2
  if (n === 1 || n === 2) return n
  for (let i = 3; i <= n; i++) {
    let third = first + second
    first = second
    second = third
  }
  return second
};
