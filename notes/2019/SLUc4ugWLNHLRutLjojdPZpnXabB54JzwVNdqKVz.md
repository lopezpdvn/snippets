---
layout: page
title: home
---

{% highlight haskell %}
data Shape =
  Circle Float Float Float |
  Rectangle Float Float Float Float
main = return ()
{% endhighlight %}

The **Circle** value constructor has three fields, which take floats. So when
we write a value constructor, we can optionally add some types after it and
those types define the values it will contain. Here, the first two fields are
the coordinates of its center, the third one its radius. The **Rectangle**
value constructor has four fields which accept floats. The first two are the
coordinates to its upper left corner and the second two are coordinates to its
lower right one.
