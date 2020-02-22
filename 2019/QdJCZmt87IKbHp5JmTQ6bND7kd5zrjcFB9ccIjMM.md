---
layout: page
title: home
---

{% highlight csharp %}
var A = new SortedSet<int>() {1, 2};
var B = new SortedSet<int>(A);

// A × B
var q = (from a in A
       from b in B
       select new[] {a, b})
      .ToHashSet(new IntSeqEqCmp());
// B × A
var p = (from b in B
       from a in A
       select new[] { b, a })
      .ToHashSet(new IntSeqEqCmp());

q.SetEquals(p).Dump();
foreach (var x in new[] { q, p }) {
  var pairs = string.Join(", ",
    x.Select(y => $"({y.First()}, {y.Last()})"));
  $"{% raw %}{{{pairs}}}{% endraw %}".Dump();
}
{% endhighlight %}

Output

```
True
{(1, 1), (1, 2), (2, 1), (2, 2)}
{(1, 1), (1, 2), (2, 1), (2, 2)}
```
