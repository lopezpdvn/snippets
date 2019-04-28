---
layout: page
title: home
---

{% highlight javascript %}
'use strict';
const log = console.log;

const rslvAfter2Secs = x => new Promise(
 rslv => setTimeout(() => rslv(x), 2000)
);

const f1 = async () => {
  log('just before waiting 4 rslvAfter2Secs');
  const x = await rslvAfter2Secs(10);
  log('after waiting for rslvAfter2Secs') 
  log(x); // 10
}

f1();
log('after calling async function f1');

// just before waiting 4 rslvAfter2Secs
// after calling async function f1
// after waiting for rslvAfter2Secs
// 10
{% endhighlight %}
