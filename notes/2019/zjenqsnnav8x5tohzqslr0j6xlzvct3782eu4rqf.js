'use strict'; const log = console.log; (async ()=>{

const isSameTree = (p, q) => {
  const queueP = [p], queueQ = [q];

  while(queueP.length) {
    const p = queueP.shift(), q = queueQ.shift();
    if(!check(p, q))
      return false;
    if(!p || !q)
      continue;
    if(p.left || q.left) {
      queueP.push(p.left);
      queueQ.push(q.left);
    }
    if(p.right || q.right) {
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

})();
