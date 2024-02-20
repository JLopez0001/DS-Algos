/*
Given an array of integers and a positive integer k, 
determine the number of (i,j) pairs where i < j 
and arr[i] + arr[j]  is divisible by k .
*/

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = ar[i] + ar[j];
      if (sum % k === 0) {
        count++;
      }
    }
  }
  return count;
}

console.log(divisibleSumPairs(10, 3, [29, 97, 52, 86, 27, 89, 77, 19, 99, 96]));
