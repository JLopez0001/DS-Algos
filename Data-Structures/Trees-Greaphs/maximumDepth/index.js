/*
104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum 
depth.

A binary tree's maximum depth is the number of nodes
along the longest path from the root node down to 
the farthest leaf node.
*/

function maxDepth(root) {
  return calcDepth(root);
}

function calcDepth(node) {
  if (node === null) return 0;

  let left = calcDepth(node.left);
  let right = calcDepth(node.right);

  return Math.max(left, right) + 1;
}
