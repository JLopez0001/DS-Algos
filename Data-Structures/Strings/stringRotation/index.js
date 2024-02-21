/*
Question: “Assume you have a method isSubstring which checks if one 
word is a substring of another. Given two strings, s1 and s2, write code 
to check if s2 is a rotation of s1 using only one call to isSubstring
(e.g,”waterbottle” is a rotation of “erbottlewat””
*/

function stringRoation(s1, s2) {
  console.log(s1, s2);
  let s1Pointer = 0;
  let s2Pointer = 0;
  let xString = "";
  let yString = "";

  if (s1.length !== s2.length) {
    return false;
  }

  while (s1Pointer < s1.length) {
    if (s2[s2Pointer] !== s1[s1Pointer]) {
      xString += s1[s1Pointer];
      s1Pointer++;
    } else if (s2[s2Pointer] === s1[s1Pointer]) {
      yString += s1[s1Pointer];
      s1Pointer++;
      s2Pointer++;
    }
  }

  if (yString + xString === s2) {
    return true;
  } else {
    return false;
  }

  console.log(xString, yString);
}
console.log(stringRoation("waterbottle", "erbottlewat"));
