function number_sum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
       // return [arr[i], arr[j]];
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

let target = 8;
let arr = [1, 2, 3, 4, 5];
//let arr = [1, 2, 3, 5, 6, 8];


console.log(number_sum(arr, target));