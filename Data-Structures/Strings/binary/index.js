/*

67. Add Binary

Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/

function addBinary(a, b) {
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    if (i >= 0) sum += parseInt(a[i]); // Convert binary digit to integer
    if (j >= 0) sum += parseInt(b[j]); // Convert binary digit to integer

    carry = Math.floor(sum / 2); // Compute carry for next iteration
    result = (sum % 2) + result; // Prepend binary digit to result

    i--;
    j--;
  }
  return result;
}

console.log(addBinary("11", "1"));
