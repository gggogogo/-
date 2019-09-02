// // function howManyDaysAreThereInFebruary(year) {
// //   // TODO
// //   return year % 4 === 0 ? 29 : 28
// // }


// // function flatten(arr) {
// //   // TODO
// //   let res = []
// //   for (let i = 0; i < arr.length; i++) {
// //     if (isArray(arr[i])) {
// //       res.concat(flatten(arr))
// //     }
// //     else {
// //       res.push(arr[i])
// //     }
// //   }
// //   return res
// // }


// function open(arr1, arr2) {
//   let o1 = j1 = o2 = j2 = 0
//   arr1.forEach(item => {

//     item % 2 === 0 ? o1++ : j1++
//   })
//   arr2.forEach(item => {
//     item % 2 === 0 ? o2++ : j2++
//   })
//   return Math.min(o1, j2) + Math.min(o2, j1)
// }

// var readline = require('readline');

// rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// process.stdin.resume();
// var input = '';
// process.stdin.setEncoding('ascii');
// process.stdin.on('data', function (data) {
//   input = data;
// })
// process.stdin.on('end', function () {
//   var input_array = input.trim().split('\n');
//   input_array.shift()
//   // console.log(input_array)
//   degreeOfSatisfaction(input_array)
// });
// var readline = require('readline');

// rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// var countLine = -1;
// var deadline = 0;
// var inputArr = [];

// rl.on('line', function (line) {
//   if (deadline === 0) {
//     deadline = +line.trim()
//   } else {
//     inputArr.push(line.trim());
//   }
//   countLine++;
//   if (countLine === deadline) {
//     // console.log(inputArr)
//     console.log(degreeOfSatisfaction(inputArr));
//     rl.close();
//   }
// });
// rl.on('close', function () {
//   process.exit(0);
// })
function degreeOfSatisfaction(arr) {
  arr = arr.map(item => item.split(' ').map(item=>+item))
  console.log(arr)
  let temp = [],
    res = 0,
    len = arr.length
  arr.forEach(item => temp.push({ diff: item[0] - item[1], a: item[0], b: item[1] }))
  temp.sort((a, b) => b.diff - a.diff)

  temp.forEach((item, index) => {
    let a = item.a,
      b = item.b
    res += b * len - a + (a - b) * (index + 1)
  })
  console.log(res)
  return res
}
let arr1 = [[1, 1], [2, 2]]
let arr2 = [[1, 3], [1, 1], [4, 1]]
// degreeOfSatisfaction(arr1)
degreeOfSatisfaction(['1 3', '1 1','4 1'])


function paimai(auctionAry, queryAry) {
  let res = [],
    auctionAryList = auctionAry.map(item => item.split(' ')),
    queryAryList = queryAry.map(item => item.split(' '))    // [[1,1],[1,2],[2,1,2]]
  debugger
  queryAryList.forEach(item => {
    let temp = auctionAryList.slice()
    item.shift()
    temp = deleteSomeAry(temp, item)
    // console.log(temp)
    res.push(temp)
  })
  // console.log(res)
  res.forEach(item => {
    // console.log(item)
    if (item.length) {
      console.log(item[0].join(' '))
    } else {
      console.log('0 0')
    }
  })
  return res
}
function deleteSomeAry(ary, deleteList) {
  let times = 0,
    len = deleteList.length
  deleteList.sort()
  for (let i = 0; i < len; i++) {
    ary.splice(deleteList[i] - times - 1, 1)
    times++
  }
  // console.log(ary)
  return ary
}
let auctionAry = ['1 1', '2 2'],
  queryAry = ['1 1', '1 2', '2 1 2']
paimai(auctionAry, queryAry)
deleteSomeAry([1, 2, 3, 4], [1, 3])