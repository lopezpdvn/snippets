'use strict'; const log = console.log; (async ()=>{

const isSameTree = (p, q) => {
  const deqP = [p], deqQ = [q];

  while(deqP.length) {
    const p = deqP.shift(), q = deqQ.shift();
    if(!check(p, q))
      return false;
    if(!p || !q)
      continue;
    if(p.left || q.left) {
      deqP.push(p.left);
      deqQ.push(q.left);
    }
    if(p.right || q.right) {
      deqP.push(p.right);
      deqQ.push(q.right);
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
