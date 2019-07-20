---
layout: page
title: home
---

{% highlight csharp %}
var fruits = new ArrayList()
         {"Mango","Orange","Apple",3.0,"Banana"};

var q = from word in fruits.OfType<string>()
        where word.ToLower().Contains("n")
        select word;

foreach (var w in q)
  w.Dump();
{% endhighlight %}

Output

```
Mango
Orange
Banana
```
