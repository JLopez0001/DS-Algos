/*
https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

Given an array of bird sightings where every element represents a 
bird type id, determine the id of the most frequently sighted type. 
If more than 1 type has been spotted that maximum amount, 
return the smallest of their ids.
*/

function migratoryBirds(arr) {
  // Write your code here
  let hash = {};
  let blah = 1;
  let compareArr = [];

  for (const num of arr) {
    if (num in hash) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }

  for (const num in hash) {
    if (hash[num] >= blah) {
      blah = hash[num];
    }
  }

  for (const key in hash) {
    if (hash[key] === blah) {
      compareArr.push(key);
    }
  }

  for (const i of compareArr) {
    return Math.min(i);
  }
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 5, 5, 3]));
