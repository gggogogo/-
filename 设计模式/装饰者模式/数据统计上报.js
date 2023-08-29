Function.prototype.after = function (afterFn) {
  let _self = this
  return function () {
    let ret = _self.apply(this, arguments)
    afterFn.apply(this, arguments)
    return ret
  }
}


let showLogin = function () {
  console.log('打开登陆悬浮窗')
}
let log = function () {
  console.log(`上报标签`)
}

showLogin = showLogin.after(log)
showLogin() //打开登陆悬浮窗
            //上报标签
