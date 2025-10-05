function find_index(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target){  
            return i;
        }
    }
    return -1;
}

 let numList = [3, 6, 9, 12];
 console.log("9 number index: " + find_index(numList, 9));
