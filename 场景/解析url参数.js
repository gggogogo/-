/*
 * @Author: GuoWei
 * @Date: 2019-09-30 10:45:26
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-30 10:59:32
 * @Description: 解析url返回对象
 */

function urlParse(url) {
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    if (arr) {
        arr.forEach(item => {
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);
            let val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        });
    }
    return obj;
}

let url = 'http://www.baidu.com?a=2&b=3'

console.log(urlParse(url))   // {a: "2", b: "3"}