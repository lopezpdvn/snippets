---
layout: page
title: Note
permalink: /note
---

Explain `int setBit(int num, int i)` in bit manipulation

{% highlight java %}
class BitManipulation {
  public static int setBit(int num, int i) {
    return num | (1 << i);
  }
}
{% endhighlight %}
