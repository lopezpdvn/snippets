---
layout: page
title: Note
permalink: /note/
---

Explain `int updateBit(int num, int i, boolean bitIs1)` in bit manipulation

{% highlight java %}
class BitManipulation {

  public static int updateBit(
    int num, int i, boolean bitIs1)
  {
    int value = bitIs1 ? 1 : 0;
    int mask = ~(1 << i);
    return (num & mask) | (value << i);
  }

}
{% endhighlight %}
