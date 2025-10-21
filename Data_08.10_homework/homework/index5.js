function indexOf(arr, search_Element, Element_index = 0) {
  
  if (Element_index < 0) {
    Element_index = arr.length + Element_index;
    if (Element_index < 0) Element_index = 0;
  }

  for (let i = Element_index; i < arr.length; i++) {
    if (arr[i] === search_Element) {
      return i;
    }
  }

  return -1;
}


const numbers = [10, 20, 30, 20, 40];

console.log(indexOf(numbers, 20));      
console.log(indexOf(numbers, 20, 2));   
console.log(indexOf(numbers, 50));      
