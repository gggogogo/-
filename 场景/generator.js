/*
 * @Author: GuoWei
 * @Date: 2019-08-31 12:51:26
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-08-31 15:57:34
 * @Description: 结合generator与promise实现的流程管理
 */

function getFoo() {
  return new Promise((resolve, reject) => {
    resolve('foo')
  })
}
var g = function* () {
  try {
    let foo = yield getFoo()
    console.log(foo)
  } catch (error) {
    console.log(error)
  }
}
function run(generator) {
  var it = generator();
  function go(result) {
    if (result.done) {
      return result.value
    }
    return result.value.then(function (value) {
      return go(it.next(value))
    }, function (err) {
      return go(it.throw(err))
    })
  }
  go(it.next())
}
run(g)
