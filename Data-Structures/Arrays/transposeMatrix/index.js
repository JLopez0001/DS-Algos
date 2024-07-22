/*

    You're given a 2D array of integers <span>matrix</span>. Write a function
    that returns the transpose of the matrix.

    You're given a 2D array of integers <span>matrix</span>. Write a function
    that returns the transpose of the matrix.

    You're given a 2D array of integers <span>matrix</span>. Write a function
    that returns the transpose of the matrix.

    matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
   ]

   [
    [1, 3, 5],
    [2, 4, 6]
  ]

*/

function matrix(arr){
    let answer = [];
    
    for(let i = 0; i < arr[0].length; i++){
        let row = [];
        for(let j = 0; j < arr.length; j ++){
            row.push(arr[j][i])
            console.log(row)
        }
        answer.push(row)
    }
    return answer
}

console.log(matrix([
    [1, 2],
    [3, 4],
    [5, 6]
   ]))