/*
You are in charge of the cake for a child's birthday.
 You have decided the cake will have one candle for
each year of their total age. They will only be 
able to blow out the tallest of the candles. Count
how many candles are tallest.
*/

function birthdayCakeCandles(candles) {
  // Write your code here

  let hash = {};
  let max = 1;

  for (const num of candles) {
    if (num in hash) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }

  for (const num in hash) {
    if (hash[num] > max) {
      max = hash[num];
    }
  }

  return max;
}

console.log(birthdayCakeCandles([4, 4, 3, 1, 1, 1, 2]));
