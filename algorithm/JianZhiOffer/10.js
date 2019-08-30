function fibonacci(n) {
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci2(n) {
    if (n < 0) {
        return 0;
    }
    if (n == 1 || n == 0) {
        return 1;
    }
    let first = 1,
        second = 1,
        result = 0;
    for (let i = 2; i <= n; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
}
//console.log(fibonacci(3))
console.log(fibonacci2(3))
//console.log(fibonacci(4))
console.log(fibonacci2(5))
//console.log(fibonacci(10))
console.log(fibonacci2(10))

function jumpFloor(number) {
    // write code here
    if (number < 1) {
        return
    }
    if (number == 1) {
        return 1
    }
    if (number == 2) {
        return 2
    }
    let first = 1,
        second = 2,
        result = 0;
    for (let i = 3; i <= number; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result
}

function jumpFloorII(number) {
    // write code here
    if (number < 0) {
        return
    }
    return Math.pow(2, number - 1)
}




function demo(input1, input2) {
    var count = 0;
    if (input1 <= Math.floor(input2 / 2) || 2 * input1 <= input2) {
        return 0;
    }
    count = input1 - Math.floor(input2 / 2);
    return count;

}