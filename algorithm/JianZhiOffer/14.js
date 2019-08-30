function cutRope(n) {
    if (n < 3) return 1

    if (n === 3) return 2

    let products = [0, 1, 2, 3]

    for (let i = 4; i <= n; i++) {
        let max = 0
        for (let j = 0; j < i / 2; j++) {
            let temp = products[j] * products[i - j]
            if (temp > max) {
                max = temp
            }
        }
        products.push(max)
    }
    return products.pop()
}

function cutRope2(n) {
    if (n === 0) return 0
    if (n < 3) return 1
    if (n === 3) return 2

    let num3 = parseInt(n / 3)
    if (length - num3 * 3 === 1) {
        num3--
    }
    let num2 = (length - num3) / 2
    return Math.pow(3, num3) + Math.pow(2, num2)
}