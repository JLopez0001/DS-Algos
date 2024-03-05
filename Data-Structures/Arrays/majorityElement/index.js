/*

Given an array nums of size n, return the majority 
element.

The majority element is the element that appears 
more than ⌊n / 2⌋ times. You may assume that the 
majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

function element(nums) {
  let hash = {};
  let count = 0;
  let answer;
  for (const num of nums) {
    if (num in hash) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }

  for (const num in hash) {
    if (hash[num] > count) {
      count = hash[num];
      answer = num;
    }
  }

  return answer;
}

console.log(element([3, 2, 2, 3, 4, 5, 6, 3]));
