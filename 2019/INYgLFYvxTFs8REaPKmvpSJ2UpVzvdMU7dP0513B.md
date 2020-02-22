---
layout: page
title: Note
permalink: /note/
---

Basic type called tuple.

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

type langNum = [string, string, number];
let x: langNum, y: langNum;

x = ['zero', 'cero', 0    ];
y = ['one' , 1,    , 'uno'];

log(x);
log(y);

})();
{% endhighlight %}

Output

```
tmp.ts:7:14 - error TS2322: Type 'number' is not assignable to type 'string'.

7 y = ['one' , 1,    , 'uno'];
               ~
Found 1 error.
```
