/*-----------------------------------------------------------------
Challenge: 11-isPalindrome
Difficulty: Intermediate
Prompt:
- Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
- A palindrome is a word or phrase that are the same forward or backward.
- Casing and spaces are not included when considering whether or not a string is a palindrome.
- If the length of the string is 0 or 1, return true.
Examples:
isPalindrome('SEI Rocks'); //=> false
isPalindrome('rotor'); //=> true
isPalindrome('A nut for a jar of tuna'); //=> true
isPalindrome(''); //=> true
-----------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true;
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let firstChar = 0;
  let last = str.length - 1;

  while (firstChar < last) {
    if (str[firstChar] !== str[last]) {
      return false;
    }
    firstChar++;
    last--;
  }
  return true;
}

console.log(isPalindrome("A nut for a jar of tuna"));
