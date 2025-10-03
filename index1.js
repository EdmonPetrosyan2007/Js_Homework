//1-Problem Length of string
console.log("---------------------------------------------");

function str_length(str) {
    return str.length;
}

let Input_Str = "hello";

console.log(str_length(Input_Str) + " Length of string");

// 2-Problem Capitalize string
console.log("---------------------------------------------");

function  str_capital_letter(str_change) {
  return str_change.toUpperCase();
}

let Input_str_change = "hello";
console.log(str_capital_letter(Input_str_change) + " Capitalized string");

// 3-Problem  Sum of two numbers
console.log("---------------------------------------------");

function number_sum(num1, num2) {
    return num1 + num2;
}

let Input_num1 = 5;
let Input_num2 = 10;
console.log("num1 + num2 =  " + number_sum(Input_num1, Input_num2));

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
console.log(str_reverse(Input_str_revers) + " Reversed string");

// 5-Problem 
console.log("---------------------------------------------");

function arr_concat(arr1, arr2) {
    return arr1.concat(arr2);
}

let arr1 = [1, 2];
let arr2 = [3, 4];

console.log("Concatenated array: " + arr_concat(arr1, arr2));

// 6-Problem
console.log("---------------------------------------------");

let text = "Learning JavaScript";

console.log(text.includes("Java")); 


// 7-Problem
console.log("---------------------------------------------");

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
// 8-Problem Sum of expenses
console.log("---------------------------------------------");


function sum_expenses(expenses) {
    let sum = 0;

    for (let i = 0; i < expenses.length; i++){
        sum += expenses[i];
    }
    return sum;
}

let expenses = [50, 75, 100];
console.log("Sum of expenses: " + sum_expenses(expenses));

// 9-Problem
console.log("---------------------------------------------");


function Contains_Substring(str, sub) {
  return str.includes(sub);
}

console.log(Contains_Substring("JavaScript", "Java"));



// 10-Problem arr element sum
console.log("---------------------------------------------");

function arr_sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let Input_arr = [1, 2, 3, 4, 5];
console.log(arr_sum(Input_arr) + " sum of array element");


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
console.log("End of the homework");