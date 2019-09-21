var n = readline().split(' ');
var ans = 0;
var ary = readline().split(' ')

ans = f4(ary, parseInt(n[1]))

ans.forEach(item => {
  print(item)
})



// function f4(ary, times) {
//   let res = []

//   for (let i = 0; i < times; i++) {
//     let min = Number.MAX_SAFE_INTEGER
//     for (let val of ary) {
//       if (val) {
//         min = Math.min(min, val)
//       }
//     }
//     debugger
//     ary = ary.map(item => {
//       if (item) {
//         return item - min
//       } else {
//         return 0
//       }
//     })

//     if (min !== Number.MAX_SAFE_INTEGER) {
//       res.push(min)
//     } else {
//       res.push(0)
//     }
//   }
//   return res
// }

// let res = f4([5, 8, 10, 3, 6, 10, 8], 5)
// console.log(res)


function f5(ary1, ary2) {
  let res = 0
  for (let i = 0; i < ary1.length; i++) {
    for (let j = 0; j < ary2.length; j++) {
      // debugger
      res = res ^ (ary1[i] + ary2[j])
      // res.push(ary1[i] * ary2[j])
    }
  }
  return res
}


let ary1 = [1, 2, 1, 0, 0],
  ary2 = [1, 2, 3, 0, 0]

console.log(f5(ary1, ary2))



let arr = [
  { key: 'aa' },
  { key: 'ac' },
  { key: 'af' },
  { key: 'ad' },
  { key: 'ab' }
]
['c', 'cs', 'ca'].sort()


