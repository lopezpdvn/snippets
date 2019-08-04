---
layout: page
title: home
---

Explain the time complexity

{% highlight java %}
String joinWords(String[] words) {
  String sentence = "";
  for (String w: words) {
    sentence = sentence + w;
  }
  return sentence;
}
{% endhighlight %}

Let x be the length of each element of `words` and n be the length of `words`.

```
O(x + 2x + ... + nx)
```

Since multiplication is distributive over addition, we factor out x

```
O(x( 1 + 2 + ... + n )) = O(x( n(n+1)/2 ))
                        = O(xn²)
```
