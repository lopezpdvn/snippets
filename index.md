---
layout: page
title: home
---

_ThenBy_: Use after earlier sorting, to further sort a collection in ascending
order.

This Lambda Expression sample first sorts array by string length of city capital, and then by alphabet.

{% highlight csharp %}
string[] capitals = {
    "Berlin", "Paris", "Madrid", "Tokyo", "London",
    "Athens", "Beijing", "Seoul" };

var result = (from c in capitals
              orderby c.Length
              select c)
             .ThenBy(c => c);

Debug.WriteLine("Ordered list of capitals, first by length and then alphabetical:");
foreach (string capital in result)
    Debug.WriteLine(capital);
{% endhighlight %}

Output:

```
Ordered list of capitals, first by length and then alphabetical:
Paris
Seoul
Tokyo
Athens
Berlin
London
Madrid
Beijing
```
