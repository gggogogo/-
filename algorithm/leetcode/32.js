/*
 * @Author: GuoWei
 * @Date: 2019-09-23 21:03:14
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-23 21:27:55
 * @Description: 
 */

 // 使用栈
var longestValidParentheses = function (s) {
  let stack = [-1],
    max = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    }
    else {
      stack.pop()
      if (stack.length === 0) { // 保存当前子串起始的位置
        stack.push(i)
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }
  return max
}

