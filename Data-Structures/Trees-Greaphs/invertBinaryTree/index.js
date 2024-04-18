/*
226. Invert Binary Tree
Given the root of a binary tree, invert the tree, and return its root.
*/

function invert(tree) {
  // Base case: if the current node is null, simply return null
  // This is important for the leaf nodes' children.
  if (tree === null) {
    return null;
  }

  // Swap the left and right children of the current node
  const temp = tree.left;
  tree.left = invert(tree.right); // Recursively invert the right subtree
  tree.right = invert(temp); // Recursively invert the left subtree, which is now in temp

  return tree;
}

//second
function invertTree(root) {
  if (root === null) {
    return null;
  }
  // Swap the left and right children
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert the children
  invertTree(root.left);
  invertTree(root.right);

  return root;
}
