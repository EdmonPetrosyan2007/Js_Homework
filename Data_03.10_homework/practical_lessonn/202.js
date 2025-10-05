function number(number){
  let tmp =  number % 10 * tmp; //9
  let rev = number / 10 * rev; //1
  
  for (let i = 0; i < number.length; i++){
    rev = rev * 10 + tmp;
    tmp = Math.floor(tmp / 10);
  }
  console.log(rev);

}

number(19);


