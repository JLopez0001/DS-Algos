/*

268. Missing Number
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in 
the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

*/

// O(NLogN)
function nums(arr){
    let sort = arr.sort((a,b) => a - b)
    let count = 0

    for(let i = 0; i < sort.length; i++){
        if(sort[i] === count){
            count ++
        } else {
            return count 
        }
    }
    return count
}


// O(n)
function nums(arr){
    let n = arr.length

    const total = ( (n * (n + 1) / 2))

    const init = 0; 
    let arrSum = arr.reduce( (a,b) => a + b );

    return total - arrSum;
}


console.log(nums([0,1]))