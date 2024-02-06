
function isUnique(s){
    let unique = true
    let hash = {}
    for(const char of s){
      if(char in hash){
          unique = false
      } else {
        hash[char] = "boo"
        
      }
      
    }
    console.log(unique)
  }
  isUnique("thedogiss")