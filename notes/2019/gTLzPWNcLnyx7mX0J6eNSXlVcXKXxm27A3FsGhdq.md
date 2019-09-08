---
layout: page
title: Note
permalink: /note/
---

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

const x = new Map(
  [[2, 'two'], [1, 'one'], [3, 'three']]);

x.keys().forEach(x => log(x));

})();
{% endhighlight %}

Output

```
(node:28531) UnhandledPromiseRejectionWarning:
TypeError: x.keys(...).forEach is not a function
  at /mnt/fd/75/89/id/73/38/proj/2019/anki-jekyll/src/tmp.js:6:10
  at Object.<anonymous> (/mnt/fd/75/89/id/73/38/proj/2019/anki-jekyll/src/tmp.js:8:3)
...
```

`Map.prototype.keys()` returns an iterator not an array.
