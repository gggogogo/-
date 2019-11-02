function countAndSay(n) {
  let prev = '1'
  for (let i = 1; i < n; i++) {
    // \1表示正则第一个圆括号内匹配到的内容
    prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
    // debugger
  }
  return prev
}
console.log(countAndSay(2))
