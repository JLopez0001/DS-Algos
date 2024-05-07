/*
136. Single Number

Given a non-empty array of integers nums, every element appears twice except f
or one. Find that single one.

You must implement a solution with a linear runtime complexity and use only 
constant extra space.
*/

function num(arr) {
  let hash = {};

  for (const num of arr) {
    if (num in hash) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }
  return Object.keys(hash).find((key) => hash[key] === 1);
}

console.log(num([1, 2, 2, 1, 4]));
