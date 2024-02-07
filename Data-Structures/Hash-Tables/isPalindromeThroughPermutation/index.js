function isPalindrome(str) {
    let alpha = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 }
  
    let newString = str.toLowerCase().split('')
  
    let newObject = {}
    let length = Object.keys(newObject).length;
  
    let answer = []
  
    for (const char of newString) {
      if (char in alpha) {
        alpha[char]++
        newObject[char] = alpha[char]
      }
    }
  
    for (const key in newObject) {
      if (newObject[key] % 2 != 0) {
        answer.push(newObject[key])
      }
    }
  
    if (answer.length > 1) {
      console.log('false')
    } else {
      console.log('true')
    }
  }
  
  isPalindrome('bbcss')