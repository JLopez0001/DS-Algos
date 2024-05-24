/*

680. Valid Palindrome II

Given a string s, return true if the s can be palindrome after deleting at most 
one character from it.

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false

*/

function validP(s){
    let start = 0;
    let end  = s.length - 1;

    while(start < end){
        if(s[start] !== s[end]){
            return helper(start, end - 1) || helper(start + 1, end)
        }

        start ++
        end --
    }

    function helper(start, end){
        while(start < end){
            if(s[start] !== s[end]){
                return false 
            }

            start ++
            end --
        }
    }

    return true 
}

console.log(validP('abba'))