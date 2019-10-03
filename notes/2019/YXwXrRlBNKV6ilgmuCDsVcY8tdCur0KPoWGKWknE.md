---
layout: page
title: Note
permalink: /note/
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

const x: void = null;
const y: void = undefined;
const z: void = 'abc';

})();
{% endhighlight %}

```
tsc
tmp.ts:5:7 - error TS2322: Type '"abc"' is not assignable to type 'void'.

5 const z: void = 'abc';
        ~


Found 1 error.
```
