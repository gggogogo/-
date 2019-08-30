function movingCount(threshold, rows, cols) {
    let visited = new Array(cols * rows),
        res
    visited.fill(false)

    res = hasCore(threshold, rows, cols, 0, 0, visited)

    return res
}

function hasCore(threshold, rows, cols, row, col, visited) {
    let count = 0
    if (check(threshold, rows, cols, row, col, visited)) {
        visited[row * cols + col] = true
        count = 1 + hasCore(threshold, rows, cols, row + 1, col, visited) + hasCore(threshold, rows, cols, row - 1, col, visited) + hasCore(threshold, rows, cols, row, col + 1, visited) + hasCore(threshold, rows, cols, row, col - 1, visited)
    }
    return count
}
function check(threshold, rows, cols, row, col, visited) {
    if (row >= 0 && row < rows && col >= 0 && col < cols && getDigitNum(row) + getDigitNum(col) <= threshold && !visited[row * cols + col]) {
        return true
    }
    return false
}
function getDigitNum(num) {
    let res = 0
    while (num > 0) {
        res += num % 10
        num = parseInt(num / 10)
    }
    return res
}



