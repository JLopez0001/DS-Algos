/*

283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

*/

function zero(arr){
    let left = 0
    let right = 1
    console.log(arr)
    while(right < arr.length){
        if(arr[left] === 0 && arr[right] !== 0){
            swap(left,right,arr)
            console.log(arr)
            left ++
        } else if(arr[left]!= 0){
           left ++
        } 
        right ++
    }
    return arr
}

function swap(left,right,arr){
    let temp = arr[right]
    arr[right] = arr[left]
    arr[left] = temp
}

console.log(zero([1,0,3,0,5]))