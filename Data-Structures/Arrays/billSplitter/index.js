/*
https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
Function Description

Complete the bonAppetit function in the editor below. It should print Bon Appetit 
if the bill is fairly split. Otherwise, it should print the integer amount of money 
that Brian owes Anna.

bonAppetit has the following parameter(s):

bill: an array of integers representing the cost of each item ordered
k: an integer representing the zero-based index of the item Anna doesn't eat
b: the amount of money that Anna contributed to the bill
*/

function bonAppetit(bill, k, b) {
  // Write your code here
  let totalSum = 0;
  let annaSum = 0;
  let newArr = [];
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      newArr.push(bill[i]);
      totalSum += bill[i];
    }
  }
  for (const num of newArr) {
    annaSum += num;
  }

  totalSum /= 2;
  annaSum /= 2;

  if (b === annaSum) {
    console.log("Bon Appetit");
  } else {
    console.log(b - annaSum);
  }
}
