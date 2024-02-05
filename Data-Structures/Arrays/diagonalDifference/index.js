function diagonalDifference(arr) {
    // Write your code here
    let topArrItems = []
    let bottomArrItems = []
  
    let topArray = 0
    let bottomArray = arr.length - 1
  
    let topIdx = 0
    let bottomIdx = 0
  
    while (topArray <= bottomArray) {
      topArrItems.push(arr[topArray][topIdx])
      topArray++
      topIdx++
    }
  
    topArray = 0
  
    while (bottomArray >= topArray) {
      bottomArrItems.push(arr[bottomArray][bottomIdx])
      bottomArray--
      bottomIdx++
    }
  
    let sum1 = topArrItems.reduce((a,b) => a + b)
    let sum2 = bottomArrItems.reduce((a,b) => a + b)
  
    return Math.abs(sum1 - sum2)
  }
  
  console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 10]
  ]))