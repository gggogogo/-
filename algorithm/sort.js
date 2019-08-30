
var swap = function (ary, a, b) {
    let temp = ary[a];
    ary[a] = ary[b];
    ary[b] = temp;
};

function bubbleSort(ary) {
    for (let i = ary.length - 1; i > 0; i--) {
        let flag = true;
        for (let j = 0; j < i; j++) {
            if (ary[j] > ary[j + 1]) {
                swap(ary, j, j + 1);
                flag = false;
            }
        }
        if (flag) {
            break;
        }
    }
    return ary;
}
function quickSort(ary) {
    if (ary.length <= 1) {
        return ary;
    }
    let length = ary.length;
    let index = Math.floor(length / 2);
    let leftAry = [];
    let rightAry = [];
    let pivot = ary.splice(index, 1)[0];
    ary.forEach((item) => {
        if (item <= pivot) {
            leftAry.push(item);
        } else {
            rightAry.push(item);
        }
    });
    return quickSort(leftAry).concat(pivot, quickSort(rightAry));
}
function selectSort(ary) {
    for (let i = 0; i < ary.length - 1; i++) {
        let minIndex = i;
        let minValue = ary[minIndex];
        for (let j = i + 1; j < ary.length; i++) {
            if (minValue > ary[j]) {
                minIndex = j;
                minValue = ary[j];
            }
        }
        let temp = ary[i];
        ary[i] = minValue;
        ary[minIndex] = temp;
    }
    return ary;
}

let ary1 = [1, 2, 4, 9, 5, 6, 3, 2, 8, 7];
let ary2 = [7, 6, 5, 4, 3, 2, 1];
let ary3 = [1, 2, 3, 4, 5, 6];
let ary4 = [100, 58, 78, 15, 16, 19, 20, 28, 3, 4, 6, 48];

// console.log(bubbleSort(ary1));
// console.log(bubbleSort(ary2));
// console.log(bubbleSort(ary3));
// console.log(bubbleSort(ary4));
// console.log(quickSort(ary1));
// console.log(quickSort(ary2));
// console.log(quickSort(ary3));
// console.log(quickSort(ary4));
// console.log(selectSort(ary1));
// console.log(selectSort(ary2));
// console.log(selectSort(ary3));
// console.log(selectSort(ary4));


function f1() {
    let a = 1;
    var b = 2;
}
obj = {
    a: 2
}
function f2() {
    let c = 4;
    // with (obj) { 
    //     console.log(a+c);
    // }
    // console.log(a+c);
    try {
        throw obj;
    } catch (error) {
        console.log(error.a);
    }
}
f2()