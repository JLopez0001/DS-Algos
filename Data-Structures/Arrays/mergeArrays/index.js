/*
In order to win the prize for most cookies sold, my friend Alice and I are going to 
merge our Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function 
to merge our arrays of orders into one sorted array.

For example:

  const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

*/

function merge(arr1, arr2) {
  console.log(arr1, arr2);
  let answer = [];
  let arr1StartPointer = 0;
  let arr2StartPointer = 0;

  while (arr1StartPointer < arr1.length && arr2StartPointer < arr2.length) {
    if (arr1[arr1StartPointer] < arr2[arr2StartPointer]) {
      answer.push(arr1[arr1StartPointer]);
      arr1StartPointer++;
    } else if (arr1[arr1StartPointer] > arr2[arr2StartPointer]) {
      answer.push(arr2[arr2StartPointer]);
      arr2StartPointer++;
    } else {
      answer.push(arr1[arr1StartPointer], arr2[arr2StartPointer]);
      arr1StartPointer++;
      arr2StartPointer++;
    }
  }

  while (arr1StartPointer < arr1.length) {
    answer.push(arr1[arr1StartPointer]);
    arr1StartPointer++;
  }

  while (arr2StartPointer < arr2.length) {
    answer.push(arr2[arr2StartPointer]);
    arr2StartPointer++;
  }

  return answer;
}

console.log(merge([3, 4], [1, 5, 8, 12, 14, 19]));
