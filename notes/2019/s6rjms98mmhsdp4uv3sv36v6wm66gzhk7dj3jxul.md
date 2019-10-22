---
layout: page
title: Note
permalink: /note/
---

`T[K]` is called _indexed access type_ or _lookup type_.

{% highlight typescript %}
const propRet =
  <T, K extends keyof T>
    (obj: T, key: K): T[K] =>
      obj[key];
{% endhighlight %}
