/*
 * @Author: GuoWei
 * @LastEditors: GuoWei
 * @Description: 
 * @Date: 2019-03-20 11:36:43
 * @LastEditTime: 2019-03-21 13:37:19
 */




function boxMoving(event) {
    var e = event || window.event;
    var ele = e.target;

    var disX = e.clientX - ele.offsetLeft;
    var disY = e.clientY - ele.offsetTop;

    var move = function (e) {
        var moveX = e.clientX - disX;
        var moveY = e.clientY - disY;
        var maxMoveX = 500 - ele.offsetWidth;
        var maxMoveY = 500 - ele.offsetHeight;

        ele.style.left = `${Math.min(moveX > 0 ? moveX : 0, maxMoveX)}px`
        ele.style.top = `${Math.min(moveY > 0 ? moveY : 0, maxMoveY)}px`
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', move);
    });
}

window.onload = function () {
    var box = document.querySelector('.box');
    box.addEventListener('mousedown', function (e) {
        boxMoving(e);
    });
}


function add(str1, str2) {
    if (str1.length == 0 && str2.length == 0) {
        console.log("wushuru");
        return;
    }
    let ary1 = str1.split('').reverse().map((item) => {
        return parseInt(item);
    });
    let ary2 = str2.split('').reverse().map((item) => {
        return parseInt(item);
    });

    let shorter = ary1.length < ary2.length ? ary1 : ary2;
    let longer = ary1.length >= ary2.length ? ary1 : ary2;
    shorter.forEach((item, index) => {
        longer[index] = item + longer[index];
    });

    for (let i = 0; i < longer.length; i++) {
        if (longer[i] >= 10) {
            longer[i] = longer[i] % 10;
            if (longer[i + 1]) {
                longer[i + 1]++;
            } else {
                longer[i + 1] = 1;
            }
        }
    }
    return longer.reverse().join('');
}
console.log(add('9999999', '1'));
console.log(add('123', '456'));
console.log(add('3', '1'));
console.log(add('9999999999999999999999999999999999999999999999999999', '1'));
console.log(add('', ''));



function getClass(className) {
    var bqAll = document.getElementsByClassName;
    if (bqAll) {
        return document.getElementsByClassName(className)
    }
    var arr = [];
    var dom = document.getElementsByTagName("*");
    for (var i = 0; i < dom.length; i++) {
        var classArray = dom[i].className.split(" ");
        for (var j = 0; j < classArray.length; j++) {
            if (classArray[j] == className) {
                arr.push(dom[i]);
            }
        }
    }
    return arr;
}
