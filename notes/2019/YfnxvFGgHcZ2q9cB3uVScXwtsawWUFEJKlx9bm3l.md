---
layout: page
title: home
---

{% highlight csharp %}
var nums = Enumerable.Range(1, 10);
var q =
  // x :: (int, int)
  from x in nums.Select((e, i) => (e, i))
  where x.e % 3 == 0 && x.i >= 5
  select x.e;

foreach (int p in q)
  p.Dump();
{% endhighlight %}

Output

```
6
9
```
