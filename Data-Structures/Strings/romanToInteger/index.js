/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is 
written as XII, which is simply X + II. The number 27 is written as XXVII, 
which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However,
 the numeral for four is not IIII. Instead, the number four is written as IV. 
 Because the one is before the five we subtract it making four. The same principle 
 applies to the number nine, which is written as IX. There are six instances where 
 subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

function romanToInt(s) {
  let answer = 0;
  let newArr = s.split("");
  let p1 = 0; //Will be the starting pointer to itterate through the loop

  let hash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }; //object that will have a value associated with the key

  if (!s.length) {
    //if no string input return 0
    return answer;
  }

  while (p1 < s.length) {
    let p2 = p1 + 1; // will be the second pointer that will be after p1
    if (newArr[p1] === "I" && (newArr[p2] === "V" || newArr[p2] === "X")) {
      newArr[p2] === "V" ? (answer += 4) : (answer += 9);
      p1 += 2; // since the first 2 nums we looking at are a sepcial case p1 will skip                  to the next set of nums
    } else if (
      newArr[p1] === "X" &&
      (newArr[p2] === "L" || newArr[p2] === "C")
    ) {
      newArr[p2] === "L" ? (answer += 40) : (answer += 90);
      p1 += 2;
    } else if (
      newArr[p1] === "C" &&
      (newArr[p2] === "D" || newArr[p2] === "M")
    ) {
      newArr[p2] === "D" ? (answer += 400) : (answer += 900);
      p1 += 2;
    } else {
      answer += hash[newArr[p1]];
      p1++;
    }
  }
  return answer;
}
// MCMXCIV

console.log(romanToInt("MCMXCIV"));

//Using for loop
function romanToInt(s) {
  let answer = 0;
  let hash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  for (let i = 0; i < s.length; i++) {
    let currentVal = hash[s[i]];
    let nextVal = hash[s[i + 1]];

    if (nextVal && currentVal < nextVal) {
      answer -= currentVal; // Subtract if the current value is less than the next value
    } else {
      answer += currentVal; // Otherwise, add the current value
    }
  }

  return answer;
}

console.log(romanToInt("MCMXCIV")); // Output should be 1994
