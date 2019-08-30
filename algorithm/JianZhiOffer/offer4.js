/*
 * @Author: GuoWei
 * @LastEditors: GuoWei
 * @Description:  
 * @Date: 2019-03-16 17:22:13
 * @LastEditTime: 2019-03-16 17:47:53
 */

var search2dAry = function (ary, num) {
    if (ary.length === 0 || !num) return false;
    let col = ary[0].length;
    let row = ary.length;
    let c = col - 1;
    let r = 0;
    while (c >= 0 && r < row) {
        if (ary[r][c] == num) {
            return true;
        } else if (ary[r][c] > num) {
            c--;
        } else {
            r++;
        }
    }
    return false;
}

console.log(search2dAry([[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]],17));