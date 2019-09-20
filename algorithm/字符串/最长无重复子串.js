/*
 * @Author: GuoWei
 * @Date: 2019-08-30 20:54:30
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-17 12:21:11
 * @Description: 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */
var lengthOfLongestSubstring = function (str) {
  let len = str.length,
    ans = 0,
    map = new Map()
  for (let i = 0, j = 0; j < len; j++) {
    debugger
    if (map.has(str[j])) {
      i = Math.max(map.get(str[j]), i)
    }
    ans = Math.max(ans, j - i + 1)
    map.set(str[j], j + 1)
  }
  return ans
};


lengthOfLongestSubstring("pwwkew")

