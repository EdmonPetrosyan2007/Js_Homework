function foo(a ,b, c){
   if(Math.abs((a + b) - c) < Number.EPSILON){
     return true;
   } else {
     return false;
   }    
}
console.log(foo(0.1, 0.2, 0.3));