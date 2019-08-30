
// // function moveStr(str) {
// //     let index = 0,
// //         ary = str.split(''),
// //         len = ary.length;
// //     while (index < len){
// //         if (/[A-Z]/.test(ary[index])) {
// //             console.log(ary)
// //             ary.push(ary.splice(index, 1)[0])
// //             index --
// //             len --
// //         }
// //     }
// //     return ary
// // }

// process.stdin.resume();
// var input = '';
// process.stdin.setEncoding('ascii');
// process.stdin.on('data', function (data) {
//     input = data;
// })
// process.stdin.on('end', function () {
//     //var input_array = input.trim().split('\n');
//     console.log(moveStr(input));
// });
// function moveStr(str) {
//     return str.replace(/[A-Z]/g, '') + str.match(/[A-Z]/g).join('');
// }

// //console.log(moveStr('hxKLAGLLzPyTxsFsrUnnSKQBHdQQrOyaEYJRgiJbHIDXFcQkFmIhPNKIBfHxXDBdKAvgZiBLVwnlxJAHmttsSJkZhSmQneNVoKoIYZRjPqsrFFaaqZbyNyeRjVKVFrCGdfycidTqbyQcpAtdRGzzBAaKoqybWMOyhrCQdwcRwQQpQavTnAbjriVwxJOrTYJVGYSWzKYeNAGqBzkJLucabNYvyVFxAGKLfqHXNttaqZfncEdTroGMzZnDbvZBBaRbJvuYIvlWrKaaGrvtyxrsCUOqxdwCrmVEeDrLKZKFJVRmrLsmbmOGUJyfdZIrFhuSwJQGRTYMLxKQNMaCavatlQIRZmFQvyWgQTVENxUcPKQCaUQbjyfaNuwoNdTBNldgrtPUcQodqsuJOdDpUczJWCZaasDdEYJkvituMHrCmZQSlRjIefVisatIUtfxBeKnHPyvWUKzRliFsYWgeXogiEgXDbfxAybwFuqFyEvjfIHEPDPKqEiGUtZhdDIDBGKpvBFyqHeEEhAToAbqHEpIdIhIGBtWjGHiQRctZxQQYkfFoWUbqZyIcjRPQBilHrnqNBzFmoRUYCSrGkawJCcOrMceegISpIpSGVjbngWVMTYtGoAlQFPFyOFAxndJZNfKDTwFIxisKTjyjchidXpYgLfoBOLriuIAHmAbQwoHBgbdUYBHlDQGZJASsHszOEPthLVnYbNqWegmONexfdsTVYHgtDmlyugefOBsqmgNDBoxkkhVHfvrYooVOyxDJQJLjYSngksbTopoPJFsKQzHePLukXyYTYCeW '))
// console.log(moveStr('AaBbC'))


// console.log((Math.pow(10, 9) + 8) % (Math.pow(10, 9) + 7))


function test(str) {
    var str2 = str.split('').reverse().join(''),
        res = [],
        len = str.length
    for (let i = 0; i <= len; i++) {
        res[i] = new Array(len + 1).fill(0)
    }
    console.log(res)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (str[i] == str2[j]) {
                res[i + 1][j + 1] = res[i][j] + 1
            } else {
                res[i + 1][j + 1] = Math.max(res[i + 1][j], res[i][j + 1])
            }
        }
    }
    return len - res[len][len];

}
var str = 'zgtklhfzomzjckwmluvivvcmhjrwkuvcjrxojobpdedpamdshcwwsetfbacvonecrdvugeibglvhxuymjvoryqjwullvzglqazxrdmczyvbgakjagttrezmvrlptiwoqkrtxuroeqmryzsgokopxxdpbejmtwvpnaqrgqladdszhdwxfckmewhdvihgvacueqhvwvjxoitlpfrckxkuksaqzjpwgoldyhugsacflcdqhifldoaphgdbhaciixouavqxwlghadmfortqacbffqzocinvuqpjthgekunjsstukeiffjipzzabkuiueqnjgkuiojwbjzfynafnlcaryygqjfixaoeowhkxkbsnpsvnbxuywfxbnuoemxynbtgkqtjvzqikbafjnpbeirxxrohhnjqrbqqzercqcrcswojyylunuevtdhamlkzqnjrzibwckbkiygysuaxpjrgjmurrohkhvjpmwmmtpcszpihcntyivrjplhyrqftghglkvqeidyhtmrlcljngeyaefxnywpfsualufjwnffyqnpitgkkyrbwccqggycrvoocbwsdbftkigrkcbojuwwctknzzmvhbhbfzrqwzllulbabztqnznkqdyoqnrxhwavqhzyzvmmmphzxbikpharseywpfsqyybkynwbdrgfsaxduxojcdqcjuaywzbvdjgjqtoffasiuhvxcaockebkuxpiomqmtvsqhnyxfjceqevqvnapbk'
// console.log(test(str))

function myReduce(arr, fn, val) {
    var tmp = arr.concat(),
        index,
        newVal;
    if (val) {
        tmp.unshift(val);
    }
    while (tmp.length > 1) {
        index = arr.length - tmp.length + 1;
        newVal = fn.call(null, tmp[0], tmp[1], index, arr);
        tmp.splice(0, 2, newVal);
    }
    return newVal;
}
array = [1, 2, 3, 4, 5]
f = function (per, cur, index, arr) {
    return per + cur
}
console.log(myReduce(array, f, 0))
console.log(array.reduce((pre, cur) => {
    return pre + cur;
}, 0))

var search = function (nums, target) {
    var mid = 0,
        min = 0,
        max = nums.length - 1;
    while (min <= max) {
        mid = Math.floor((min + max) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            max = mid - 1
        } else {
            min = mid + 1
        }
    }
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))