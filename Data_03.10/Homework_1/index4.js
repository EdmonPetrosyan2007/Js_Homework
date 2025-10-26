function str_reverse(str_revers) {
    let reverse = "";
    for (let i = str_revers.length - 1; i >= 0; i--){
        reverse += str_revers[i];
    }
    return reverse;
}
let Input_str_revers = "hello";
console.log(str_reverse(Input_str_revers) + " Reversed string");

