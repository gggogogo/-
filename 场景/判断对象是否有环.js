/*
 * @Author: GuoWei
 * @Date: 2019-08-30 21:41:56
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-08-30 21:42:40
 * @Description: Json.parse(Json.stringy(obj))在有环时会报错，如何判断有环
 */
function cycleDetector(obj) {
  var hasCircle = false, // 定义一个变量，标志是否有环
    cache = []; // 定义一个数组，来保存对象类型的属性值
  (function (obj) {
    var keys = Object.keys(obj); //获取当前对象的属性数组
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (typeof value == 'object' && value !== null) {
        var index = cache.indexOf(value)
        if (index !== -1) {
          hasCircle = true
          break
        } else {
          cache.push(value)
          arguments.callee(value)
          cache.pop() // 注意：这里要推出数据，因为递归返回，后面遍历的属性不是这个数据的子属性
        }
      }
    }
  })(obj)
  return hasCircle
}