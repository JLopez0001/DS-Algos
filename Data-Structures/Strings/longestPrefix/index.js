/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

function prefix(str){
    if(str.length === 0) return ''

    str.sort()
    let prefix = ''
    let first = str[0]
    let last = str[str.length - 1]

    for(let i = 0; i < first.length; i++){
        if(first[i] === last[i]){
            prefix += first[i]
        } else {
            break
        }
    }

    return prefix
}

console.log(prefix(["flower","flow","floight"]))