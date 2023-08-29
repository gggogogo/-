Function.prototype.before = function (beforeFn) {
  let _self = this
  return function () {
    beforeFn.apply(this, arguments)
    return _self.apply(this, arguments)
  }
}

var ajax = function (type, url, params) {
  console.log('params:')
  console.log(params)
  // 发送ajax请求略
}

var getToken = function () {
  // do something
  return 'token'
}

ajax = ajax.before(function (type, url, params) {
  params.csrfToken = getToken()
})

ajax('1', '2', { a: 1 })  //			params:{ a: 1, csrfToken: 'token' }
