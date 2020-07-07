// Sum of Binary Tree nodes
// Time O(n)

const f = function g(node) {
  if(!node)
    return 0;

  return g(node.left)
       + node.val
       + g(node.right);
};
