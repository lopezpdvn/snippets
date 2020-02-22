---
layout: page
title: Note
permalink: /note/
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

const f =
  (msg: string) : never =>
    { throw new Error(msg); }

let fail: () => never;
fail = () => f('something failed');

})();
{% endhighlight %}
