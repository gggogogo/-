function trans(str) {
    var result = +str;
    if (isNaN(result)) {
        return 0;
    } else {
        return result;
    }
}

function f(ary) {
    var val = 0;
    for (let i = 0; i < ary.length; i++) {
        while (ary[i] % 3===0) {
            ary[i] = ary[i] / 3;
            val++;
        }
    }
    return val;
}
console.log(f([1, 4, 3, 81, 2]))