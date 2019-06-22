---
layout: page
title: home
---

{% highlight csharp %}
var A = new SortedSet<int>() { 1, 2 };
var B = new SortedSet<int>() { 3, 4 };

// B × A
var q =
  from b in B
  from a in A
  select new[] { b, a };

foreach (var i in q)
  $"({i.First()}, {i.Last()})".Dump();
{% endhighlight %}

Output

```
(3, 1)
(3, 2)
(4, 1)
(4, 2)
```
