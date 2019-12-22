// Given a binary tree, determine if it's a valid
// BST. Assume a BST is defined as follows:
// - The left subtree of a node contains only
//   nodes with keys less than the node's key.
// - The right subtree of a node contains only
//   nodes with keys greater than the node's key.
// - Both the left and right subtrees must also
//   be BSTs
const isValidBST = root => {
  return _isValidBST(root, null, null); };

const _isValidBST = function f(root, min, max) {
  if(!root                     ) return true ;
  const val = root.val                       ;
  if(min !== null && val <= min) return false;
  if(max !== null && max <= val) return false;
  if(!f(root.left , min, val)  ) return false;
  if(!f(root.right, val, max)  ) return false;
  return true;
};

// Complexity analysis
// - Time: O(n)
// - Space: O(n) worst

class TreeNode {
  constructor(x) { this.val = x;
    this.left = null; this.right = null; }
}

// Example 1:
//
//     2
//    / \
//   1   3
//
// Input: [2,1,3]
// Output: true

// Example 2:
//
//     5
//    / \
//   1   4
//      / \
//     3   6
//
// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but
// its right child's value is 4.