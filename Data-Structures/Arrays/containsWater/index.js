/*
11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such 
that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container 
contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

*/

// O(N2)
// function calcArea(height){
//     let answer = 0

//     for(let i = 0; i < height.length; i++){
//         for(let j = i + 1; j < height.length; j++){
//             let area = (j - i) * Math.min(height[i], height[j])
//             answer = Math.max(area,answer)
//         }
//     }

//     return answer
// }

// console.log(calcArea([1,8,6,2,5,4,8,3,7]))


//O(N)
function calcArea(height){
   let left = 0
   let right = height.length - 1
   let answer = 0

   while(left < right){
    let area = (right - left) * Math.min(height[left], height[right])
    answer = Math.max(area, answer)

    if(height[right] > height[left]){
        left ++
    } else {
        right --
    }
   }

   return answer
}

console.log(calcArea([1,8,6,2,5,4,8,3,7]))