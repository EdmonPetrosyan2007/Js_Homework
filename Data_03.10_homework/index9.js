/*function Contains_Substring(str, sub) {
  return str.includes(sub);
}

console.log(Contains_Substring("JavaScript", "Java"));
*/

function text_like(text , text_like_1){
   for(let i = 0; i < text.length; i++ ){
     for(let j = 0; j < text_like_1.length; j++){
       if(text[i + j] !== text_like_1[j]){
         break;
       }
       if(j === text_like_1.length - 1){
         return true;
       }
    }
 }  
 return false;
}
let text = "Learning JavaScript";
let text_like_1 = "Java"

console.log(text_like(text , text_like_1));

