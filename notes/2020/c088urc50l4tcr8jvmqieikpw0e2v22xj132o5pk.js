'use strict'; const log = console.log; (async ()=>{

// Explain A below

// Given two binary trees, write a function to
// check if they are the same or not, iterative
// solution:
const isSameTree = (p, q) => {
  const queueP = [p], queueQ = [q];

  while(queueP.length) {
    const p = queueP.shift(), q = queueQ.shift();
    if(!check(p, q))
      return false;
    if(!p || !q)
      continue;
    if(p.left || q.left) {    // A
      queueP.push(p.left);
      queueQ.push(q.left);
    }
    if(p.right || q.right) {  // A
      queueP.push(p.right);
      queueQ.push(q.right);
    }
  }
  return true;
};

const check = (p, q) => {
  if(!p && !q) return true;
  if(!p || !q) return false;
  return p.val === q.val;
};

// Not needed optimization. This just prevents
// enqueueing a pair of nulls, which in a
// subsequent iteration will be considered equal

})();
