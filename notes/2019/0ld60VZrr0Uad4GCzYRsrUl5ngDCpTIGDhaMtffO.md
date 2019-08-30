---
layout: page
title: Note
permalink: /note/
---

How to use dynamic arrays in JavaScript? Example of array of strings. Include
indexing with invalid index, and size

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

const x = [];
x.push('2');
x.push('3');
x.splice(0, 0, '0');
x.splice(1, 0, '1');
x.splice(4, 0, '4', '5');
log(x);

log(x[2]);
log(x[4]);
log(x[99]);

log(x.splice(2, 1)[0]);
log(x.splice(3, 1)[0]);

log(x.indexOf('9'));
log(x.indexOf('1'));

})();
{% endhighlight %}

Output

```
[ '0', '1', '2', '3', '4', '5' ]
2
4
undefined
2
4
-1
1
```
