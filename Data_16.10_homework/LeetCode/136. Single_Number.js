/**
 * @param {number[]} nums
 * @return {number}
 */

var nums = [2, 2, 1];

var singleNumber = function(nums) {
    let num = 0;
    for (let i = 0; i < nums.length; i++){
       num ^= nums[i];
    }
    return num;
};

console.log(singleNumber(nums));
