function filter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

function callback(currentValue, index, array) {
    console.log(currentValue, index, array);
}

let arr = [1, 2, 3, 4];
let filteredArr = filter(arr, function(currentValue) {
    return currentValue > 2;
});
console.log(filteredArr); 
