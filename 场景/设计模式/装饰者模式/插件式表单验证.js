Function.prototype.before = function (beforeFn) {
  let _self = this
  return function () {
    if (beforeFn.apply(this, arguments) === false) {
      return
    }
    return _self.apply(this, arguments)
  }
}

let validata = function () {
  if (username == '') {
    console.log('用户名不能为空')
    return false
  }
  if (password == '') {
    console.log('密码不能为空')
    return false
  }
}
let formSubmit = function () {
  let params = {
    username: username.value,
    password: password.value
  }
  ajax('http://3123.com', params)
}

formSubmit = formSubmit.before(validata)

btn.onclick = function () {
  formSubmit()
}