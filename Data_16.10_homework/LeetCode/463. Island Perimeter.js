/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                if (i === 0 || grid[i - 1][j] === 0) {
                    count++;
                } 
                if (i === rows - 1 || grid[i + 1][j] === 0) {
                    count++;
                }
                if (j === 0 || grid[i][j - 1] === 0) {
                    count++;
                } 
                if (j === cols - 1 || grid[i][j + 1] === 0) {
                    count++;
                }
            }
        }
    }

    return count;
};


let grid = [
    [0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]
];

console.log(islandPerimeter(grid));