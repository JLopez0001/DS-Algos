/*
Two children, Lily and Ron, want to share a chocolate 
bar. Each of the squares has an integer on it.
Lily decides to share a contiguous segment of the bar 
selected such that:
The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.
*/

function birthday(s, d, m) {
  // Write your code here
  let start = 0;
  let i = m;

  let sum = 0;
  let count = 0;

  while (i <= s.length) {
    let newArr = s.slice(start, i);
    for (const num of newArr) {
      sum += num;
    }
    if (sum === d) {
      count++;
      sum = 0;
      start++;
      i++;
    } else {
      sum = 0;
      start++;
      i++;
    }
  }
  return count;
}
console.log(birthday([2, 2, 1, 3, 2], 4, 2));
