---
layout: page
title: Note
permalink: /note/
---

`strictNullChecks = true`

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

let x: string;
x = 'abc';
x = undefined;
x = null;

})();
{% endhighlight %}

Output

```
tsc
tmp.ts:5:1 - error TS2322: Type 'undefined' is not assignable to type 'string'.

5 x = undefined;
  ~

tmp.ts:6:1 - error TS2322: Type 'null' is not assignable to type 'string'.

6 x = null;
  ~

Found 2 errors.
```
