'use strict'; const log = console.log; (async ()=>{

const invertTree = function f(root) {
  if(!root)
    return null;
  const right = f(root.right);
  const left = f(root.left);
  root.left = right;
  root.right = left;
  return root;
};

})();
