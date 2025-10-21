function sum_of_pows(num) {
  let sum = 0;

  while (num) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10); // sa nuyn e inch --> (num / 10) >> 0
  }

  return sum;
}

var isHappy = function (n) {
  let slow = sum_of_pows(n);
  let fast = sum_of_pows(sum_of_pows(n));

  while (fast !== 1 && slow !== fast) {
    slow = sum_of_pows(slow);
    fast = sum_of_pows(sum_of_pows(fast)); 
  }

  return fast === 1;
};

var number_random =Math.floor(Math.random() * 999);

var num = number_random;
console.log(number_random);
console.log(isHappy(num)); 
