---
layout: page
title: home
---

{% highlight csharp %}
// one line
(int first, int second)[] x =
          { (1, 2), (3, 4), (5, 6), (7, 8) };

List<string> q =
  (from e in x
   select $"({e.second}, {e.first})")
  .ToList();

foreach(string s in q) s.Dump();
{% endhighlight %}

Output

```
(2, 1)
(4, 3)
(6, 5)
(8, 7)
```
