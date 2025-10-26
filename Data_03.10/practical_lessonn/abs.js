function math_abs_implementation(number){
  if (number < 0){
    return -number;
  } else {
    return number;
  }
}
console.log(math_abs_implementation(-5));
console.log(math_abs_implementation(5));
console.log(math_abs_implementation(0));