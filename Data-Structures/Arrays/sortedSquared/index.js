/*

  Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.

  array = [1, 2, 3, 5, 6, 8, 9]
  output = [1, 4, 9, 25, 36, 64, 81]

*/

function squared(arr){
    let answer = [];

    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let squaredStart = Math.abs(arr[start] * arr[start]);
        let squaredEnd = Math.abs(arr[end] * arr[end]);

        if(squaredStart < squaredEnd){
            answer.push(squaredStart)
            start ++
        } else {
            answer.push(squaredEnd)
            end --
        };
    };

    return answer;
};

console.log(squared([-5, -4, -3, -2, -1]))