// function fn2(row, col, subRow, subCol) {
//   let ary = [],
//     res = 0
//   if (subRow > row || subCol > col) return
//   for (let i = 1; i <= row - subRow + 1; i++) {
//     for (let j = 1; j <= col - subCol + 1; j++) {
//       ary = []
//       for (let m = 0; m < subRow; m++) {
//         for (let n = 0; n < subCol; n++) {
//           ary.push((i + m) * (j + n) % 10)

//         }
//       }
//       // console.log(ary)
//       res += Math.max(...ary)
//     }
//   }
//   // debugger
//   return res
// }
// console.log(

//   fn(4, 5, 3, 3)
// )


// var param = []
// param = read_line().split(' ').map(item => parseInt(item))
// let c = fn(param[0], param[1], param[2], param[3])


// print(c);



function f1(ary, delAry) {
  let ary2 = ary.slice(),
    res = []
  delAry.forEach(item => {

    ary2.splice(item - 1, 1, '')
    res.push(getMaxSub(ary2))
  })
  return res.slice(0,res.length-1).join(' ')
}
function getMaxSub(ary) {
  let max = 0,
    cur = 0
  for (let i = 0; i < ary.length; i++) {
    debugger
    if (ary[i] !== '') {
      cur += ary[i]
      max = Math.max(max, cur)
    } else {

      cur = 0
    }
  }
  return max
}
let ary1 = [2, 3, 1, 2, 2]
let ary2 = [3, 1, 5, 2, 4]

console.log(f1(ary1, ary2))