---
layout: page
title: home
---

{% highlight csharp %}
static class StringExtension {
  // This is called an extension method
  internal static int WordCount(this string str) =>
    str.Split(new[]{' '}).Length;
}

void Main() {
  var s = "How many words are in this sentence?";
  $"Word count of s is {s.WordCount()}".Dump();
}
{% endhighlight %}

Output

```
Word count of s is 7
```
