---
layout: page
title: home
---

{% highlight csharp %}
int[] A, B;
A = B = new[] {1, 2};

// A × B
var q =
  from a in A
  from b in B
  select new {a, b};
  
foreach (var i in q)
  $"({i.a}, {i.b})".Dump();
{% endhighlight %}

Output

```
(1, 1)
(1, 2)
(2, 1)
(2, 2)
```
