---
layout: page
title: home
---

{% highlight csharp %}
IEnumerable fruits = new ArrayList()
         {"Mango","Orange","Apple",3.0,"Banana"};

IEnumerable<string> q =
  from word in fruits.OfType<string>()
  where word.ToLower().Contains("n")
  select word;

foreach (string w in q)
  w.Dump();
{% endhighlight %}

Output

```
Mango
Orange
Banana
```
