/*
953. Verifying an Alien Dictionary

In an alien language, surprisingly, they also use English lowercase letters, but possibly 
in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, 
return true if and only if the given words are sorted lexicographically in this alien language.

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], 
hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (
in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', 
where '∅' is defined as the blank character which is less than any other character (More info).

*/

function alien(words,order){
    let map = {}
    for(let i = 0; i < order.length; i ++){
        map[order[i]] = i
    }

    for(let i = 0; i < words.length - 1; i ++){
        const first = words[i]
        const second = words[i + 1]
        
        let j = 0

        while(j < first.length && j < second.length && first[j] === second[j]){
            j++
        }

        if(j < first.length || j < second.length){
            if(map[first[j]] > map[second[j]]){
                return false
            } else if(j >= second.length){
                return false
            }
        }
    }

    return true 
}

console.log(alien(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"))