/*
88. Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1
and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but 
instead be stored inside the array nums1. To accommodate this, nums1 has a 
length of m + n, where the first m elements denote the elements that should 
be merged, and the last n elements are set to 0 and should be ignored. 
nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1.
The 0 is only there to ensure the merge result can fit in nums1.
 
*/

//NOT THE CORRECT APPROACH
function merge(nums1, m, nums2, n){
    let answer = []
    let p1 = 0
    let p2 = 0

    while(p1 < m && p2 < n){
        if(nums1[p1] < nums2[p2]){
            answer.push(nums1[p1])
            p1 ++
        } else if(nums1[p1] > nums2[p2]){
            answer.push(nums2[p2])
            p2 ++
        } else {
            answer.push(nums1[p1], nums2[p2])
            p1 ++
            p2++
        }
    }

    while(p1 < m){
        answer.push(nums1[p1]);
        p1++;
    }

    while (p2 < n) {
        answer.push(nums2[p2]);
        p2++;
    }
    nums1 = answer
    return nums1
}

// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))

//CORRECT APPROACH
//YOU WANT TO START FROM THE BACK OF NUMS1
function mergedSorted(nums1, m, nums2, n){
    let p1 = m - 1
    let p2 = n - 1
    let p = m + n - 1

    while(p1 >= 0 && p2 >= 0){
        if(nums1[p1] > nums2[p2]){
            nums1[p] = nums1[p1]
            p1 --
        } else {
            nums1[p] = nums2[p2]
            p2 --
        }
        p--
    }

    while(p2 >= 0){
        nums1[p] = nums2[p2]
        p2 --
        p --
    }

    return nums1
}

console.log(mergedSorted([1,2,3,0,0,0],3,[2,5,6],3))