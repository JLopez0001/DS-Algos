/*

Given an integer array nums, return true if any 
value appears at least twice in the array, and 
return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

*/

function dup(nums) {
  let hash = {};
  for (const num of nums) {
    if (num in hash) {
      return true;
    } else {
      hash[num] = true;
    }
  }
  return false;
}

console.log(dup([1, 2, 3, 1]));
