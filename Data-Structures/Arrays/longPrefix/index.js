/*
14. Longest Common Prefix

Write a function to find the longest common prefix string 
amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

// O(N^2)
function long(str) {
  if (!str.length) return "";

  for (let i = 0; i < str[0].length; i++) {
    for (let j = 1; j < str.length; j++) {
      if (str[0][i] !== str[j][i]) {
        return str[0].slice(0, i);
      }
    }
  }
  return str[0];
}

//O(N)
function prefix(str) {
  if (!str.length) return "";

  for (let i = 0; i < str[0].length; i++) {
    if (!str.every((string) => string[i] === str[0][i])) {
      return str[0].slice(0, i);
    }
  }
  return str[0];
}

console.log(prefix(["flag", "flavor", "flame"]));
