/*

Given two strings ransomNote and magazine, return true if ransomNote can be 
constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

*/

function note(note, magazine) {
  let nHash = {};
  let mHash = {};

  for (const char of note) {
    if (char in nHash) {
      nHash[char]++;
    } else {
      nHash[char] = 1;
    }
  }

  for (const char of magazine) {
    if (char in mHash) {
      mHash[char]++;
    } else {
      mHash[char] = 1;
    }
  }

  for (const char in nHash) {
    if (!(char in mHash) || nHash[char] > mHash[char]) {
      return false;
    }
  }

  return true;
}

console.log(note("aad", "aab"));
