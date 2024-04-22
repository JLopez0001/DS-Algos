/*
235. Lowest Common Ancestor of a Binary Search Tree
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two
 given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is 
defined between two nodes p and q as the lowest node in T that has both p and q as 
descendants (where we allow a node to be a descendant of itself).”
*/

// RECURSIVE O(H) / O(H)
function lca(root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lca(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lca(root.right, p, q);
  } else {
    return root;
  }
}

// ITERATIVE O(H) / O(1)
function lca(root, p, q) {
  let current = root;
  while (current) {
    if (p.val < current.val && q.val < current.val) {
      current = current.left;
    } else if (p.val > root.val && q.val > root.val) {
      current = current.right;
    } else {
      return current;
    }
  }
}
