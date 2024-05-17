/*
101. Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself 
(i.e., symmetric around its center).
*/

function isSymetrical(root){
    if(!root) return true
    function isSame(left, right){
        if(left === null && right === null){
            return true 
        }
        if(left === null || right === null){
            return false
        }

        return left.val === right.val && isSame(left.left, right.right) && isSame(left.right, right.left)
    }
    return isSame(root.left, root.right)
}