/*
543. Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any
 two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges 
between them.
*/

function diameter(root) {
  let maxheight = 0;

  function calcHeight(node) {
    if (node === null) return 0;

    let left = calcHeight(node.left);
    let right = calcHeight(node.right);

    maxheight = Math.max(maxheight, left + right);

    return 1 + Math.max(left, right);
  }

  calcHeight(root);
  return maxheight;
}
