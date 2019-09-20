// function printAry(arys) {
//   let res = []
//   while (arys.length !== 0) {
//     debugger
//     for (let i = 0; i < arys.length; i++) {
//       res.push(...arys[i].splice(0, 1))
//     }
//     arys = trun(arys)
//   }

//   function trun(arys) {
//     let temp = []
//     for (let i = 0; i < arys[0].length; i++) {
//       temp[i] = []
//     }
//     for (let j = 0; j < arys[0].length; j++) {
//       for (let i = arys.length - 1; i >= 0; i--) {
//         // debugger
//         temp[j].push(arys[i][j])
//       }
//     }
//     return temp
//   }
//   return res.join(' ')
// }

// let arys = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// //1 4 7 8 9 6 3 2 5


// console.log(printAry(arys))

function fn2(arys, target) {
  let max = 0,
    cur = 0,
    curLen = 0
  for (let i = 0; i < arys.length; i++) {
    debugger
    if (cur + arys[i] <= target) {
      cur += arys[i]
      curLen++
    } else {
      curLen = 1
      cur = arys[i]
    }
    max = Math.max(max, curLen)
  }
  return max
}

// 暴力
function fn3(arys, target) {
  let max = 0
  for (let i = 0; i < arys.length; i++) {
    let temp = arys[i]
    for (let j = i + 1; j < arys.length; j++) {
      temp += arys[j]
      if (temp > target) {
        max = Math.max(max, j - i - 1)
        break
      }
    }
  }
  return max
}

//

let arys1 = [5, 5, 1, 1, 3, 1, 2, 3],
  target = 6

console.log(fn3(arys1, target))


