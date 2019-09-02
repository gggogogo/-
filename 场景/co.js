/*
 * @Author: GuoWei
 * @Date: 2019-08-31 14:59:50
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-08-31 15:40:57
 * @Description: 实现co模块的基本功能
 */
let g = function* () {
  while (true) {
    try {
      yield
    } catch (error) {
      if (error !== 'a') throw error
      console.log('内部捕获', error)
    }
  }
}
var it = g()
it.next()
try {
  // it.throw('a')
  it.throw('b')
} catch (error) {
  console.log('外部捕获', error)
}