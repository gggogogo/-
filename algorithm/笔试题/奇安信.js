function luncky(n) {
  // 
  // let count = 0
  // while (n > 0) {
  //   if (n % 5 === 0) {
  //     return count + n / 5
  //   }
  //   // debugger
  //   count += parseInt(n / 5)
  //   n -= parseInt(n / 5)
  //   if (n <= 5) {
  //     return count + ary[n]
  //   }
  // }

  // return count

  let times = 1,
    ary = [],
    count = 0,
    res = [0, 1, 2, 2, 4, 1]
  for (let i = 1; i <= n; i++) {
    ary.push(i)
  }
  let i = 0
  while (ary.length > 5) {
    if (times === 5) {
      if (i === ary.length) {
        return count + 1
      }
      ary.splice(i, 1)
      times = 1
      count++
    } else {
      times++
    }
    i++
    if (i === ary.length) {
      i = 0
    }
  }
  return res[ary.length] + count
}

// for (let i = 1; i <= 10; i++) {
//   console.log(luncky(i))
// }
console.log(luncky(6))

/**
 * @description: N个人排成一队，从1到5轮流报数，报5的人是幸运者，出列。

报到队尾后，从队首接着报。依此循环。

问：排在队尾的人是第几名幸运者？

注： N为小于100000的正整数。

例：

1人排成一队，他就是第1名幸运者。

3人排成一队，队尾是第2名幸运者。

5人排成一队，队尾是第1名幸运者。

8人排成一队，队尾是第3名幸运者

即求：N人排成一队，队尾是第多少名幸运者？
 * @param {type} 
 * @return:  A掉了
 */
function notFour(n) {
  let res = [],
    count = 1
  for (let i = 0; i < n; i++) {
    while (/4/.test('' + count)) {
      count++
    }
    res.push(count)
    count++
  }
  return res[n - 1]
}
// console.log(notFour(3))
// console.log(notFour(5))
// console.log(notFour(10))



function test(num) {
  var x = 1;
  var result = [];
  for (let i = 0; i < num; i++) {
    var str = x + "";
    for (let j = 0; j < str.length; j++) {
      if (str.includes("4")) {
        x++;
        break;
      }
    }
    result.push(x);
    x++;
  }
  return result[num - 1];
}
