import {
  defineReactive,
  observe,
  Dep,
  Watcher
} from './mvvm'

function selfVue(data, el, exp) {
  this.data = data
  observe(data)

}

let reg = /(?<={)(\n)+(?=})/m


function fn() {
  let a = 1
  return a
}
let str = fn.toString()
reg.test(str)
str.match(reg)