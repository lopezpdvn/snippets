---
layout: page
title: Note
permalink: /note/
---

`strictNullChecks = true`

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

let x: string | undefined | null;
x = 'abc';
x = undefined;
x = null;
x = 1;

})();
{% endhighlight %}

Output

```
tsc
tmp.ts:7:1 - error TS2322: Type '1' is not assignable to type 'string | null | undefined'.

7 x = 1;

Found 1 error.
```
