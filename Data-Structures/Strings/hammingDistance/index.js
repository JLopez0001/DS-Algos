/*-----------------------------------------------------------------
Challenge: 12-hammingDistance
Difficulty: Intermediate
Prompt:
In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.
- Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
- The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.
Examples:
hammingDistance('abc', 'abc'); //=> 0
hammingDistance('a1c', 'a2c'); //=> 1
hammingDistance('!!!!', '****'); //=> 4
hammingDistance('abc', 'ab'); //=> NaN
-----------------------------------------------------------------*/
// Your solution for 12-hammingDistance here:

function hammingDistance(s1, s2) {
  if (s1.length !== s2.length) {
    return NaNwqa;
  }
  let count = 0;
  let p1 = 0;
  let p2 = 0;
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");

  while (p1 < s1Arr.length && p2 < s2Arr.length) {
    if (s1Arr[p1] === s2Arr[p2]) {
      p1++;
      p2++;
    } else {
      count++;
      p1++;
      p2++;
    }
  }
  return count;
}

console.log(hammingDistance("a2c", "abc"));
