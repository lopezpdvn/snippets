'use strict'; const log = console.log; (async ()=>{

const isSameTree = function f(p, q) {
  if(!p && !q)
    return true;
  if(!p || !q)
    return false;
  if(p.val !== q.val)
    return false;
  return f(p.right, q.right) &&
         f(p.left , q.left);
};


})();
