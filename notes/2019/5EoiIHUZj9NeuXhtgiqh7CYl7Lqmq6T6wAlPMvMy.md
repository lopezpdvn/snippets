---
layout: page
title: Note
permalink: /note/
---

Explain `int clearBit(int num, int i)` in bit manipulation

{% highlight java %}
class BitManipulation {
  
  public static int clearBit(int num, int i) {
    int mask = ~(1 << i);
    return num & mask;
 
  }
}
{% endhighlight %}
