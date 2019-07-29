---
layout: page
title: home
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

function identity<T>(arg: T): T {
    return arg;
}

const myIdentity: <T>(arg: T) =>
  T = identity;

log(myIdentity(4));
log(myIdentity(['abc']));
log(identity(4));
log(identity(['abc']));

})();
{% endhighlight %}

Output

```
4
[ 'abc' ]
4
[ 'abc' ]
```
