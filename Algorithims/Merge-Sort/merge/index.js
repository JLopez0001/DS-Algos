//Both Arrays need to be sorted within each other.

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
console.log(mergeSort([14, 22, 78, 63, 74, 1, 10]));

// console.log(merge([2, 14, 99, 100], [1, 19, 30, 101, 300, 900]));
