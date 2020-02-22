---
layout: page
title: home
---

{% highlight csharp %}
string defaultName0 = null,
       defaultName1 = "Default Title 1",
       suppliedName = null;

// one line
var name =
  suppliedName ?? defaultName0 ?? defaultName1;
name.Dump();

{% endhighlight %}

Output

```
Default Title 1
```
