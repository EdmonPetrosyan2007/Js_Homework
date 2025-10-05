
/*
function str_length(str) {
    return str.length;
}

let Input_Str = "hello";

console.log(str_length(Input_Str) + " Length of string");
*/
 function str_length(str){ 

  let length = 0;
  for (let i = 0; i < str.length; i++) {
     length++;
  }
  return length + " Length of string using loop";
 }
 let str = "hello";

 console.log(str_length(str));

