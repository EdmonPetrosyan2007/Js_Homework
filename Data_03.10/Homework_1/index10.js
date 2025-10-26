function arr_sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let Input_arr = [1, 2, 3, 4, 5];
console.log(arr_sum(Input_arr) + " sum of array element");
