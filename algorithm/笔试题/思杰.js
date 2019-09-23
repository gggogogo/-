// function betterCompression(str) {
//   // Write your code here

//   let reg = new RegExp(/[a-z][0-9]+/g)
//   let arr = str.match(reg)
//   let strArr = 'abcdefghijklmnopqrstuvwxyz'
//   let obj = {}
//   let res = ''
//   arr.forEach(item => {
//     let start = item.slice(0, 1)
//     if (!obj[start]) {
//       obj[start] = +item.slice(1)
//     } else {
//       obj[start] += +item.slice(1)
//     }
//   })
//   for (let item of strArr) {
//     if (item in obj) {
//       res += item + obj[item]
//     }
//   }
//   return res
// }


// function getMinimumMoves(arr) {
//   // Write your code here
//   let temp = [],
//     len = arr.length,
//     count = 0,
//     k = 0
//   for (let i = 0; i < arr.length; i++) {
//     temp[i] = arr[i]
//   }
//   temp.sort((a, b) => {
//     return a - b
//   })

//   for (let j = 0; j < len; j++) {
//     if (temp[k] == arr[j]) {
//       count++
//       ++k
//     }
//   }
//   return len - count

// }


// function maxPathSum(board, p, q) {
//   // Write your code here
//   if (board.length == 0 || board[0].length == 0) { return 0 };
//   if (board.length == 1) { return Math.max(board[0][p], board[0][q]); }
//   return Math.max(bottom(board, p), top(board, q));
// }

// function bottom(board, p, q) {
//   let nRow = board.length,
//     mCol = board[0].length,
//     arr = [];
//   for (let i = 0; i < nRow; i++) {
//     let temp = [];
//     for (let j = 0; j < mCol; j++) {
//       temp.push(0);
//     }
//     arr.push(temp);
//   }
//   for (let j = 0; j < mCol; j++) {
//     arr[nRow - 1][j] = board[nRow - 1][j];
//   }
//   for (let i = nRow - 2; i >= 0; i--) {
//     for (let j = 0; j < mCol; j++) {
//       if (j == 0) {
//         arr[i][j] = Math.max(arr[i + 1][j], arr[i + 1][j + 1]) + board[i][j];
//       }
//       else if (j == mCol - 1) {
//         arr[i][j] = Math.max(arr[i + 1][j - 1], arr[i + 1][j]) + board[i][j];
//       } else {
//         arr[i][j] = Math.max(arr[i + 1][j - 1], Math.max(arr[i + 1][j], arr[i + 1][j + 1])) + board[i][j];
//       }
//     }
//   }
//   return arr[0][p];
// }
// function top(board, q) {
//   let nRow = board.length,
//     mCol = board[0].length,
//     arr = [];
//   for (let i = 0; i < nRow; i++) {
//     let temp = [];
//     for (let j = 0; j < mCol; j++) {
//       temp.push(0);
//     }
//     arr.push(temp);
//   }
//   for (let j = 0; j < mCol; j++) {
//     arr[0][j] = board[0][j];
//   }
//   for (let i = 1; i < nRow; i++) {
//     for (let j = 0; j < mCol; j++) {
//       if (j == 0) {
//         arr[i][j] = Math.max(arr[i - 1][j], arr[i - 1][j + 1]) + board[i][j];
//       }
//       else if (j == mCol - 1) {
//         arr[i][j] = Math.max(arr[i - 1][j - 1], arr[i - 1][j]) + board[i][j];
//       } else {
//         arr[i][j] = Math.max(arr[i - 1][j - 1], Math.max(arr[i - 1][j], arr[i - 1][j + 1])) + board[i][j];
//       }
//     }
//   }
//   return arr[nRow - 1][q];
// }

var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  debugger
  return dp[amount] > amount ? -1 : dp[amount]
};
coinChange([1, 2, 5], 11)