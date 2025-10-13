function  forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr, i, arr[i]);
    }
}

function callback(arr, element, index) {
    console.log(arr, element, index);
}

let arr = [1, 2, 3, 4];
forEach(arr, callback);
