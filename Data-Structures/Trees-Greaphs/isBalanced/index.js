/*
110. Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.
*/

function balanced(root) {
  if (!root) return 1;
  let left = balanced(root.left);
  let right = balanced(root.right);

  if (left === false || right === false) return false;
  if (Math.abs(left - right) > 1) return false;
  return Math.max(left, right) + 1;
}
