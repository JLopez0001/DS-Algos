/*
572. Subtree of Another Tree

Given the roots of two binary trees root and subRoot, return true if there is 
a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and 
all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

*/

function isSubTree(root, subRoot){
    if(!root) return false 
    if(isSame(root,subRoot)) return true 

    return isSubTree(root.left, subRoot) || isSubTree(root.right, subRoot) 
}

function isSame(s,t){
    if(!s || !t) return false
    if(!s && !t) return true 
    
    return s.val == t.val && isSame(s.left,t.left) && isSame(s.right, t.right)

}