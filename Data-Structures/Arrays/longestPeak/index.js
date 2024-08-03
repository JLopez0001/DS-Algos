/*


  Write a function that takes in an array of integers and returns the length of
  the longest peak in the array.


  A peak is defined as adjacent integers in the array that are strictly
  increasing until they reach a tip (the highest value in the peak), at which
  point they become strictly decreasing. At least three integers are required to
  form a peak.


  For example, the integers 1, 4, 10, 2 form a peak, but the
  integers 4, 0, 10 don't and neither do the integers
  1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't
  form a peak because there aren't any strictly decreasing integers after the
  3.


   array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

   Sample Output
   6 // 0, 10, 6, 5, -1, -3

*/

function peak(array){
    let answer = 0;
    for(let i = 1; i < array.length - 1; i ++){
        let left = i;
        let right = i;

        while(array[right + 1] < array[right]){
            right ++
        };

        while(array[left - 1] < array[left]){
            left --
        };

        if(right > i && left < i){
            answer = Math.max(answer,right - left + 1)
        }
    }


    return answer
}

console.log(peak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))