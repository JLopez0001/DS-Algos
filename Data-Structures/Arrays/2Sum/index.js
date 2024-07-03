/*
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.

  array = [3, 5, -4, 8, 11, 1, -1, 6]
  targetSum = 10
*/

//O(N2)
function twoSum(nums, target){
    for(let i = 0; i < nums.length; i ++){
        let first = nums[i];
        for(let j = i + 1; j < nums.length; j++){
            let second = nums[j];
            if(first + second === target){
                return [i, j]; // [first, second]
            };
        };
    };
    return [];
};

console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10))


//O(N)
function optimal(nums,target){
    let map = {};
    for(const num of nums){
        let sum = target - num;
        if(sum in map){
            return [sum,num]
        } else {
            map[num] = true 
        };
    };
    return []
};

console.log(optimal([3, 5, -4, 8, 11, 1, -1, 6], 10))