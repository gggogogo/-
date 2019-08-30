function fun( ary) {
    ary.sort()
    var res = [];
    while (ary.length > 0) {
        res.unshift(ary.shift());
        res.push(ary.pop())
    }
    console.log(res)
}

fun([2,3,3,3,4,5])