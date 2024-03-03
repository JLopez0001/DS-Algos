/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different
word or phrase, typically using all the original letters exactly once.

*/

//With lodash
// import _ from "lodash";

// function anagram(s, t) {
//   let sHash = {};
//   let tHash = {};

//   for (const char of s) {
//     if (char in sHash) {
//       sHash[char]++;
//     } else {
//       sHash[char] = 1;
//     }
//   }

//   for (const char of t) {
//     if (char in tHash) {
//       tHash[char]++;
//     } else {
//       tHash[char] = 1;
//     }
//   }

//   if (_.isEqual(sHash, tHash)) {
//     return true;
//   } else {
//     return false;
//   }
// }

//WithOut lodash

function anagram(s, t) {
  let sHash = {};
  let tHash = {};

  for (const char of s) {
    if (char in sHash) {
      sHash[char]++;
    } else {
      sHash[char] = 1;
    }
  }

  for (const char of t) {
    if (char in tHash) {
      tHash[char]++;
    } else {
      tHash[char] = 1;
    }
  }

  for (const char in sHash) {
    if (!(char in tHash) || sHash[char] !== tHash[char]) {
      return false;
    }
  }
  return true;
}

console.log(anagram("anagrasnodem", "nagaram"));
