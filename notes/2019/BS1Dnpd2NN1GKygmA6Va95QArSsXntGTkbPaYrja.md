---
layout: page
title: home
---

Singly linked list delete node.

{% highlight java %}
class Node {
  Node deleteNode(Node head, int d) {
    Node n = head;

    if (n.data == d) {
      return head.next; /* moved head*/
    }

    while (n.next != null) {
      if (n.next.data == d) {
        n.next = n.next.next;
        return head; /* head didn't change*/
      }
      n = n.next;
    }

    return head;
  }
}
{% endhighlight %}
