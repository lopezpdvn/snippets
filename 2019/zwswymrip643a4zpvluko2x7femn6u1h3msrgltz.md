---
layout: page
title: Note
permalink: /note/
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

const x: [number, string, boolean] =
  [7, 'hello', true];                  // 1 line

let a: number, b: string, c: boolean; // 1 line
[a, b, c] = x;                        // 1 line

})();
{% endhighlight %}
