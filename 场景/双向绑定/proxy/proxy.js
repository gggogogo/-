/*
 * @Author: GuoWei
 * @Date: 2019-09-07 16:48:47
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-07 16:48:49
 * @Description: 
 */

function observe(data) {
  if (!data || typeof data !== 'object') {
    return
  }
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}

function reactiveProxy(obj) {
  let proxy = new Proxy(obj, {
    get: function (target, key, receiver) {
      
    },
    set: function () { }
  })
}