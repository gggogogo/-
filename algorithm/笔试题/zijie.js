// // var readline = require('readline');
// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });
// // var argAry = [];
// // var cur_line = 0;
// // rl.on('line', function (line) {
// //     if (cur_line == 0) {
// //         argAry.push(line.trim())
// //         cur_line++
// //     } else {
// //         argAry.push(line.trim().split(' '))
// //         console.log(robotJump(argAry[0], argAry[1]));
// //     }
// // });

// function robotJump(len, ary) {
//     let res = 0,
//         cur = 0;
//     for (let j = +len - 1; j >= 0; j--) {
//         ary[j] = +ary[j];
//         res = Math.ceil((cur + ary[j]) / 2);
//         cur = res;
//     }
//     return res;
// }
// // console.log(robotJump(5, [3, 4, 3, 2, 4]))
// // console.log(robotJump(3, [4, 4, 4]))
// // console.log(robotJump(3, [1, 6, 4]))


// function changeMaNong(arys) {

// }

// function numIslands(arrs) {
//     var ans = 0;
//     for (let i = 0; i < arrs.length; i++) {
//         for (let j = 0; j < arrs[0].length; j++) {
//             if (arrs[i][j] == '2') {
//                 ans++;
//                 flip2(arrs, i, j);
//             }
//         }
//     }
//     console.log(arrs)
//     console.log(ans)
//     return ans;
// }
// function flip2(arrs, i, j) {
//     arrs[i][j] = '2';
//     if (i + 1 < arrs.length && arrs[i + 1][j] == '1')
//         flip2(arrs, i + 1, j);
//     if (i - 1 >= 0 && arrs[i - 1][j] == '1')
//         flip2(arrs, i - 1, j);
//     if (j + 1 < arrs[0].length && arrs[i][j + 1] == '1')
//         flip2(arrs, i, j + 1);
//     if (j - 1 >= 0 && arrs[i][j - 1] == '1')
//         flip2(arrs, i, j - 1);
// }

// numIslands([[2, 1, 1], [1, 1, 0], [0, 1, 1]])

function miao(arrs) {
    var res,
        count = 0;
    res = arrs.map((item) => {
        let len = item.shift(),
            temp = [];
        if (len == 0) {
            return temp;
        }
        for (let i = 0; i < len; i++) {
            temp.push(item.splice(0, 2).join(''))
        }
        return temp
    })
    for (let i = 0; i < res.length; i++) {
        res[i]
    }
    res.forEach((item, index) => {
        for (let i = 0; i < item.length; i++) {
            if (res[index + 1].indexOf(item[i]) !== -1) {

            }
        }
    });
}
var ceshi = [
    [2, 1, 1, 2, 2],
    [2, 1, 1, 1, 4],
    [2, 1, 1, 2, 2],
    [2, 1, 1, 2, 2],
    [0],
    [0],
    [1, 1, 1],
    [1, 1, 1]
]
console.log(miao(ceshi))

// diyiti
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    static int[][] initAry;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List < String > list = new ArrayList<>();
        while (sc.hasNextLine()) {
            String s = sc.nextLine();
            if (s.length() == 0)
                break;
            list.add(s);
        }

        int n = list.size();
        int m = list.get(0).split(" ").length;

        initAry = new int[n][m];
        for (int i = 0; i < n; i++) {
            String[] strings = list.get(i).split(" ");
            for (int j = 0; j < m; j++)
            initAry[i][j] = Integer.valueOf(strings[j]);
        }

        int step = 0;
        while (getReverse(initAry))
            step++;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (initAry[i][j] == 1) {
                    System.out.println(-1);
                    return;
                }
            }
        }

        System.out.println(step);
        return;
    }

    private static boolean getReverse(int[][] nums) {
        boolean flag = false;
        int n = nums.length;
        int m = nums[0].length;
        int[][] temp = new int[n][m];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                temp[i][j] = initAry[i][j];
            }
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (nums[i][j] == 2) {
                    if (i - 1 >= 0 && nums[i - 1][j] == 1) {
                        temp[i - 1][j] = 2;
                        flag = true;
                    }

                    if (i + 1 < n && nums[i + 1][j] == 1) {
                        temp[i + 1][j] = 2;
                        flag = true;
                    }

                    if (j - 1 >= 0 && nums[i][j - 1] == 1) {
                        temp[i][j - 1] = 2;
                        flag = true;
                    }

                    if (j + 1 < m && nums[i][j + 1] == 1) {
                        temp[i][j + 1] = 2;
                        flag = true;
                    }
                }
            }
        }

        initAry = temp;

        return flag;
    }
}


// process.stdin.resume();
// var input = '';
// process.stdin.setEncoding('ascii');
// process.stdin.on('data', function (data) {
//     input = data;
// })
// process.stdin.on('end', function () {
//     var input_array = input.trim().split('\n');
//     input_array.forEach((item) => {
//         let temp = [];
//         item.forEach(it => {
//             temp.push(+it)
//         })
//         status.push(temp);
//     })
//     console.log(main());
// });


var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var input_array = [];
rl.on('line', function (line) {
    if (line == '') {
        input_array.forEach((item) => {
            let temp = [];
            item.forEach(it => {
                temp.push(+it)
            })
            status.push(temp);
        })
        console.log(main());
    } else {
        input_array.push(line.split(' '))
    }
});


// 装的初始数组
// var status = [
//     [1, 2, 1],
//     [1, 1, 0],
//     [0, 1, 1]
// ];
var status = [];
function main() {
    var step = 0;
    while (getReverse(status)) {
        step++;
    }
    let n = status.length,
        m = status[0].length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (status[i][j] == 1) {
                return -1;
            }
        }
    }
    return step;
}

function getReverse(nums) {
    var flag = false;
    var n = nums.length;
    var m = nums[0].length;
    var temp = [];
    //console.log(temp)
    status.forEach((item) => {
        let t = [];
        item.forEach((it) => {
            t.push(it)
        })
        temp.push(t);
    })
    // console.log(temp)


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (nums[i][j] == 2) {
                if (i - 1 >= 0 && nums[i - 1][j] == 1) {
                    temp[i - 1][j] = 2;
                    flag = true;
                }

                if (i + 1 < n && nums[i + 1][j] == 1) {
                    temp[i + 1][j] = 2;
                    flag = true;
                }

                if (j - 1 >= 0 && nums[i][j - 1] == 1) {
                    temp[i][j - 1] = 2;
                    flag = true;
                }

                if (j + 1 < m && nums[i][j + 1] == 1) {
                    temp[i][j + 1] = 2;
                    flag = true;
                }
            }
        }
    }

    status = temp;

    return flag;
}
// console.log(main())


