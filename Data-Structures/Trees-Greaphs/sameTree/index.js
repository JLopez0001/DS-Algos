/*
100. Same Tree

Given the roots of two binary trees p and q, write a function to check 
if they are the same or not.

Two binary trees are considered the same if they are structurally identical,
and the nodes have the same value.
*/

function sameTree(p, q) {
  if (p === null && q === null) return true;
  if ((p === null && q !== null) || (p !== null && q === null)) return false;
  if (p.val !== q.val) return false;

  return sameTree(p.left, q.left) && sameTree(p.right, q.right);
}
