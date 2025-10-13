function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}


function Value_multiplication_two(value) {
    return value * 2;
}

let arr = [1, 2, 3, 4];


let map_value = map(arr, Value_multiplication_two);

console.log(map_value);
