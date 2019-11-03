/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const Roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let res = 0
  let news = s.replace(/(IV)|(IX)|(XL)|(XC)|(CD)|(CM)/g, function (word) {
    switch (word) {
      case 'IV':
        return 'IIII';
      case 'IX':
        return 'VIIII';
      case 'XL':
        return 'XXXX';
      case 'XC':
        return 'LXXXX';
      case 'CD':
        return 'CCCC';
      case 'CM':
        return 'DCCCC';
    }
  })
  for (let i of news) {
    res += Roman[`${i}`]
  }
  // console.log(res)
  return res
};
// @lc code=end
romanToInt('MCMXCIV')


