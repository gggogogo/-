
/**
 * 
 * @param {*} fn 
 * @param {*} time 
 * 1. 用setTImeout实现setInterral
 */
function mySetInterval(fn, time) {
    var f = () => {
        setTimeout(() => {
            fn.call(this)
            f()
        }, time)
    }
    f()
}
// test
mySetInterval(() => {
    console.log(1)
}, 1000)

/**
 * 链表反转
 */

function reverse(header) {
    var temp,
        first = header,
        second = header.next
    while (first.next) {
        temp = second.next
        second.next = first
        first = second
        second = temp
    }
    header.next = null
    return first
}

/**
 * 括号闭合
 */

function isClose(str) {
    let stack = [],
        left
    for (let i = 0; i < str.length; i++) {
        if (/[\(\{\[]/.test(str[i])) {
            stack.push(str[i])
        }
        if (/[\)\}\]]/.test(str[i])) {
            left = stack.pop()
            if (!((left === '(' && str[i] === ')') || (left === '[' && str[i] === ']') || (left === '{' && str[i] === '}'))) {
                return false;
            }
        }
    }
    return !stack.length
}

// test
isClose('(){}[]')  // true
isClose('({[]})')  // true
isClose('({[]}')  // false
isClose('({[])}')  // false

/**
 * 类数组转换成数组
 */

function fn() {
    return
}

fn(1, 2, 3, 4)

const pipeLine = (...funcs) =>
    val => funcs.reduce((a, b) => b(a), val)

const curry = function (fn) {
    var args = []
    return function () {
        args.concat([].slice.call(arguments, 1))
        if (args.length === fn.length) {
            fn.apply(null, args)
        } else {
            return arguments.callee
        }
    }
}




