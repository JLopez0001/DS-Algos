/*

  You're given an array of integers and an integer. Write a function that moves
  all instances of that integer in the array to the end of the array and returns
  the array.


  The function should perform this in place (i.e., it should mutate the input
  array) and doesn't need to maintain the order of the other integers.

  array = [2, 1, 2, 2, 2, 3, 4, 2]
  toMove = 2
  output = [1, 3, 4, 2, 2, 2, 2, 2]
</pre>

*/

function end(arr,move){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let leftNum = arr[left];
        let rightNum = arr[right];

        if(rightNum === move){
            right --
        } if(leftNum === move){
            swap(left,right,arr)
            left ++
            right --
        } else if(leftNum !== move){
            left ++
        }
    }

    return arr
}

function swap(left,right,arr){
    let temp = arr[right];
    arr[right] = arr[left]
    arr[left] = temp
}

console.log(end([2, 1, 2, 2, 2, 3, 4, 2],2))