/*

  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you <b>cannot</b> create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).

  For example, if you're given coins = [1, 2, 5], the minimum
  amount of change that you can't create is 4. If you're given no
  coins, the minimum amount of change that you can't create is 1.

  coins =  [5, 7, 1, 1, 2, 3, 22]

  output = 20

*/

function conCoins(coins){
    if(coins.length === 0) return 1

    let sorted = coins.sort((a,b) => a - b)
    let answer = 1

    for(let i = 0; i < sorted.length; i ++){
        let coin = sorted[i]

        if (coin > answer) {
            break;
        }
        answer += coin;
    }
    return answer
}

console.log(conCoins([1]))
