var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    
    let value = right - left;
    let min_Height = Math.min(height[left], height[right]);
    let S_value = value * min_Height;

    max = Math.max(max, S_value);

    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
//console.log(maxArea([1, 1]));

