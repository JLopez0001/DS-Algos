function URLife(s, l) {
    let input = "%20"
    let sArray = s.split('')
    let newArray = []
    for (let i = 0; i < l; i++) {
      if (sArray[i] === ' ') {
        sArray[i] = input
        newArray.push(sArray[i])
      } else {
        newArray.push(sArray[i])
      }
    }
    console.log(newArray.join(''))
  
  }
  URLife("Mr John Smit       h      ", 3)