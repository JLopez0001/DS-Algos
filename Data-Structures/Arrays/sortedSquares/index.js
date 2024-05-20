/*

977. Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an 
array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

*/

function sorted(nums){
    if(!nums) return nums

    let n = nums.length;
    let left = 0;
    let right = n - 1; 
    let position = n - 1
    let arr = new Array(n)

    while(left <= right){
        let leftSorted = nums[left] * nums[left]
        let rightSorted = nums[right] * nums[right]

        if(rightSorted > leftSorted){
            arr[position] = rightSorted
            right --
        } else {
            arr[position] = leftSorted
            left ++
        }
        position --
    }
    return arr
}

console.log(sorted([-4,-1,0,3,10]))