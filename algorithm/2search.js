/*
 * @Author: GuoWei
 * @LastEditors: GuoWei
 * @Description: 二分查找 
 * @Date: 2019-04-19 21:53:01
 * @LastEditTime: 2019-08-27 10:31:50
 */

function search(ary, target) {
    var min = 0,
        max = ary.length - 1,
        mid = 0;
    while (min <= max) {
        mid = Math.floor((min + max) / 2);
        if (target < ary[mid]) {
            max = mid - 1;
        } else if (target > ary[mid]){
            min = mid +1;
        } else{
            return mid;
        }
    }
    return -1;
}

// var ary = [1,2,3,4,5,6,7,8,9,10];
var ary = [1];

// console.log(search(ary,0))
// console.log(search(ary,1))
// console.log(search(ary,3))
// console.log(search(ary,4))
// console.log(search(ary,5))
// console.log(search(ary,9))
// console.log(search(ary,10))
// console.log(search(ary,11))

reg = /^1[35678][0-9]{9}$/;
console.log(reg.test('15412341234'))
console.log(reg.test('12412341234'))
console.log(reg.test('1841234123411'))
console.log(reg.test('1241234123'))