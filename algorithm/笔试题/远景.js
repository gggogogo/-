function bank(ary) {
  let max = 0
  for (let i = 1; i < ary.length; i++) {
    if (ary[i] < ary[i - 1]) {
      max += ary[i - 1] - ary[i]
    }
  }
  return max
}

console.log(bank([100, 180, 0, 310, 40, 444, 555]))



// 最大陆地岛屿数
/**
 * leetcode: 200 650
 */
var n = readline().split(',');
var row = n[0]
var col = n[1]
var arys = []
for (var i = 0; i < row; i++) {
  lines = readline().split(",")
  arys.push(lines)
}
print(maxLand(row, col, arys))

function maxLand(row, col, arys) {
  let max = 0,
    cur = 0
  function dfs(a, r, c) {
    // debugger
    a[r][c] = 0
    ++cur
    if (r - 1 >= 0 && a[r - 1][c] == 1) dfs(a, r - 1, c)
    if (r + 1 < row && a[r + 1][c] == 1) dfs(a, r + 1, c)
    if (c - 1 >= 0 && a[r][c - 1] == 1) dfs(a, r, c - 1)
    if (c + 1 < col && a[r][c + 1] == 1) dfs(a, r, c + 1)
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (arys[i][j] == 1) {
        dfs(arys, i, j)
        max = Math.max(max, cur)
        cur = 0
      }

    }
  }
  return max
}
let row = 4, col = 5,
  arys = [
    [1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0]
  ]

console.log(maxLand(row, col, arys))