/*
 * @Author: GuoWei
 * @LastEditors: GuoWei
 * @Description: 数组去重 
 * @Date: 2019-03-16 17:03:55
 * @LastEditTime: 2019-03-16 17:22:07
 */


 function unique1(ary) {
    return ary.filter((item, index) => {
        return ary.indexOf(item) === index;
    });
 }

 var unique2 = arr => [...new Set(arr)];
 
 console.log( unique2([1,2,3,1,4,5,2,3]));