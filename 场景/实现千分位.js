/*
 * @Author: GuoWei
 * @Date: 2019-09-01 11:33:38
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-01 16:31:12
 * @Description: 
 */
// function parseToMoney(num) {
//   let [integer, decimal] = String.prototype.split.call(num, '.');
//   // debugger
//   integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
//   return integer + '.' + (decimal ? decimal : '');
// }
// parseToMoney(123331321312.1231)


var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (line) {
  let list = line.split(' ').map(item => Number(item))
  console.log(fn(list[0], list[1], list[2]))
});
function fn(n, m, k) {
  let res = [],
    min = Math.ceil(Math.sqrt(k))
  if (k > n * m) return -1
  for (let i = n; i > n - min && i > 0; i--) {
    for (let j = m; j > m - min && j > 0; j--) {
      res.push(i * j)
    }
  }
  res.sort((a, b) => b - a)
  // console.log(res)
  return res[k - 1]
}
// console.log(fn(3, 33, 1))