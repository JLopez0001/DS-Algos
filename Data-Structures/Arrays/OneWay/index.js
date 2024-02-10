function OneWay(str1, str2) {
    let s1 = str1.split('')
    let s2 = str2.split('')
  
    let longestString = s1.length > s2.length || s1.length === s2.length ? s1 : s2;
    let shortestString = s1.length < s2.length ? s1 : s2;

    let difference = longestString.length - shortestString.length
  
    if(difference > 2){
      console.log( false ) 
    }
  
    let idx = 0
    let sub = "^"
    let edits = 0
  
  
    while(shortestString.length < longestString.length){
      if(shortestString[idx] === longestString[idx]){
        idx++
      } else {
        shortestString.splice(idx,0,sub)
      }
    }

    idx = 0
    while(idx < longestString.length){
        if(longestString[idx] != shortestString[idx]){
            edits ++
            idx ++
        } else {
            idx ++
        }
    }
    
    console.log(edits)

    if(edits > 1){ 
        console.log(false)
    } else {
        console.log(true)
    }
    
  
  }
  
  OneWay('pale', 'bake')