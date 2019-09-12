/*
 * @Author: GuoWei
 * @Date: 2019-09-06 19:22:29
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-10 17:40:08
 * @Description: 小米正式批笔试
 */

/**
 * @description: leetcode322题，动态规划
 * @param {coins：Array
 *  amount：Number
 * } 
 * @return: 
 */
function coinChange(coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]
}

coinChange([2, 3, 5], 7)
// console.log(solution([100, 200, 300, 500], 80))
// console.log(solution([100, 200, 300, 500], 100))
// console.log(solution([100, 200, 300, 500], 300))
// console.log(solution([100, 200, 300, 500], 1000))
// console.log(solution([100, 200, 300], 1000))
// console.log(solution([400, 200, 100, 500], 1000))
// console.log(solution([4000, 2000], 1000))
// console.log(solution([4000, 2000, 1000], 1000))

// let input = '1(2(3,4(,5)),6(7,))'
// // function solution(input) {
// //   var str = '',
// //     res = [],
// //     cur = ''
// //   for (let i = 0, len = input.length; i < len; i++) {
// //     if (input[i] === ',') {
// //       if (cur === '(' || cur === ')') {
// //         if (res.length) {
// //           str += res.pop()
// //         }
// //       } else {
// //         if (res.length) {
// //           str += res.pop()
// //         }
// //       }
// //     } else if (input[i] > '0' && input[i] <= '9') {
// //       res.push(input[i])
// //     }
// //     cur = input[i]
// //   }
// //   // console.log(res)
// //   while (res.length) {
// //     str += res.pop()
// //   }
// //   return str
// // }
// function solution(input) {
//   let str = input.replace(/[\(\)]/g, function (s) {
//     if (s === '(') {
//       return '['
//     } else {
//       return ']'
//     }
//   })
//   str = str.replace(/\,(?=\])/g, '')

//   let ary = eval(str)
//   console.log(ary)
//   return ary
// }
// let res = solution(input)
// console.log(res)


function fn(str1, str2) {
  let reg = new RegExp(`[${str2}]`,"g")
  return str1.replace(reg, '')
}
fn('They are students','aeiou')