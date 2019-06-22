---
layout: page
title: home
---

{% highlight csharp %}
var A = new SortedSet<int>() { 1, 2 };
var B = new SortedSet<int>() { 3, 4 };

// A × B
var q =
  from a in A
  from b in B
  select new[] { a, b };

foreach (var i in q)
  $"({i.First()}, {i.Last()})".Dump();
{% endhighlight %}

Output

```
(1, 3)
(1, 4)
(2, 3)
(2, 4)
```
