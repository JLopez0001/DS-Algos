/*

  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.


  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers 

  array = [5, 1, 22, 25, 6, -1, 8, 10]
  sequence =  [1,6,-1, 10]

  Output: True

*/

function duplicate(arr,seq){
    let arrStart = 0;
    let seqStart = 0;

    while(seqStart < seq.length && arrStart < arr.length){
        let arrNum = arr[arrStart];
        let seqNum = seq[seqStart];

        if(seqNum !== arrNum){
            arrStart ++;
        } else {
            arrStart ++;
            seqStart ++;
        };
    }
 

    return seqStart === seq.length;

}

console.log(duplicate([5, 1, 22, 25, 6, -3, 8, 10],[1,6,-1, 10]))