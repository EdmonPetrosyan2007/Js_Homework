//1-Problem Length of string
console.log("---------------------------------------------");

function str_length(str) {
    return str.length;
}

let Input_Str = "hello";

console.log(str_length(Input_Str));

// 2-Problem Capitalize string
console.log("---------------------------------------------");

function  str_capital_letter(str_change) {
  return str_change.toUpperCase();
}

let Input_str_change = "hello";
console.log(str_capital_letter(Input_str_change));

// 3-Problem  Sum of two numbers
console.log("---------------------------------------------");

function number_sum(num1, num2) {
    return num1 + num2;
}

let Input_num1 = 5;
let Input_num2 = 10;
console.log(number_sum(Input_num1, Input_num2));

// 4-Problem 
console.log("---------------------------------------------");

function str_reverse(str_revers) {
    let reverse = "";
    for (let i = str_revers.length - 1; i >= 0; i--){
        reverse += str_revers[i];
    }
    return reverse;
}
let Input_str_revers = "hello";
console.log(str_reverse(Input_str_revers));

// 5-Problem 
console.log("---------------------------------------------");



// 6-Problem
console.log("---------------------------------------------");



// 7-Problem
console.log("---------------------------------------------");



// 8-Problem
console.log("---------------------------------------------");



// 9-Problem
console.log("---------------------------------------------");



// 10-Problem
console.log("---------------------------------------------");




// 11-Problem even or odd
console.log("---------------------------------------------");

function number_even_odd(num_even_odd) {
    if (num_even_odd % 2 === 0){
        console.log(`${num_even_odd} is even`);
    } else {
        console.log(`${num_even_odd} is odd`);
    }
}

let Input_num_even_odd = 7;
number_even_odd(Input_num_even_odd);

//End---------------------------------------------
console.log("---------------------------------------------");