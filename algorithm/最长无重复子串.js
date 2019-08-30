/*
 * @Author: GuoWei
 * @Date: 2019-08-30 20:54:30
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-08-30 20:58:42
 * @Description: 
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