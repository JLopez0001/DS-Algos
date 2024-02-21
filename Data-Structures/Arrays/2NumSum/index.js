/*
Given an array of integers nums and an integer 
target, return indices of the two numbers such 
that they add up to target.
You may assume that each input would have exactly 
one solution, and you may not use the same element 
twice.
You can return the answer in any order.
*/

var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let firstNum = nums[i];
    let n = target - firstNum;
    if (n in hash) {
      console.log(hash[n]);
      return [hash[n], i];
    } else {
      hash[firstNum] = i;
      console.log(hash);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
