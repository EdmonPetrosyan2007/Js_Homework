/*
function  str_capital_letter(str_change) {
  return str_change.toUpperCase();
}

let Input_str_change = "hello";
console.log(str_capital_letter(Input_str_change) + " Capitalized string");
*/
function  str_capital_letter(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) { 
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

let str =  str_capital_letter("hello world");
console.log(str); 
