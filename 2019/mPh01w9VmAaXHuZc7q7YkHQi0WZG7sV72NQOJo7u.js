'use strict'; const log = console.log; (async ()=>{

const lowestCommonAncestor =
                          function f(root, p, q) {
  const rootVal = root.val,
        pVal    = p.val,
        qVal    = q.val;
  if(rootVal < pVal && rootVal < qVal)
    return f(root.right, p, q);
  else if(pVal < rootVal && qVal < rootVal)
    return f(root.left, p, q);
  else
    return root;
};

})();
