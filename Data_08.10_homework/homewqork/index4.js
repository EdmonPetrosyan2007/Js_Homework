function some(arr, fu) {
    for (let i = 0; i < arr.length; i++) {
        if (fu(arr[i])) {
            return true;
        }
    }
    return false;
}


let arr = [1, 2, 3, 4];



let number_Evn = some(arr, function(Value) {
    return Value % 2 === 0;
});
console.log(number_Evn); 

