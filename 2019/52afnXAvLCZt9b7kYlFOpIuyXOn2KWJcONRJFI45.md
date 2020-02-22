---
layout: page
title: home
---

Doubly linked list `setPrevious`.

{% highlight java %}
public void setPrevious(LinkedListNode p) {
  prev = p;
  if (p != null && p.next != this) {
    p.setNext(this);
  }
}
{% endhighlight %}
