'use strict'; const log = console.log; (async ()=>{

/* Return the zigzag level order traversal of a BT
 * nodes values: from L to R, then R to L for the
 * next level and alternate between */

const zigzagLevelOrder = root => {
  if(!root) return [];
  const ans = [], nodeQ = [root, null];
  let isOrdrLeft = true, lvlL = [], node;

  while(nodeQ.length) {
    node = nodeQ.shift();
    if(node) {
      if(isOrdrLeft) lvlL.push   (node.val);
      else           lvlL.unshift(node.val);

      if(node.left)  nodeQ.push(node.left );
      if(node.right) nodeQ.push(node.right);
    }
    else {
      ans.push(lvlL);
      lvlL = [];
      if(nodeQ.length) nodeQ.push(null);
      isOrdrLeft = !isOrdrLeft;
    }
  }
  return ans;
};

// Space complexity: O(n) where n is # of nodes
// in BT & worst case is when BT is balanced.

// Example
// Input: [3,9,20,null,null,15,7]
//      3
//     / \
//    9  20
//      /  \
//     15   7
//
// Output
// [
//  [3],
//  [20,9],
//  [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

})();
