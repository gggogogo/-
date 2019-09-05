/*
 * @Author: GuoWei
 * @Date: 2019-09-03 12:45:55
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-03 13:12:09
 * @Description: 链式调用，每次调用返回一个结果
 */

function add1() {
  let sum = 0
  function next() {
    let _args = Array.from(arguments)
    _args.forEach(item => {
      sum += item
    });
    console.log(sum)
    return next
  }
  return next(...arguments)
}
add1(2, 3, 4)(2)(3)(-2)

let add2 = (function fn() {
  let sum = 0
  return function () {
    let _args = Array.from(arguments)
    debugger
    _args.forEach(item => {
      sum += item
    });
    console.log(sum)
  }
})()
add2(2)
add2(3)

let add3 = ((count = 0) => () => { console.log(++count) })()

add3()
add3()