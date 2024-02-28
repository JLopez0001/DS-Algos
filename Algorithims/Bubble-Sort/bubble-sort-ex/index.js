// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  this is array destructuring
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([24, 9, 8, 4, 98, 10, -2]));

function bubbleSort(arr) {
  //handle edge cases ei undefined, when its already sorted
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  this is array destructuring
        noSwaps = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
console.log(bubbleSort([24, 9, 8, 4, 98, 10, -2]));
