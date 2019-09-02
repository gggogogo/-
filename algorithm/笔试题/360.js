process.stdin.resume();
var input = '';
process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  input = data;
})
process.stdin.on('end', function () {
  var input_array = input.trim().split('\n');
  console.log(fn(input_array[0]))
});


function fn(str) {
  let map = {},
    max = 0
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1
    } else {
      map[str[i]]++
    }
  }
  for (key in map) {
    max = max > map[key] ? max : map[key]
  }
  return max
}
console.log(fn('aba'))

function fn2(max, list) {
  let cur = list[0];
  for (let i = 1; i < list.length; i++) {
    cur = Math.min(Math.abs(cur + list[i]), Math.abs(cur - list[i]))
  }

  return max - cur + 1
}
function fn2(max, list) {
  let ary = Array(max).fill(1),
    res = max

  while (list.length) {
    let cur = list.pop()
    for (let i = 0; i <= max; i++) {
      if (ary[i] && (i + cur > max - 1 && i - cur < 0)) {
        ary[i] = 0
        res--
      }
    }
  }
  return res
}



console.log(fn2(10, [5, 2, 6]))
