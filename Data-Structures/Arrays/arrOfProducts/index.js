/*

  Write a function that takes in a non-empty array of integers and returns an
  array of the same length, where each element in the output array is equal to
  the product of every other number in the input array.

  In other words, the value at output[i] is equal to the product of
  every number in the input array other thaninput[i].

  Note that you're expected to solve this problem without using division.
  Sample Input
  array = [5, 1, 4, 2]

  Sample Output
  [8, 40, 10, 20]
  8 is equal to 1 x 4 x 2
  40 is equal to 5 x 4 x 2
  10 is equal to 5 x 1 x 2
  10 is equal to 5 x 1 x 2
  20 is equal to 5 x 1 x 4
*/

function products(array){
    let answer = new Array(array.length).fill(1);
    
    let left = 1;
    for(let i = 0; i < array.length; i ++){
        answer[i] *= left;
        left *= array[i];
    };

    let right = 1;
    for(let j = array.length - 1; j >= 0; j--){
        answer[j] *= right;
        right *= array[j];
    };

    return answer;
}

console.log(products( [5, 1, 4, 2]))