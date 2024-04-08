/*
Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

We'll represent each customer order as a unique integer.

As an example,

  Take Out Orders: [1, 3, 5]
 Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 4, 6, 5, 3]
would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

But,

  Take Out Orders: [17, 8, 24]
 Dine In Orders: [12, 19, 2]
  Served Orders: [17, 8, 12, 19, 24, 2]
*/

function orders(arr1, arr2, servered) {
  let idx = 0;
  let count1 = 0;
  let count2 = 0;

  let hash1 = {};
  let hash2 = {};

  for (let i = 0; i < arr1.length; i++) {
    hash1[arr1[i]] = i;
  }

  for (let i = 0; i < arr2.length; i++) {
    hash2[arr2[i]] = i;
  }

  while (idx < servered.length) {
    console.log("im", idx);

    if (servered[idx] in hash1) {
      if (count1 === hash1[servered[idx]]) {
        count1++;
        idx++;
      } else {
        return false;
      }
    } else if (servered[idx] in hash2) {
      if (count2 === hash2[servered[idx]]) {
        count2++;
        idx++;
      } else {
        return false;
      }
    }
  }

  return true;
}

console.log(orders([17, 8, 24], [12, 19, 2], [17, 24, 12, 19, 8, 2]));
