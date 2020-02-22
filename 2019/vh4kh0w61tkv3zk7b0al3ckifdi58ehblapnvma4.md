---
layout: page
title: Note
permalink: /note/
---

Given two binary trees, write a function to check if they are the same or not.
Iterative solution:

{% highlight javascript %}
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
{% endhighlight %}
