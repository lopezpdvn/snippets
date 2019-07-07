---
layout: page
title: home
---

{% highlight csharp %}
var A = new HashSet<int>{ 1, 2, 3 };
var B = new HashSet<int>{ 3, 4, 5 };

// C = A ∩ B
var C = A.Intersect(B);

foreach (var i in C.OrderBy(e => e))
  i.Dump();
{% endhighlight %}

Output

```
3
```
