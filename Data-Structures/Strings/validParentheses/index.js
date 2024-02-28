/*
Given a string s containing just the characters 
'(', ')', '{', '}', '[' and ']', determine if the input 
string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

function validParentheses(s) {
  let arr = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    let first = s[i];
    console.log(map[first]);
    if (map[first]) {
      arr.push(first);
    } else {
      let last = arr.pop();
      if (map[last] !== first) {
        return false;
      }
    }
  }
  return arr.length === 0;
}

console.log(validParentheses("()[]{}"));
