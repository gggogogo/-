// var readline = require('readline');

// rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// var inputArr = [];
// var len = 0;
// rl.on('line', function (line) {
//     if (len === 1) {
//         inputArr = line.trim().split(' ');
//         console.log(min(inputArr));
//     }
//     len++;
// });
// rl.on('close', function () {
//     process.exit(0);
// })

function maxLength(str) {
    var arr = str.split('0'),
        max = 0,
        len = str.length;
    if (arr.length == 0) {
        return 0;
    }
    if(arr.length == 1){
        return arr[0].length;
    }
    arr.forEach(function (item) {
        max = item.length > max ? item.length : max;
    })
    if (str[0] == '1' && str[len - 1] == '1') {
        max = max > arr[0].length + arr[arr.length - 1].length ? max : arr[0].length + arr[arr.length - 1].length;
    }
    return max;
}

// function min(ary) {
//     var i;
//     ary.forEach((item, index) => {
//         if (item === '1') {
//             i = index;
//         }
//     })
//     return i;
// }
function min(str1, str2) {
   // var str1 = '';
    var len = str1.length,
        cur1 = len - 1,
        pre1 = len - 1,
        cur2 = len - 1,
        pre2 = len - 1,
        result = 0;
    // for (let i = 1; i < len+1; i++) {
    //     str1 += i;
    // }
    // console.log(str1)
    while (cur1 >= 0) {
        if (str1[cur1] == str2[cur1]) {
            result += pre1 - cur1 - (pre2 - cur2);
            pre1 = cur1;
            pre2 = cur2;
            cur1--;
            cur2--
        } else {
            cur1--
        }
    }
    result += pre1;
    return result;

}
// console.log(min('12345', '52134'))
// console.log(min('52134', '12345'))
console.log('1111'.split('0'))


