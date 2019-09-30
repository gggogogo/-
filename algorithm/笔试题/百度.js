// // 本题为考试单行多行输入输出规范示例，无需提交，不计分。
// line = readline()


// print(fn1(line));


function lcm(m, n) {
  let u = m,
    v = n
  while (v != 0) {
    [u, v] = [v, u % v]
  }
  return u
}

function fn1(n) {
  let max = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      debugger
      let l = lcm(i, j)
      max = Math.max(max, i * j / l - l)
    }
  }
  return max
}
function fn(n) {
  if (n === 1) return 0
  for (let i = n - 1; i > 0; i--) {
    if (lcm(n, i) === 1) {
      return n * i - 1
    }
  }
}
// console.log(fn1(5))
console.log(fn(1))
console.log(fn(2))

function fn2(ary) {
  let k = 0
  ary.forEach(item => {
    if (item >= n) {
      let d = item - n;
      if (d < n) k++;
      else k += (d / (n + 1)) * (n + 1) + 1
    }
  })
  return k
}

function add(fn) {
  let count = 0
  return function () {
    count++
    console.log(count)
    fn().apply(this, arguments)
  }
}
var cc = function () {
  console.log('+++')
}
cc = add(cc)
cc()

function mySplice(ary, start, nums, ...values) {
  let res = ary.slice(start, start + nums)
  ary = ary.slice(0, start).concat(...values, ary.slice(start + nums))
  return {
    res,
    ary
  }
}


mySplice([1, 2, 3, 4, 5], 2, 2, [7, 8])