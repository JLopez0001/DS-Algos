/*

  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. The function should find all triplets in
  the array that sum up to the target sum and return a two-dimensional array of
  all these triplets. The numbers in each triplet should be ordered in ascending
  order, and the triplets themselves should be ordered in ascending order with
  respect to the numbers they hold.

  
  If no three numbers sum up to the target sum, the function should return an
  empty array.

  array = [12, 3, 1, 2, -6, 5, -8, 6]
  targetSum = 0

  [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

</pre>
*/

function threeSum(arr, target) {
  let answer = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let next = i + 1;
    let end = arr.length - 1;

    while (next < end) {
      let sum = arr[i] + arr[next] + arr[end];
      if (sum === target) {
        answer.push([arr[i], arr[next], arr[end]]);
        next++;
        end--;
      } else if (sum > target) {
        end--;
      } else {
        next++;
      }
    }
  }

  return answer;
}

console.log(threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
// [-8, -6, 1,  2, 3,  5, 6, 12 ]
