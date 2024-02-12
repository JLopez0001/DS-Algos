function stringComparison(str) {

    let strArray = str.split('')
    let answer = []
  
    let count = 1
    let firstChar = 0
    let secondChar = firstChar + 1
  
    while (firstChar < strArray.length) {
      if (strArray[firstChar] !== strArray[secondChar]) {
        answer.push(strArray[firstChar], count)
        firstChar++
        secondChar++
        count = 1
  
      }
      else {
        count++
        firstChar++
        secondChar++
      }
    }
  
    if (strArray.length > answer.length) {
      console.log(answer.join(''))
    } else {
      console.log(strArray.join(''))
    }
  
  }
  
  stringComparison('aaAAbccBBcccaaa')