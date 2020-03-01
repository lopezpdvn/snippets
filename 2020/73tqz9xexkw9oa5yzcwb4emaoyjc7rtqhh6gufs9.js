'use strict'; const log = console.log; (async ()=>{

// Given a binary tree, determine if it's a valid
// BST. Assume a BST is defined as follows:
// - The left subtree of a node contains only
//   nodes with keys less than the node's key.
// - The right subtree of a node contains only
//   nodes with keys greater than the node's key.
// - Both the left and right subtrees must also
//   be BSTs
const isValidBST =
  (root, stack = [], lows = [], upps = []) => {

  updt([root, null, null], [stack, lows, upps]);

  while(stack.length) {
    root = stack.pop();
    const lower = lows.pop(), upper = upps.pop();
    
    if(!root) continue;
    const val = root.val;
    if(lower !== null && val   <= lower)
      return false;
    if(upper !== null && upper <= val  )
      return false;
    updt([root.right, val  , upper],
         [stack     , lows , upps ]);
    updt([root.left , lower, val  ],
         [stack     , lows , upps ]);
  }
  return true;
};

const updt = (vals, stacks) =>
  stacks.forEach((stck, i) => stck.push(vals[i]));

class TreeNode {
  constructor(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
}

// Time complexity:  O(n)
// Space complexity: O(n)

})();
