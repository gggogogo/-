function repeat1(str, n) {
    var arr = new Array(n);
    return arr.fill(str).join('');
}
console.log(repeat2('ssr', 1))

function repeat2(str, count) {
    if (count > 1) {
        return str + repeat2(str, --count)
    }
    return str;
}

var eventHandler = function (ele, type, handler) {
    if (window.addEventListener) {
        eventHandler = function (ele, type, handler) {
            return ele.addEventListener(type, handler, false);
        }
    } else if (window.attachEvent) {
        eventHandler = function (ele, type, handler) {
            return ele.attachEvent('on' + type, handler);
        }
    } else {
        eventHandler = function (ele, type, handler) {
            return ele['on' + type] = handler;
        }
    }
    eventHandler(ele,type,handler);
}

console.log([].valueOf())
console.log([].toString())
console.log([]==true)
if([]){
    console.log(1)
}