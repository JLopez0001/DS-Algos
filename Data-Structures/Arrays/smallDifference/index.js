/*

  Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position.


  Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position.

  arrayOne= [-1, 5, 10, 20, 28, 3]
  arrayTwo = [26, 134, 135, 15, 17]

  [28, 26]

*/

function difference(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let answer;
  let min = Infinity;
  let left = 0;
  let right = 0;

  while (left < arr1.length && right < arr2.length) {
    let sum = Math.abs(arr1[left] - arr2[right]);

    if (sum === 0) {
      return [arr1[left], arr2[right]];
    }

    if (sum < min) {
      min = sum;
      answer = [arr1[left], arr2[right]];
    } else if (arr1[left] < arr2[right]) {
      left++;
    } else if (arr1[left] > arr2[right]) {
      right++;
    }
  }

  return answer;
}

console.log(difference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
