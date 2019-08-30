/*
 * @Author: GuoWei
 * @LastEditors: GuoWei
 * @Description: 矩阵中的路径
 * @Date: 2019-04-21 20:17:40
 * @LastEditTime: 2019-04-24 15:28:03
 */

// function hasPath(matrix, str) {
//     var rows = matrix.length,
//         cols = matrix[0].length,
//         visted = [],
//         pathLen = 0;

//     // 创建一个和matrix一样大的数组，当中填充的都是false，代表该节点是否访问过。
//     for (let i = 0; i < rows; i++) {
//         let tmp = new Array(cols);
//         tmp.fill(false);
//         visted.push(tmp);
//     }
//     function hasPathCore(row, col) {
//         if (pathLen == str.length - 1) {
//             return true;
//         }
//         var hasPath = false;
//         if (row >= 0 && row < rows && col >= 0 && col < cols && matrix[row][col] == str[pathLen] && !visted[row][col]) {
//             pathLen++;
//             visted[row][col] = true;
//             hasPath = hasPathCore(row - 1, col) || hasPathCore(row, col - 1) || hasPathCore(row + 1, col) || hasPathCore(row, col + 1);
//             if (!hasPath) {
//                 pathLen--;
//                 visted[row][col] = false;
//             }
//         }
//         return hasPath;
//     }
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (hasPathCore(i, j)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
function hasPath(matrix, rows, cols, path) {

    var visted = new Array(rows * cols),
        pathLen = 0,
        str = path;

    visted.fill(false);
    function hasPathCore(row, col) {
        if (pathLen == str.length) {
            return true;
        }
        var hasPath = false;
        if (row >= 0 && row < rows && col >= 0 && col < cols && matrix[row * cols + col] == str[pathLen] && !visted[row * cols + col]) {
            pathLen++;
            visted[row * cols + col] = true;
            hasPath = hasPathCore(row - 1, col) || hasPathCore(row, col - 1) || hasPathCore(row + 1, col) || hasPathCore(row, col + 1);
            if (!hasPath) {
                pathLen--;
                visted[row * cols + col] = false;
            }
        }
        return hasPath;
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (hasPathCore(i, j)) {
                return true;
            }
        }
    }
    return false;
}
console.log(hasPath("ABCESFCSADEE", 3, 4, "ABCB"))

