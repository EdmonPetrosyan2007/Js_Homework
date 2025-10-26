function isHappy(number) {
  while (number !== 1 && number !== 4) {
    let sum = 0;
    while (number > 0) {
      let digit = number % 10;
      sum += digit * digit;
      number = Math.floor(number / 10);
    }
    number = sum;
  }
  return number === 1;
}


let random = Math.floor(Math.random() * 999) + 1;
console.log(random);

let number_input = random;


if (isHappy(number_input)) {
  console.log("heppy numer");
} else {
  console.log("not heppy number");
}

