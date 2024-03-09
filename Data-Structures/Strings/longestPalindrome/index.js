/* 
409. Longest Palindrome

Given a string s which consists of lowercase or uppercase letters, return the length 
of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

*/

function pal(s) {
  let odd = false;
  let hash = {};
  let answer = 0;

  for (const char of s) {
    if (char in hash) hash[char]++;
    else {
      hash[char] = 1;
    }
  }
  for (const char in hash) {
    if (hash[char] % 2 === 0) {
      answer += hash[char];
    } else {
      answer += hash[char] - 1;
      odd = true;
    }
  }
  if (odd) {
    answer += 1;
  }

  return answer;
}
console.log(pal("abccccdd"));
