/*
 * @Author: GuoWei
 * @Date: 2019-09-16 10:44:14
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-16 14:22:23
 * @Description: 最长回文子串
 */

 /**
  * 中心扩展法
  * @param {*String} s
  * 回文串一定是对称的，所以我们可以每次循环选择一个中心，
  * 进行左右扩展，判断左右字符是否相等即可。
  * 由于存在奇数的字符串和偶数的字符串，
  * 所以我们需要从一个字符开始扩展，
  * 或者从两个字符之间开始扩展，
  * 所以总共有 n+n-1 个中心。
  */
var longestPalindrome = function (s) {
  let start = 0,
    end = 0
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i)
    let len2 = expandAroundCenter(s, i, i + 1)
    let len = Math.max(len1, len2)
    if (len > end - start) {
      start = Math.ceil(i - (len - 1) / 2)
      end = Math.floor(i + len / 2)
    }
  }
  // debugger
  return s.slice(start, end + 1)
};

function expandAroundCenter(str, left, right) {
  while (left >= 0 && right < str.length && str.charAt(left) === str.charAt(right)) {
    left--
    right++
  }
  return right - left - 1
}

//test 
let res = longestPalindrome("cbbd")
console.log(res)