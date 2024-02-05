function plusMinus(arr) {
    // Write your code 
    let length = arr.length
    let sorted = arr.sort((a, b) => a - b)
  
    let negative = []
    let positive = []
    let zero = []
  
  
    for (const num of sorted) {
      if (num < 0) {
        negative.push(num)
      } else if (num > 0) {
        positive.push(num)
      } else {
        zero.push(num)
      }
    }
  
    let negativeSum = (negative.length / length).toFixed(6)
    let positiveSum = (positive.length / length).toFixed(6)
    let zeroSum = (zero.length / length).toFixed(6)
  
    console.log(negativeSum)
  }
  plusMinus([1, 2, 3, -1, -2, -3, 0, 0])
  