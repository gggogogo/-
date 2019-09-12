function fn(len, ary) {
  len = +len
  let tempAry = ary.map(item => +item),
    a = [],
    max = 0,
    val
  for (let i = len - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (tempAry[j] >= tempAry[i]) {
        if (a[j]) {
          a[j]++
        } else {
          a[j] = 1
        }
        break
      }
    }
  }
  a.forEach((item, index) => {
    if (item >= max) {
      max = item
      val = tempAry[index]
    }
  })
  return val || tempAry[0]
}


function water(ary) {
  let target = ary.pop()
}

function fn4(arr) {
  let alp = [], num = parseInt(arr[0]), out = '', result = []
  for (let i = 0; i < 26; i++) {
    let temp = String.fromCharCode(65 + i)
    alp.push(temp)
  }
  // console.log(arr[0])
  let str = arr[0].split('').map(item => {
    return parseInt(item)
  })
  for (let j = 0; j < str.length; j++) {
    out = out += alp[str[j] - 1]

    result.push(out)
    if (num <= 26) {
      result.push(alp[str[j] - 1])
    }
  }
  return result.join('\n')
}

function fn3(str) {
  let count
  let ary = str.split(' ').map(item => {
    if (/\<|\>/.test(item)) {
      return item
    } else {
      +item
    }
  })
  let cur = 0,
    flag = false,
    go = true
  while (cur >= 0 || cur < ary.length) {
    if (ary[cur] === '<') {
      go = false
      if (flag) {
        ary.splice(cur, 1)
      }
      flag = true
    } else if (ary[cur] === '<') {
      go = true
      if (flag) {
        ary.splice(cur, 1)
      }
      flag = true
    } else {
      if (ary[cur] === 0) {
        ary.splice(cur, 1)
      } else {
        count++
        ary[cur]--
      }
    }
    go ? ++cur : --cur
  }
  return count
}
console.log(fn3('> 2 2 <'))
