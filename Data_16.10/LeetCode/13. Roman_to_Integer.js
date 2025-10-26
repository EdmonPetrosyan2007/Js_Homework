/**
 * @param {string} s
 * @return {number}
 */

var s = "III"

var romanToInt = function(s) {
  const Number = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let value_sum = 0;

  for (let i = 0; i < s.length; i++) {
    if ( Number[s[i]] < Number[s[i + 1]]) {
      value_sum -= Number[s[i]]; 
    } else {
      value_sum += Number[s[i]];
    }
  }

  return value_sum;
};

console.log(romanToInt(s));
