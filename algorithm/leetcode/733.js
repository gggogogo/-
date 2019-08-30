    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} newColor
     * @return {number[][]}
     */
    var floodFill = function (image, sr, sc, newColor) {
        let rows = image.length,
            cols = image[0].length,
            visited = new Array(rows * cols),
            initColor = image[sr][sc]
        visited.fill(0)

        function fn(image, row, col) {
            if (row >= 0
                && row < rows 
                && col >= 0
                && col < cols 
                && !visited[row * cols + col]
                && (initColor === image[row][col])
            ) {
                image[row][col] = newColor
                visited[row * cols + col] = 1
                fn(image, row + 1, col)
                fn(image, row - 1, col)
                fn(image, row, col + 1)
                fn(image, row, col - 1)
            }

        }
        fn(image, sr, sc)
        return image
    };

    // test 
    let image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]],
        sr = 1,
        sc = 1,
        newColor = 2

    floodFill(image, sr, sc, newColor)