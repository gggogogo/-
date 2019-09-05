
list = [
    [0, 0, 0, 7],
    [0, 0, 1, 2],
    [0, 1, 0, 4],
    [0, 1, 1, 3],
    [1, 0, 0, 6],
    [1, 0, 1, 1],
    [1, 1, 0, 5],
    [1, 1, 1, 0]
]
function maxEnergy(n, list) {
    var visited = new Array(Math.pow(n, 3));
    var start = [],
        max = 0,
        result = 0;
    visited.fill(false);
    for (let i = 0; i < list.length; i++) {
        if (list[i][3] > max) {
            start = list[i];
        }
    }
    max = 0;
    var hasPath = function (x, y, z) {
        var path = false;
        if (x >= 0 && x < n && y >= 0 && y < n && z >= 0 && z < n && !visited[x * n * n + y * n + z]) {
            visited[x * n * n + y * n + z] = true;
            path = hasPath(x + 1, y, z) || hasPath(x - 1, y, z) || hasPath(x, y + 1, z) || hasPath(x, y - 1, z) || hasPath(x, y, z + 1) || hasPath(x, y, z - 1);
            max += list[x * n * n + y * n + z][3];
        }
        if (!path) {
            if (result < max) {
                result = max;
            }
        }
        return path;
    }
    hasPath(start[0], start[1], start[2]);
    return result;
}
console.log(maxEnergy(2, list))

// var readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// var inputAry = [];
// rl.on('line', function (line) {

// });


// function maxEnergy(arr) {
//     var result = 0;
//     arr.forEach((item) => {
//         result += +item[3];
//     })
//     return result;
// }



