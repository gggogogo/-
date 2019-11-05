/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // let reg = /[a-zA-Z]+\b+$/

  return s.trim().split(' ').pop().length
};
// @lc code=end
lengthOfLastWord('hello world')
console.log(lengthOfLastWord(''))
console.log(lengthOfLastWord('a  b  '))
console.log(lengthOfLastWord('a  '))
console.log(lengthOfLastWord('ahe ada'))


