/*
There is a large pile of socks that must be paired by color. Given an 
array of integers representing the color of each sock, determine how 
many pairs of socks with matching colors there are.
*/

function sockMerchant(n, ar) {
  // Write your code here
  let hash = {};
  let pairs = 0;

  for (const num of ar) {
    if (num in hash) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }

  for (const num in hash) {
    if (hash[num] % 2 === 0) {
      pairs += hash[num] / 2;
    } else if (hash[num] % 2 !== 0) {
      pairs += (hash[num] - 1) / 2;
    }
  }

  console.log(pairs);
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
