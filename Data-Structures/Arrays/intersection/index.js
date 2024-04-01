/*

Challenge: 22-intersection
Difficulty: Intermediate
Prompt:
- Write a function named intersection that accepts two arguments which are both arrays.  
The array arguments may contain any mixture of strings, numbers and/or booleans - but no 
reference types, i.e., objects.
- The function should return a new array containing all elements in common, including 
repeating element values.
- The ordering of the elements in the returned array is not important.
- If there are no elements in the arrays in common,  the intersection function should
 return an empty array.
- The function should not mutate (change) either argument.
Examples:
intersection(['a', 1], []) //=> []
intersection(['a', 1], [true, 'a', 15]) //=> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]

*/

function intersection(arr, arr2) {
  let hash = {};
  let answer = [];

  if (!arr || !arr2) return [];

  for (const char of arr) {
    if (char in hash) {
      hash[char] = +1;
    } else {
      hash[char] = 1;
    }
  }
  for (const char of arr2) {
    if (char in hash) {
      hash[char] = +1;
      answer.push(char);
    }
  }

  return answer;
}

console.log(intersection([1, "a", true, 1, 1], [true, 1, "b", 1]));
