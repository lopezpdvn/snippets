---
layout: page
title: home
---

{% highlight csharp %}
var A = new SortedSet<int>() { 1, 2 };
var B = new SortedSet<int>();

// A × B
var q = (from a in A
         from b in B
         select new[] { a, b })
        .ToHashSet();

// B × A
var p = (from b in B
         from a in A
         select new[] { b, a })
        .ToHashSet();

var neq = q.SetEquals(p) ? "=" : "≠";

$"A {neq} B".Dump();
$"|A × B| = {q.Count()}".Dump();
$"|B × A| = {p.Count()}".Dump();
{% endhighlight %}

Output

```
A = B
|A × B| = 0
|B × A| = 0
```
