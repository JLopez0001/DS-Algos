/*

  Write a function that takes in an n x m two-dimensional array (that can be
  square-shaped when n == m) and returns a one-dimensional array of all the
  array's elements in spiral order.


  Spiral order starts at the top left corner of the two-dimensional array, goes
  to the right, and proceeds in a spiral pattern all the way until every element
  has been visited.

  array = [
    [1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7],
   ]

   output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

*/

function spiralTraverse (array){
    let answer = [];
    let col = 0;
    let row = 0;
    let endCol = array[0].length - 1; 
    let endRow = array.length - 1;

    while(col < endCol && row < endRow){
        for(let i = col; i <= endCol; i++){
            answer.push(array[row][i])
        }
    
        for(let i = row + 1; i <= endCol; i ++ ){
            answer.push(array[i][endCol])
        }

        for(let i = endCol - 1; i >= col; i --){
            answer.push(array[endRow][i])
        }

        for(let i = endRow - 1; i > row; i --){
            answer.push(array[i][row])
        }
        col ++
        row ++
        endCol --
        endRow --
    }
    return answer;
}

console.log(spiralTraverse([
    [1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7],
   ]))