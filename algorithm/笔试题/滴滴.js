// var cmd = require('node-stdio')
// var a, b;
// var solveMeFirst = (a, b) => a + b;
// while ((a = cmd.read_line()) != null && (b = cmd.read_line()) != null) {
//   a = a.split(' ')
//   let c = fn1(b, a[1])
//   cmd.print(c);
// }

function fn1(colors, dyes) {
  let str = 'abcdefghijklmnopqrstuvwxyz'
  let min = Number.MAX_SAFE_INTEGER
  dyes = parseInt(dyes)
  for (let i = 0; i < str.length; i++) {
    let temp = colors.split(str[i]),
      cur = 0
    for (let j in temp) {
      cur += Math.ceil(temp[j].length / dyes)
    }
    min = Math.min(min, cur)
  }
  return min
}

console.log(fn1('acbcergcba', 3))


function fn2(len, resLen, arys) {
  let res = [[]]

}