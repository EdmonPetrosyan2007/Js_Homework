function matrix(matrix_input) {
 let row =  matrix_input.length;
 let cors = matrix_input[0].length;
 let count = 0;

  for (let i = 0; i < row; ++i) {
       for (let j = 0; j < cors; ++j) {
        if (matrix_input[i][j] == 0) {
            if (i !== 0 && j !== 0 && matrix_input[i - 1][j - 1] == 'M') {
              ++count;
            }
            if (i !== 0 &&  matrix_input[i - 1][j] == 'M') {
                ++count;
            }
            if (i !== 0 && j !== cors - 1 && matrix_input[i - 1][j + 1] == 'M') {
                ++count;
            }
            if (j !== cors - 1 && matrix_input[i][j + 1] == 'M') {
                ++count;
            }
            if (i !== row - 1 && j !== cors - 1 && matrix_input[i + 1][j + 1] == 'M') {
                ++count;
            }
            if (i !== row - 1 && matrix_input[i + 1][j] == 'M') {
                ++count;
            }
            if (i !== row - 1 && j !== 0 && matrix_input[i + 1][j - 1] == 'M') {
                ++count;
            }
            if (j !== 0 && matrix_input[i][j - 1] == 'M') {
                ++count;
            }
            matrix_input[i][j] = count;
            count = 0;
          }
        }
    }  
   return matrix_input;
}

let matrix_input = [
  [ 0, 'M', 0, 'M', 0 ],
  [ 0, 0, 'M', 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 'M', 'M', 0, 0, 0 ],
  [ 0, 0, 0, 'M', 0 ]
];

console.log(matrix(matrix_input));